export type UserRole = "staff" | "manager" | null;

export interface Option {
  id: "A" | "B" | "C" | "D";
  text: string;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
  correctAnswer?: "A" | "B" | "C" | "D";
  moduleId?: number;
}

export interface Module {
  id: number;
  title: string;
  shortTitle: string;
  questions: Question[];
}

export interface Answer {
  questionId: number;
  selected: "A" | "B" | "C" | "D";
}

export interface ScoreBreakdown {
  knowledgeScore: number;
  behavioralScore: number;
  attendanceScore: number;
  weightedTotal: number;
  passed: boolean;
  moduleBreakdown: {
    moduleId: number;
    title: string;
    correct: number;
    total: number;
    percentage: number;
  }[];
}

export interface AssessmentSubmission {
  participantName: string;
  participantEmail: string;
  organizationName: string;
  role: UserRole;
  answers: Answer[];
  scores: ScoreBreakdown;
  submittedAt: string;
}
