import type { Answer, ScoreBreakdown, UserRole } from "./assessment-types";
import { MANAGER_QUESTIONS, PASS_MARK, STAFF_MODULES, WEIGHTS } from "./assessment-data";

const OPTION_SCORES: Record<string, number> = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
};

export function calculateKnowledgeScore(answers: Answer[]): {
  score: number;
  moduleBreakdown: ScoreBreakdown["moduleBreakdown"];
} {
  const moduleBreakdown: ScoreBreakdown["moduleBreakdown"] = [];

  let totalCorrect = 0;
  let totalQuestions = 0;

  for (const module of STAFF_MODULES) {
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

export function calculateBehavioralScore(answers: Answer[]): number {
  const behavioralQuestions = MANAGER_QUESTIONS.slice(0, 10);
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
  attendanceScore = 100
): ScoreBreakdown {
  if (role === "staff") {
    const { score: knowledgeScore, moduleBreakdown } =
      calculateKnowledgeScore(answers);

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

  const behavioralScore = calculateBehavioralScore(answers);

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
