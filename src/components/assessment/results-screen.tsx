"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Trophy, RefreshCw, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { ScoreBreakdown, UserRole } from "@/lib/assessment-types";
import { getOverallRating } from "@/lib/scoring";
import { cn } from "@/lib/utils";

interface ResultsScreenProps {
  scores: ScoreBreakdown;
  role: UserRole;
  name: string;
  email: string;
  organizationName: string;
  onRestart: () => void;
  isSending: boolean;
  emailSent: boolean;
}

const RATING_CONFIG = {
  Advanced: {
    color: "text-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    border: "border-emerald-200",
  },
  Proficient: {
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200",
  },
  Developing: {
    color: "text-amber-600",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-200",
  },
  Emerging: {
    color: "text-red-600",
    bg: "bg-red-50 dark:bg-red-950/30",
    border: "border-red-200",
  },
};

export function ResultsScreen({
  scores,
  role,
  name,
  email,
  organizationName,
  onRestart,
  isSending,
  emailSent,
}: ResultsScreenProps) {
  const rating = getOverallRating(scores.weightedTotal);
  const ratingConfig = RATING_CONFIG[rating as keyof typeof RATING_CONFIG];

  const scoreItems =
    role === "staff"
      ? [
          {
            label: "Knowledge Assessment",
            score: scores.knowledgeScore,
            weight: "40%",
            color: "bg-rose-400",
          },
          {
            label: "Attendance Evaluation",
            score: scores.attendanceScore,
            weight: "10%",
            color: "bg-teal-400",
          },
        ]
      : [
          {
            label: "Behavioural Assessment",
            score: scores.behavioralScore,
            weight: "50%",
            color: "bg-blue-400",
          },
          {
            label: "Attendance Evaluation",
            score: scores.attendanceScore,
            weight: "10%",
            color: "bg-teal-400",
          },
        ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={cn(
            "rounded-2xl p-6 mb-6 text-center border-2",
            scores.passed
              ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800"
              : "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800"
          )}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-3"
          >
            {scores.passed ? (
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <Trophy className="w-8 h-8 text-white" />
              </div>
            ) : (
              <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center shadow-lg">
                <XCircle className="w-8 h-8 text-white" />
              </div>
            )}
          </motion.div>
          <h1 className="text-2xl font-bold mb-1">
            {scores.passed ? "Congratulations!" : "Assessment Complete"}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {scores.passed
              ? `Well done, ${name}. You have passed the Coaching Assessment.`
              : `Thank you, ${name}. You will be enrolled in an extended coaching session.`}
          </p>
        </motion.div>

        <Card className="mb-6 shadow-sm border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-slate-500 mb-1">Final Score</p>
                <div className="flex items-end gap-2">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className={cn(
                      "text-5xl font-black",
                      scores.passed
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-red-500 dark:text-red-400"
                    )}
                  >
                    {scores.weightedTotal}%
                  </motion.span>
                  <span className="text-slate-400 text-sm mb-2">
                    / Pass mark: 90%
                  </span>
                </div>
              </div>
              <div
                className={cn(
                  "px-4 py-2 rounded-xl border",
                  ratingConfig.bg,
                  ratingConfig.border
                )}
              >
                <p className="text-xs text-slate-500 mb-0.5">Rating</p>
                <p className={cn("font-bold text-lg", ratingConfig.color)}>
                  {rating}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {scoreItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className={cn("w-2.5 h-2.5 rounded-full", item.color)} />
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {item.label}
                      </span>
                      <Badge className="text-xs" aria-hidden>
                        {item.weight}
                      </Badge>
                    </div>
                    <span className="font-semibold">{item.score}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className={cn("h-full rounded-full", item.color)}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.score}%` }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {role === "staff" && scores.moduleBreakdown.length > 0 && (
              <>
                <Separator className="my-5" />
                <div>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                    Module Breakdown
                  </p>
                  <div className="space-y-2">
                    {scores.moduleBreakdown.map((mod) => (
                      <div
                        key={mod.moduleId}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-slate-600 dark:text-slate-400 truncate flex-1 mr-4">
                          {mod.title}
                        </span>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-xs text-slate-400">
                            {mod.correct}/{mod.total}
                          </span>
                          <span
                            className={cn(
                              "text-xs font-semibold w-10 text-right",
                              mod.percentage >= 90
                                ? "text-emerald-600"
                                : mod.percentage >= 70
                                ? "text-amber-600"
                                : "text-red-500"
                            )}
                          >
                            {mod.percentage}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-6 text-sm"
        >
          {isSending ? (
            <>
              <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin shrink-0" />
              <span className="text-slate-600 dark:text-slate-300">
                Sending your results to <strong>{email}</strong>...
              </span>
            </>
          ) : emailSent ? (
            <>
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="text-slate-600 dark:text-slate-300">
                Results sent to <strong>{email}</strong>
              </span>
            </>
          ) : (
            <>
              <Mail className="w-5 h-5 text-slate-400 shrink-0" />
              <span className="text-slate-500">Email delivery pending...</span>
            </>
          )}
        </motion.div>

        <Button variant="outline" className="w-full gap-2" onClick={onRestart}>
          <RefreshCw className="w-4 h-4" />
          Start New Assessment
        </Button>
      </motion.div>
    </div>
  );
}
