"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuestionCard } from "./question-card";
import { useTranslation } from "@/lib/i18n/use-translation";
import { interpolate } from "@/lib/i18n/translations";
import type { Question, Answer } from "@/lib/assessment-types";

interface ModuleSlideProps {
  title: string;
  moduleNumber: number;
  totalModules: number;
  questions: Question[];
  answers: Answer[];
  onAnswer: (questionId: number, selected: "A" | "B" | "C" | "D") => void;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export function ModuleSlide({
  title,
  moduleNumber,
  totalModules,
  questions,
  answers,
  onAnswer,
  onNext,
  onPrev,
  isFirst,
  isLast,
}: ModuleSlideProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const t = useTranslation();

  const question = questions[currentQ];
  const answeredInModule = questions.filter((q) =>
    answers.some((a) => a.questionId === q.id)
  ).length;
  const allAnswered = answeredInModule === questions.length;
  const currentAnswer = answers.find((a) => a.questionId === question.id);
  const isLastQuestion = currentQ === questions.length - 1;

  function handleNext() {
    // Check if current question is answered before proceeding
    if (!currentAnswer) {
      setShowWarning(true);
      return;
    }

    if (currentQ < questions.length - 1) {
      setDirection(1);
      setCurrentQ((q) => q + 1);
      setShowWarning(false);
      return;
    }

    if (!allAnswered) {
      setShowWarning(true);
      return;
    }

    onNext();
    setCurrentQ(0);
    setShowWarning(false);
  }

  function handlePrev() {
    if (currentQ > 0) {
      setDirection(-1);
      setCurrentQ((q) => q - 1);
    } else {
      onPrev();
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
          <span>
            {interpolate(t.moduleSlide.moduleOf, { 
              current: moduleNumber.toString(), 
              total: totalModules.toString() 
            })}
          </span>
          <span>·</span>
          <span className="text-primary font-medium">
            {interpolate(t.moduleSlide.answered, { 
              answered: answeredInModule.toString(), 
              total: questions.length.toString() 
            })}
          </span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
          {title}
        </h2>

        <div className="flex gap-1.5 mt-3 flex-wrap">
          {questions.map((q, i) => {
            const isAnswered = answers.some((a) => a.questionId === q.id);
            const isCurrent = i === currentQ;
            return (
              <button
                key={q.id}
                onClick={() => {
                  setDirection(i > currentQ ? 1 : -1);
                  setCurrentQ(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isCurrent
                    ? "w-6 bg-primary"
                    : isAnswered
                    ? "w-2 bg-primary/60"
                    : "w-2 bg-slate-200 dark:bg-slate-700"
                }`}
                aria-label={`Go to question ${i + 1}`}
              />
            );
          })}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-4">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={question.id}
            custom={direction}
            variants={{
              enter: (d: number) => ({
                x: d > 0 ? 60 : -60,
                opacity: 0,
              }),
              center: { x: 0, opacity: 1 },
              exit: (d: number) => ({
                x: d > 0 ? -60 : 60,
                opacity: 0,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <QuestionCard
              question={question}
              questionNumber={currentQ + 1}
              totalInModule={questions.length}
              answer={currentAnswer}
              onAnswer={(id, selected) => {
                onAnswer(id, selected);
                if (currentQ < questions.length - 1) {
                  setTimeout(() => {
                    setDirection(1);
                    setCurrentQ((q) => q + 1);
                  }, 400);
                }
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showWarning && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="flex items-center gap-2 text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-3 mb-4 text-sm"
          >
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>
              {!currentAnswer ? (
                t.moduleSlide.pleaseAnswerCurrent
              ) : (
                <>{interpolate(t.moduleSlide.pleaseAnswerAll, { 
                  total: questions.length.toString(),
                  remaining: (questions.length - answeredInModule).toString()
                })}</>
              )}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={isFirst && currentQ === 0}
          className="gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          {t.moduleSlide.back}
        </Button>

        <span className="text-xs text-slate-400">
          {interpolate(t.moduleSlide.questionProgress, {
            current: (currentQ + 1).toString(),
            total: questions.length.toString()
          })}
        </span>

        <Button 
          onClick={handleNext} 
          className="gap-2" 
          variant="default" 
          disabled={!currentAnswer || (isLastQuestion && !allAnswered)}
        >
          {isLastQuestion ? (
            isLast ? (
              <>{t.moduleSlide.reviewSubmit}</>
            ) : (
              <>
                {t.moduleSlide.nextModule}
                <ChevronRight className="w-4 h-4" />
              </>
            )
          ) : (
            <>
              {t.moduleSlide.next}
              <ChevronRight className="w-4 h-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
