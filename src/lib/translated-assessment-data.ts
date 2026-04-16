import type { Module, Question } from "./assessment-types";
import { translations } from "./i18n/translations/index";

// Correct answers mapping for staff questions
const CORRECT_ANSWERS: Record<number, "A" | "B" | "C" | "D"> = {
  1: "B", 2: "B", 3: "B", 4: "B", 5: "B", 6: "C",
  7: "B", 8: "B", 9: "B", 10: "B", 11: "B", 12: "B", 13: "B",
  14: "B", 15: "B", 16: "B", 17: "B", 18: "B", 19: "B",
  20: "B", 21: "B", 22: "B", 23: "B", 24: "B",
  25: "B", 26: "B", 27: "B", 28: "B", 29: "B", 30: "B",
  31: "B", 32: "B", 33: "A", 34: "B", 35: "A",
  36: "B", 37: "B", 38: "B", 39: "B", 40: "A",
};

// Helper function to get translated modules for staff assessment
export function getTranslatedStaffModules(language: 'en' | 'es'): Module[] {
  const t = translations[language];
  
  return [
    {
      id: 1,
      title: t.questions.modules[1].title,
      shortTitle: t.questions.modules[1].shortTitle,
      questions: Object.entries(t.questions.staff[1]).map(([questionId, questionData]) => ({
        id: parseInt(questionId),
        moduleId: 1,
        text: questionData.text,
        correctAnswer: CORRECT_ANSWERS[parseInt(questionId)],
        options: [
          { id: "A" as const, text: questionData.options.A },
          { id: "B" as const, text: questionData.options.B },
          { id: "C" as const, text: questionData.options.C },
          { id: "D" as const, text: questionData.options.D },
        ],
      })),
    },
    {
      id: 2,
      title: t.questions.modules[2].title,
      shortTitle: t.questions.modules[2].shortTitle,
      questions: Object.entries(t.questions.staff[2]).map(([questionId, questionData]) => ({
        id: parseInt(questionId),
        moduleId: 2,
        text: questionData.text,
        correctAnswer: CORRECT_ANSWERS[parseInt(questionId)],
        options: [
          { id: "A" as const, text: questionData.options.A },
          { id: "B" as const, text: questionData.options.B },
          { id: "C" as const, text: questionData.options.C },
          { id: "D" as const, text: questionData.options.D },
        ],
      })),
    },
    {
      id: 3,
      title: t.questions.modules[3].title,
      shortTitle: t.questions.modules[3].shortTitle,
      questions: Object.entries(t.questions.staff[3]).map(([questionId, questionData]) => ({
        id: parseInt(questionId),
        moduleId: 3,
        text: questionData.text,
        correctAnswer: CORRECT_ANSWERS[parseInt(questionId)],
        options: [
          { id: "A" as const, text: questionData.options.A },
          { id: "B" as const, text: questionData.options.B },
          { id: "C" as const, text: questionData.options.C },
          { id: "D" as const, text: questionData.options.D },
        ],
      })),
    },
    {
      id: 4,
      title: t.questions.modules[4].title,
      shortTitle: t.questions.modules[4].shortTitle,
      questions: Object.entries(t.questions.staff[4]).map(([questionId, questionData]) => ({
        id: parseInt(questionId),
        moduleId: 4,
        text: questionData.text,
        correctAnswer: CORRECT_ANSWERS[parseInt(questionId)],
        options: [
          { id: "A" as const, text: questionData.options.A },
          { id: "B" as const, text: questionData.options.B },
          { id: "C" as const, text: questionData.options.C },
          { id: "D" as const, text: questionData.options.D },
        ],
      })),
    },
    {
      id: 5,
      title: t.questions.modules[5].title,
      shortTitle: t.questions.modules[5].shortTitle,
      questions: Object.entries(t.questions.staff[5]).map(([questionId, questionData]) => ({
        id: parseInt(questionId),
        moduleId: 5,
        text: questionData.text,
        correctAnswer: CORRECT_ANSWERS[parseInt(questionId)],
        options: [
          { id: "A" as const, text: questionData.options.A },
          { id: "B" as const, text: questionData.options.B },
          { id: "C" as const, text: questionData.options.C },
          { id: "D" as const, text: questionData.options.D },
        ],
      })),
    },
    {
      id: 6,
      title: t.questions.modules[6].title,
      shortTitle: t.questions.modules[6].shortTitle,
      questions: Object.entries(t.questions.staff[6]).map(([questionId, questionData]) => ({
        id: parseInt(questionId),
        moduleId: 6,
        text: questionData.text,
        correctAnswer: CORRECT_ANSWERS[parseInt(questionId)],
        options: [
          { id: "A" as const, text: questionData.options.A },
          { id: "B" as const, text: questionData.options.B },
          { id: "C" as const, text: questionData.options.C },
          { id: "D" as const, text: questionData.options.D },
        ],
      })),
    },
    {
      id: 7,
      title: t.questions.modules[7].title,
      shortTitle: t.questions.modules[7].shortTitle,
      questions: Object.entries(t.questions.staff[7]).map(([questionId, questionData]) => ({
        id: parseInt(questionId),
        moduleId: 7,
        text: questionData.text,
        correctAnswer: CORRECT_ANSWERS[parseInt(questionId)],
        options: [
          { id: "A" as const, text: questionData.options.A },
          { id: "B" as const, text: questionData.options.B },
          { id: "C" as const, text: questionData.options.C },
          { id: "D" as const, text: questionData.options.D },
        ],
      })),
    },
  ];
}

// Helper function to get translated manager questions
export function getTranslatedManagerQuestions(language: 'en' | 'es'): Question[] {
  const t = translations[language];
  
  return Object.entries(t.questions.manager).map(([questionId, questionData]) => ({
    id: parseInt(questionId),
    text: questionData.text,
    options: [
      { id: "A" as const, text: questionData.options.A },
      { id: "B" as const, text: questionData.options.B },
      { id: "C" as const, text: questionData.options.C },
      { id: "D" as const, text: questionData.options.D },
    ],
  }));
}

// Keep the original constants
export const PASS_MARK = 90;
export const WEIGHTS = {
  knowledge: 0.4,
  behavioral: 0.5,
  attendance: 0.1,
};