"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, UserCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import type { UserRole } from "@/lib/assessment-types";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslation } from "@/lib/i18n/use-translation";
import { interpolate } from "@/lib/i18n/translations";

interface RoleSelectionProps {
  onConfirm: (role: UserRole, name: string, email: string, org: string, staffMemberName?: string) => void;
}

export function RoleSelection({ onConfirm }: RoleSelectionProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [staffMemberName, setStaffMemberName] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const t = useTranslation();

  const roles = [
    {
      id: "staff" as UserRole,
      label: t.roleSelection.roles.staff.label,
      description: t.roleSelection.roles.staff.description,
      icon: Users,
      weight: t.roleSelection.roles.staff.weight,
      color: "from-rose-400 to-rose-600",
      border: "border-rose-400",
      bg: "bg-rose-50",
    },
    {
      id: "manager" as UserRole,
      label: t.roleSelection.roles.manager.label,
      description: t.roleSelection.roles.manager.description,
      icon: UserCheck,
      weight: t.roleSelection.roles.manager.weight,
      color: "from-teal-400 to-teal-600",
      border: "border-teal-400",
      bg: "bg-teal-50",
    },
  ];

  function validate() {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = t.roleSelection.errors.nameRequired;
    if (!email.trim()) errs.email = t.roleSelection.errors.emailRequired;
    else if (!/\S+@\S+\.\S+/.test(email)) errs.email = t.roleSelection.errors.emailInvalid;
    if (!selectedRole) errs.role = t.roleSelection.errors.roleRequired;
    if (selectedRole === "manager" && !staffMemberName.trim()) {
      errs.staffMemberName = t.roleSelection.errors.staffMemberRequired;
    }
    return errs;
  }

  function handleStart() {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    onConfirm(selectedRole, name.trim(), email.trim(), org.trim(), staffMemberName.trim() || undefined);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-4">
      {/* Language Switcher - Fixed Position */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
          >
            <UserCheck className="w-8 h-8 text-primary-foreground" />
          </motion.div>
          <h1 className="text-3xl font-bold text-slate-900">
            {t.roleSelection.title}
          </h1>
          <p className="text-slate-500 mt-2 text-sm">
            {interpolate(t.roleSelection.passMarkDescription, { passmark: t.roleSelection.passmark })}
          </p>
        </div>

        <Card className="mb-6 shadow-sm border-0 bg-white/80 backdrop-blur">
          <CardContent className="p-6 space-y-4">
            <h2 className="font-semibold text-slate-700 mb-2">{t.roleSelection.yourDetails}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">{t.roleSelection.fullName} *</Label>
                <Input
                  id="name"
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={errors.name ? "border-red-400" : ""}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <Label htmlFor="email">{t.roleSelection.email} *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jane@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={errors.email ? "border-red-400" : ""}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>
            </div>
            <div>
              <Label htmlFor="org">{t.roleSelection.organizationName} {t.roleSelection.organizationOptional}</Label>
              <Input
                id="org"
                placeholder="Company name"
                value={org}
                onChange={(e) => setOrg(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4 mb-6">
          <p className="text-sm font-medium text-slate-600">{t.roleSelection.selectRole} *</p>
          {errors.role && <p className="text-xs text-red-500">{errors.role}</p>}
          {roles.map((role) => {
            const Icon = role.icon;
            const isSelected = selectedRole === role.id;
            return (
              <motion.div
                key={role.id}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setSelectedRole(role.id)}
                className={cn(
                  "cursor-pointer rounded-xl border-2 p-5 transition-all duration-200",
                  isSelected
                    ? cn(role.border, role.bg, "shadow-md")
                    : "border-slate-200 bg-white hover:border-slate-300"
                )}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br text-white shadow",
                      role.color
                    )}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">
                        {role.label}
                      </h3>
                      <span className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                        {role.weight}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 mt-1">
                      {role.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {selectedRole === "manager" && (
          <Card className="mb-6 shadow-sm border-0 bg-white/80 backdrop-blur">
            <CardContent className="p-6">
              <Label htmlFor="staffMemberName">{t.roleSelection.staffMemberName} *</Label>
              <Input
                id="staffMemberName"
                placeholder={t.roleSelection.staffMemberNote}
                value={staffMemberName}
                onChange={(e) => setStaffMemberName(e.target.value)}
                className={errors.staffMemberName ? "border-red-400" : ""}
              />
              {errors.staffMemberName && (
                <p className="text-xs text-red-500 mt-1">{errors.staffMemberName}</p>
              )}
            </CardContent>
          </Card>
        )}

        <Card className="mb-8 border-0 bg-amber-50 shadow-none">
          <CardContent className="p-4 flex gap-3">
            <div className="text-amber-500 text-lg mt-0.5">i</div>
            <div className="text-sm text-amber-800 space-y-1">
              <p>
                <strong>{interpolate(t.roleSelection.passMarkDescription, { passmark: t.roleSelection.passmark })}</strong>
              </p>
            </div>
          </CardContent>
        </Card>

        <Button size="lg" className="w-full gap-2 text-base h-12" onClick={handleStart}>
          {t.roleSelection.startAssessment}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </motion.div>
    </div>
  );
}
