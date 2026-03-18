"use client";

import { useState } from "react";
import { RoleSelection } from "@/components/assessment/role-selection";
import { AssessmentShell } from "@/components/assessment/assessment-shell";
import type { UserRole } from "@/lib/assessment-types";

export default function AssessmentPage() {
  const [role, setRole] = useState<UserRole>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [staffMemberName, setStaffMemberName] = useState("");
  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <RoleSelection
        onConfirm={(selectedRole, fullName, emailAddress, orgName, staffName) => {
          setRole(selectedRole);
          setName(fullName);
          setEmail(emailAddress);
          setOrg(orgName);
          setStaffMemberName(staffName || "");
          setStarted(true);
        }}
      />
    );
  }

  return (
    <AssessmentShell
      role={role}
      name={name}
      email={email}
      organizationName={org}
      staffMemberName={staffMemberName}
    />
  );
}
