"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Question, Answer } from "@/lib/assessment-types";
import { CheckCircle2 } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalInModule: number;
  answer?: Answer;
  onAnswer: (questionId: number, selected: "A" | "B" | "C" | "D") => void;
}

const OPTION_COLORS = {
  A: "hover:border-rose-400 hover:bg-rose-50 data-[selected=true]:border-rose-400 data-[selected=true]:bg-rose-50",
  B: "hover:border-teal-400 hover:bg-teal-50 data-[selected=true]:border-teal-400 data-[selected=true]:bg-teal-50",
  C: "hover:border-blue-400 hover:bg-blue-50 data-[selected=true]:border-blue-400 data-[selected=true]:bg-blue-50",
  D: "hover:border-violet-400 hover:bg-violet-50 data-[selected=true]:border-violet-400 data-[selected=true]:bg-violet-50",
};

const OPTION_DOT_COLORS = {
  A: "bg-rose-400",
  B: "bg-teal-400",
  C: "bg-blue-400",
  D: "bg-violet-400",
};

export function QuestionCard({
  question,
  questionNumber,
  totalInModule,
  answer,
  onAnswer,
}: QuestionCardProps) {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="w-full"
    >
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-full">
            Q{questionNumber} of {totalInModule}
          </span>
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-slate-900 leading-relaxed">
          {question.text}
        </h3>
      </div>

      <div className="space-y-3">
        {question.options.map((option) => {
          const isSelected = answer?.selected === option.id;
          return (
            <motion.button
              key={option.id}
              whileHover={{ scale: 1.005 }}
              whileTap={{ scale: 0.995 }}
              data-selected={isSelected}
              onClick={() => onAnswer(question.id, option.id)}
              className={cn(
                "w-full text-left flex items-start gap-3 p-4 rounded-xl border-2 border-slate-200",
                "bg-white transition-all duration-200 cursor-pointer",
                OPTION_COLORS[option.id]
              )}
            >
              <div
                className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all",
                  isSelected
                    ? cn(OPTION_DOT_COLORS[option.id], "text-white")
                    : "bg-slate-100 text-slate-500"
                )}
              >
                {isSelected ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <span className="text-xs font-bold">{option.id}</span>
                )}
              </div>
              <span className="text-sm md:text-base text-slate-700 leading-relaxed">
                {option.text}
              </span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
