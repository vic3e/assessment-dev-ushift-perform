"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AssessmentTimeline } from "./assessment-timeline";
import { ModuleSlide } from "./module-slide";
import { ResultsScreen } from "./results-screen";
import { FeatureSteps } from "@/components/ui/feature-section";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { getTranslatedStaffModules, getTranslatedManagerQuestions } from "@/lib/translated-assessment-data";
import { calculateFinalScore } from "@/lib/scoring";
import type { Answer, UserRole, ScoreBreakdown } from "@/lib/assessment-types";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/language-context";

interface AssessmentShellProps {
  role: UserRole;
  name: string;
  email: string;
  organizationName: string;
  staffMemberName?: string;
}

export function AssessmentShell({
  role,
  name,
  email,
  organizationName,
  staffMemberName,
}: AssessmentShellProps) {
  const { language } = useLanguage();
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scores, setScores] = useState<ScoreBreakdown | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);

  const modules =
    role === "staff"
      ? getTranslatedStaffModules(language)
      : [
          {
            id: 1,
            title: "Behavioural Assessment",
            shortTitle: "Behavioural",
            questions: getTranslatedManagerQuestions(language),
          },
        ];

  const featureSteps = modules.map((mod, i) => ({
    step: `Module ${i + 1}`,
    title: mod.shortTitle,
    content: `${mod.questions.length} questions`,
  }));

  const timelineSteps = modules.map((mod) => ({
    id: mod.id,
    label: mod.title,
    shortLabel: mod.shortTitle,
    questions: mod.questions.length,
  }));

  const totalQuestions = modules.reduce(
    (acc, m) => acc + m.questions.length,
    0
  );

  const handleAnswer = useCallback(
    (questionId: number, selected: "A" | "B" | "C" | "D") => {
      setAnswers((prev) => {
        const existing = prev.findIndex((a) => a.questionId === questionId);
        if (existing >= 0) {
          const updated = [...prev];
          updated[existing] = { questionId, selected };
          return updated;
        }
        return [...prev, { questionId, selected }];
      });
    },
    []
  );

  const handleNextModule = useCallback(() => {
    if (currentModuleIndex < modules.length - 1) {
      setSlideDirection(1);
      setCurrentModuleIndex((i) => i + 1);
    } else {
      handleSubmit();
    }
  }, [currentModuleIndex, modules.length]);

  const handlePrevModule = useCallback(() => {
    if (currentModuleIndex > 0) {
      setSlideDirection(-1);
      setCurrentModuleIndex((i) => i - 1);
    }
  }, [currentModuleIndex]);

  async function handleSubmit() {
    const staffModules = role === "staff" ? getTranslatedStaffModules(language) : undefined;
    const managerQuestions = role === "manager" ? getTranslatedManagerQuestions(language) : undefined;
    const finalScores = calculateFinalScore(role, answers, staffModules, managerQuestions);
    setScores(finalScores);
    setIsSubmitted(true);
    setIsSending(true);

    try {
      await fetch("/api/send-assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          participantName: name,
          participantEmail: email,
          organizationName,
          role,
          staffMemberName,
          answers,
          scores: finalScores,
          submittedAt: new Date().toISOString(),
          language,
        }),
      });
      setEmailSent(true);
    } catch (err) {
      console.error("Failed to send email:", err);
    } finally {
      setIsSending(false);
    }
  }

  function handleRestart() {
    setCurrentModuleIndex(0);
    setAnswers([]);
    setIsSubmitted(false);
    setScores(null);
    setEmailSent(false);
    setIsSending(false);
  }

  if (isSubmitted && scores) {
    return (
      <ResultsScreen
        scores={scores}
        role={role}
        name={name}
        email={email}
        organizationName={organizationName}
        onRestart={handleRestart}
        isSending={isSending}
        emailSent={emailSent}
      />
    );
  }

  const currentModule = modules[currentModuleIndex];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
      {/* Language Switcher - Fixed Position */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      <AssessmentTimeline
        steps={timelineSteps}
        currentStep={currentModuleIndex}
        role={role}
        totalAnswered={answers.length}
        totalQuestions={totalQuestions}
      />

      <div className="flex flex-1 max-w-7xl mx-auto w-full gap-0">
        <aside className="hidden lg:flex w-72 shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex-col">
          <FeatureSteps
            features={featureSteps}
            title={
              role === "staff" ? "Knowledge Assessment" : "Behavioural Assessment"
            }
            controlled
            currentStep={currentModuleIndex}
            onStepChange={(i) => {
              setSlideDirection(i > currentModuleIndex ? 1 : -1);
              setCurrentModuleIndex(i);
            }}
          />

          <div className="mt-auto p-4 border-t border-slate-100 dark:border-slate-800">
            <div className="text-xs text-slate-500 dark:text-slate-400 space-y-2">
              <div className="flex justify-between">
                <span>Answered</span>
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  {answers.length}/{totalQuestions}
                </span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  animate={{
                    width: `${(answers.length / totalQuestions) * 100}%`,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="flex justify-between">
                <span>Pass mark</span>
                <span className="font-semibold text-primary">90%</span>
              </div>
              <div className="flex justify-between">
                <span>Role</span>
                <span className="font-semibold capitalize text-slate-700 dark:text-slate-300">
                  {role}
                </span>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          <Card className="max-w-3xl mx-auto shadow-sm border-0 bg-white dark:bg-slate-900 min-h-[600px] flex flex-col">
            <CardContent className="flex-1 flex flex-col p-6 md:p-8">
              <AnimatePresence mode="wait" custom={slideDirection}>
                <motion.div
                  key={currentModuleIndex}
                  custom={slideDirection}
                  variants={{
                    enter: (d: number) => ({
                      x: d > 0 ? 80 : -80,
                      opacity: 0,
                    }),
                    center: { x: 0, opacity: 1 },
                    exit: (d: number) => ({
                      x: d > 0 ? -80 : 80,
                      opacity: 0,
                    }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex-1 flex flex-col"
                >
                  <ModuleSlide
                    title={currentModule.title}
                    moduleNumber={currentModuleIndex + 1}
                    totalModules={modules.length}
                    questions={currentModule.questions}
                    answers={answers}
                    onAnswer={handleAnswer}
                    onNext={handleNextModule}
                    onPrev={handlePrevModule}
                    isFirst={currentModuleIndex === 0}
                    isLast={currentModuleIndex === modules.length - 1}
                  />
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
