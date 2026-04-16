import type { Answer, ScoreBreakdown, UserRole, Module, Question } from "./assessment-types";
import { PASS_MARK, WEIGHTS } from "./translated-assessment-data";

const OPTION_SCORES: Record<string, number> = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
};

export function calculateKnowledgeScore(
  answers: Answer[], 
  staffModules: Module[]
): {
  score: number;
  moduleBreakdown: ScoreBreakdown["moduleBreakdown"];
} {
  const moduleBreakdown: ScoreBreakdown["moduleBreakdown"] = [];

  let totalCorrect = 0;
  let totalQuestions = 0;

  for (const module of staffModules) {
    let correct = 0;
    for (const question of module.questions) {
      const answer = answers.find((a) => a.questionId === question.id);
      if (answer && question.correctAnswer === answer.selected) {
        correct++;
        totalCorrect++;
      }
      totalQuestions++;
    }

    moduleBreakdown.push({
      moduleId: module.id,
      title: module.title,
      correct,
      total: module.questions.length,
      percentage: Math.round((correct / module.questions.length) * 100),
    });
  }

  const score = Math.round((totalCorrect / totalQuestions) * 100);
  return { score, moduleBreakdown };
}

export function calculateBehavioralScore(answers: Answer[], managerQuestions: Question[]): number {
  const behavioralQuestions = managerQuestions.slice(0, 10);
  const maxScore = behavioralQuestions.length * 4;

  let totalScore = 0;
  for (const question of behavioralQuestions) {
    const answer = answers.find((a) => a.questionId === question.id);
    if (answer) {
      totalScore += OPTION_SCORES[answer.selected] ?? 0;
    }
  }

  return Math.round((totalScore / maxScore) * 100);
}

export function calculateFinalScore(
  role: UserRole,
  answers: Answer[],
  staffModules?: Module[],
  managerQuestions?: Question[],
  attendanceScore = 100
): ScoreBreakdown {
  if (role === "staff") {
    if (!staffModules) {
      throw new Error("Staff modules are required for staff role scoring");
    }
    const { score: knowledgeScore, moduleBreakdown } =
      calculateKnowledgeScore(answers, staffModules);

    const weightedTotal = Math.round(
      knowledgeScore * WEIGHTS.knowledge +
        0 * WEIGHTS.behavioral +
        attendanceScore * WEIGHTS.attendance
    );

    return {
      knowledgeScore,
      behavioralScore: 0,
      attendanceScore,
      weightedTotal,
      passed: weightedTotal >= PASS_MARK,
      moduleBreakdown,
    };
  }

  if (!managerQuestions) {
    throw new Error("Manager questions are required for manager role scoring");
  }
  const behavioralScore = calculateBehavioralScore(answers, managerQuestions);

  const weightedTotal = Math.round(
    0 * WEIGHTS.knowledge +
      behavioralScore * WEIGHTS.behavioral +
      attendanceScore * WEIGHTS.attendance
  );

  return {
    knowledgeScore: 0,
    behavioralScore,
    attendanceScore,
    weightedTotal,
    passed: weightedTotal >= PASS_MARK,
    moduleBreakdown: [],
  };
}

export function getOverallRating(score: number): string {
  if (score >= 90) return "Advanced";
  if (score >= 75) return "Proficient";
  if (score >= 60) return "Developing";
  return "Emerging";
}
