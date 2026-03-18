"use client";

import { motion } from "framer-motion";
import { Check, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import type { UserRole } from "@/lib/assessment-types";

interface TimelineStep {
  id: number;
  label: string;
  shortLabel: string;
  questions: number;
}

interface AssessmentTimelineProps {
  steps: TimelineStep[];
  currentStep: number;
  role: UserRole;
  totalAnswered: number;
  totalQuestions: number;
}

export function AssessmentTimeline({
  steps,
  currentStep,
  role,
  totalAnswered,
  totalQuestions,
}: AssessmentTimelineProps) {
  const progress = Math.round((totalAnswered / totalQuestions) * 100);
  const stepProgress =
    steps.length > 1
      ? (Math.max(0, currentStep) / (steps.length - 1)) * 100
      : 0;

  return (
    <div className="bg-white border-b border-slate-200 px-4 py-4 shadow-sm">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="font-bold text-slate-900 text-sm md:text-base">
              Coaching Assessment
            </h1>
            <p className="text-xs text-slate-500">
              {role === "staff"
                ? "Part A -- Knowledge Assessment"
                : "Part B -- Behavioural Assessment"}
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
            <Clock className="w-3.5 h-3.5" />
            <span>
              {totalAnswered}/{totalQuestions} answered
            </span>
          </div>
        </div>

        <div className="w-full h-1.5 bg-slate-100 rounded-full mb-4 overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>

        <div className="relative flex items-center justify-between">
          <div className="absolute top-4 left-0 right-0 h-0.5 bg-slate-200 z-0" />
          <motion.div
            className="absolute top-4 left-0 h-0.5 bg-primary z-0"
            initial={{ width: "0%" }}
            animate={{ width: `${stepProgress}%` }}
            transition={{ duration: 0.5 }}
          />

          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;
            const isPending = index > currentStep;

            return (
              <div key={step.id} className="relative z-10 flex flex-col items-center">
                <motion.div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all",
                    isCompleted && "bg-primary border-primary text-primary-foreground",
                    isActive &&
                      "bg-primary border-primary text-primary-foreground ring-4 ring-primary/20",
                    isPending &&
                      "bg-white border-slate-300 text-slate-400"
                  )}
                  animate={isActive ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                  transition={{
                    duration: 0.5,
                    repeat: isActive ? Infinity : 0,
                    repeatDelay: 2,
                  }}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <span className="text-xs font-bold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="mt-2 text-center max-w-[80px] md:max-w-[120px]">
                  <p
                    className={cn(
                      "text-xs font-medium leading-tight",
                      isActive
                        ? "text-primary"
                        : isCompleted
                        ? "text-slate-700"
                        : "text-slate-400"
                    )}
                  >
                    <span className="hidden md:inline">{step.label}</span>
                    <span className="md:hidden">{step.shortLabel}</span>
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    {step.questions}Q
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
