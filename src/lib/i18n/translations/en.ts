// English translations
export const en = {
  // Role Selection
  roleSelection: {
    title: "Coaching Completion Assessment",
    passMarkDescription: "Pass mark is {passmark} based on attendance, knowledge/behavioral assessment, and overall performance.",
    passmark: "90%",
    yourDetails: "Your Details",
    fullName: "Full Name",
    email: "Email Address",
    organizationName: "Organization Name",
    organizationOptional: "(Optional)",
    staffMemberName: "Staff Member Name",
    staffMemberNote: "Enter the name of the staff member you are assessing",
    selectRole: "Select Your Role",
    startAssessment: "Start Assessment",
    errors: {
      nameRequired: "Name is required",
      emailRequired: "Email is required",
      emailInvalid: "Invalid email",
      roleRequired: "Please select a role",
      staffMemberRequired: "Staff member name is required for behavioral assessment",
    },
    roles: {
      staff: {
        label: "Staff Member",
        description: "I participated in a coaching session and need to complete the Knowledge Assessment.",
        weight: "Part A -- Knowledge Assessment (40%)",
      },
      manager: {
        label: "Manager / Supervisor",
        description: "I manage staff who participated and need to complete the Behavioural Assessment.",
        weight: "Part B -- Behavioural Assessment (50%)",
      },
    },
  },

  // Assessment Shell
  assessment: {
    module: "Module",
    of: "of",
    question: "Question",
    
  },

  // Module Slide
  moduleSlide: {
    selectAnswer: "Select an answer to continue",
    previous: "Previous",
    next: "Next",
    submit: "Submit Assessment",
    back: "Back",
    nextModule: "Next Module",
    reviewSubmit: "Review & Submit",
    moduleOf: "Module {current} of {total}",
    answered: "{answered}/{total} answered",
    pleaseAnswerCurrent: "Please answer this question before proceeding.",
    pleaseAnswerAll: "Please answer all {total} questions before proceeding. {remaining} remaining.",
    questionProgress: "{current} / {total}",
  },

  // Results Screen
  results: {
    complete: "Assessment Complete!",
    thankYou: "Thank you, {name}. Your responses have been successfully submitted.",
    whatNext: "What happens next?",
    step1: "Your assessment responses are being reviewed",
    step2: "Results and feedback will be shared with you shortly",
    step3: "Any follow-up actions will be communicated directly",
    yourScore: "Your Score",
    totalScore: "Total Score",
    passed: "Passed",
    failed: "Did Not Pass",
    passRequirement: "Pass requirement: {percentage}% or higher",
    retakeNote: "You may retake the assessment to improve your score.",
    emailSending: "Sending confirmation to {email}...",
    emailSent: "Confirmation sent to {email}",
    emailPending: "Email delivery pending...",
    restartAssessment: "Start New Assessment",
    participant: "Participant",
    organization: "Organization",
    role: "Role",
    dateCompleted: "Date Completed",
    rating: "Rating",
    ratings: {
      advanced: "Advanced",
      proficient: "Proficient",
      developing: "Developing",
      emerging: "Emerging",
    },
    roleNames: {
      staff: "Staff Member",
      manager: "Manager/Supervisor",
    },
  },

  // Common
  common: {
    loading: "Loading...",
    cancel: "Cancel",
    confirm: "Confirm",
    close: "Close",
  },
};

export type TranslationKeys = typeof en;
