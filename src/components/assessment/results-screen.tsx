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
          className="rounded-2xl p-6 mb-6 text-center border-2 bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-3"
          >
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          <h1 className="text-2xl font-bold mb-1">
            Assessment Complete!
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Thank you, {name}. Your responses have been successfully submitted.
          </p>
        </motion.div>

        <Card className="mb-6 shadow-sm border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur">
          <CardContent className="p-6 text-center">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
              What happens next?
            </h2>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-xs">1</span>
                </div>
                <p className="text-left">Your assessment responses are being reviewed</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-xs">2</span>
                </div>
                <p className="text-left">Results and feedback will be shared with you shortly</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-xs">3</span>
                </div>
                <p className="text-left">Any follow-up actions will be communicated directly</p>
              </div>
            </div>
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
                Sending confirmation to <strong>{email}</strong>...
              </span>
            </>
          ) : emailSent ? (
            <>
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="text-slate-600 dark:text-slate-300">
                Confirmation sent to <strong>{email}</strong>
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
