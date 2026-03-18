"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  step: string;
  title?: string;
  content: string;
  image?: string;
}

interface FeatureStepsProps {
  features: Feature[];
  className?: string;
  title?: string;
  autoPlayInterval?: number;
  currentStep?: number;
  onStepChange?: (step: number) => void;
  controlled?: boolean;
}

export function FeatureSteps({
  features,
  className,
  title = "Assessment Steps",
  autoPlayInterval = 3000,
  currentStep,
  onStepChange,
  controlled = false,
}: FeatureStepsProps) {
  const [internalStep, setInternalStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const activeStep = controlled ? (currentStep ?? 0) : internalStep;

  useEffect(() => {
    if (controlled) return;
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setInternalStep((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval, controlled]);

  return (
    <div className={cn("p-6", className)}>
      {title && (
        <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
      )}
      <div className="space-y-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={cn(
              "flex items-center gap-4 cursor-pointer p-3 rounded-lg transition-colors",
              index === activeStep ? "bg-primary/10" : "hover:bg-muted/50"
            )}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: index === activeStep ? 1 : 0.5 }}
            transition={{ duration: 0.4 }}
            onClick={() => {
              if (controlled && onStepChange) onStepChange(index);
              else setInternalStep(index);
            }}
          >
            <div
              className={cn(
                "w-9 h-9 rounded-full flex items-center justify-center border-2 shrink-0 transition-all",
                index < activeStep
                  ? "bg-green-500 border-green-500 text-white"
                  : index === activeStep
                  ? "bg-primary border-primary text-primary-foreground scale-110"
                  : "bg-muted border-muted-foreground/30"
              )}
            >
              {index < activeStep ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : (
                <span className="text-sm font-bold">{index + 1}</span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm leading-tight">
                {feature.title || feature.step}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                {feature.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
