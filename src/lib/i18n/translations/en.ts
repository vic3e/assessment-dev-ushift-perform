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

  // Assessment Questions and Modules
  questions: {
    // Module titles and descriptions
    modules: {
      1: {
        title: "Introduction to Coaching and Building Trust",
        shortTitle: "Coaching and Trust",
      },
      2: {
        title: "Disciplined Leadership and Maintaining Discipline",
        shortTitle: "Discipline",
      },
      3: {
        title: "Improving Self-Awareness",
        shortTitle: "Self-Awareness",
      },
      4: {
        title: "Time Management and Self-Management",
        shortTitle: "Time Management",
      },
      5: {
        title: "Effective Communication",
        shortTitle: "Communication",
      },
      6: {
        title: "Situational Leadership",
        shortTitle: "Situational Leadership",
      },
      7: {
        title: "Delegating Tasks",
        shortTitle: "Delegation",
      },
    },

    // Staff questions by module
    staff: {
      1: {
        1: {
          text: "A team member avoids one-on-one sessions after a difficult feedback discussion. How do you re-establish psychological safety and trust?",
          options: {
            A: "Ignore the situation and allow them time to recover",
            B: "Schedule another meeting, acknowledge the previous conversation, and invite open dialogue",
            C: "Escalate the issue to HR immediately",
            D: "Reduce coaching sessions with the employee",
          },
        },
        2: {
          text: "An employee says, \"Coaching feels like fault-finding.\" How do you respond?",
          options: {
            A: "Emphasize their performance gaps",
            B: "Reframe coaching as a development conversation focused on growth and strengths",
            C: "End the session and revisit it later",
            D: "Tell them coaching is mandatory",
          },
        },
        3: {
          text: "You must coach a high performer who distrusts leadership due to past experiences. What approach do you take?",
          options: {
            A: "Focus only on task performance",
            B: "Build trust gradually through consistent and transparent communication",
            C: "Avoid coaching conversations",
            D: "Assign another manager to coach them",
          },
        },
        4: {
          text: "A supervisor shares confidential coaching information with others. What should you do?",
          options: {
            A: "Ignore the issue to avoid conflict",
            B: "Address the breach privately and reinforce confidentiality expectations",
            C: "Publicly reprimand the supervisor",
            D: "Cancel coaching sessions",
          },
        },
        5: {
          text: "During coaching, an employee shuts down emotionally. What is the best response?",
          options: {
            A: "Continue the conversation regardless",
            B: "Pause, acknowledge emotions, and create space for reflection",
            C: "End the session immediately",
            D: "Move directly to performance targets",
          },
        },
        6: {
          text: "How do you balance approachability with authority as a supervisor?",
          options: {
            A: "Focus only on maintaining authority",
            B: "Avoid difficult conversations",
            C: "Maintain professional boundaries while remaining supportive and accessible",
            D: "Delegate difficult conversations to HR",
          },
        },
      },
      2: {
        7: {
          text: "A team member bends rules \"to get results.\" What should you do?",
          options: {
            A: "Ignore the behavior if results are good",
            B: "Reinforce standards while recognizing initiative",
            C: "Immediately discipline the employee",
            D: "Transfer them to another team",
          },
        },
        8: {
          text: "Two employees commit the same offense but have different histories. What is the best response?",
          options: {
            A: "Apply identical punishment regardless of context",
            B: "Consider past behavior while ensuring fairness and policy compliance",
            C: "Ignore the incident",
            D: "Discipline only the employee with the worse history",
          },
        },
        9: {
          text: "A supervisor avoids enforcing discipline to stay liked. How do you coach them?",
          options: {
            A: "Encourage them to stay friendly with the team",
            B: "Emphasize that leadership requires fairness and accountability",
            C: "Handle discipline yourself",
            D: "Ignore the issue",
          },
        },
        10: {
          text: "Team morale drops after disciplinary action. What should you do?",
          options: {
            A: "Avoid disciplinary actions in the future",
            B: "Communicate clearly about expectations and fairness",
            C: "Reverse the decision",
            D: "Ignore the morale impact",
          },
        },
        11: {
          text: "An employee claims disciplinary action was biased. What should you do?",
          options: {
            A: "Ignore the complaint",
            B: "Review the decision objectively and explain the rationale",
            C: "Reverse the action immediately",
            D: "Escalate without investigation",
          },
        },
        12: {
          text: "Minor policy breaches are increasing. What should you do?",
          options: {
            A: "Ignore the issue",
            B: "Reinforce expectations and address the behavior early",
            C: "Introduce severe penalties immediately",
            D: "Remove the policy",
          },
        },
        13: {
          text: "How do you model disciplined leadership under pressure?",
          options: {
            A: "Prioritize results over policy",
            B: "Maintain integrity and follow standards",
            C: "Delay decisions",
            D: "Delegate responsibility",
          },
        },
      },
      3: {
        14: {
          text: "Feedback suggests your leadership discourages open communication. What should you do?",
          options: {
            A: "Reject the feedback",
            B: "Reflect and seek ways to improve communication",
            C: "Ignore the feedback",
            D: "Reduce team interaction",
          },
        },
        15: {
          text: "A supervisor rejects all feedback but believes they are self-aware. What should you do?",
          options: {
            A: "Stop giving feedback",
            B: "Use reflective questions to help them evaluate their behavior",
            C: "Escalate immediately",
            D: "Ignore the issue",
          },
        },
        16: {
          text: "You notice emotional triggers affecting decisions. What action should you take?",
          options: {
            A: "Ignore them",
            B: "Reflect, seek feedback, and develop strategies to manage reactions",
            C: "Avoid making decisions",
            D: "Delegate decisions to others",
          },
        },
        17: {
          text: "An employee reacts defensively to feedback. What should you do?",
          options: {
            A: "End the discussion",
            B: "Focus on specific behaviors and invite their perspective",
            C: "Avoid future feedback",
            D: "Escalate immediately",
          },
        },
        18: {
          text: "How do you demonstrate vulnerability as a supervisor?",
          options: {
            A: "Avoid admitting mistakes",
            B: "Share learning experiences and acknowledge areas for improvement",
            C: "Focus only on authority",
            D: "Avoid discussing development",
          },
        },
        19: {
          text: "How do you ensure self-awareness leads to behavior change?",
          options: {
            A: "Reflect once and move on",
            B: "Set development goals and track progress",
            C: "Ignore feedback",
            D: "Wait for others to change",
          },
        },
      },
      4: {
        20: {
          text: "Coaching sessions keep getting postponed due to operational demands. What should you do?",
          options: {
            A: "Cancel coaching sessions",
            B: "Prioritize and schedule coaching as a non-negotiable commitment",
            C: "Delegate coaching to someone else",
            D: "Ignore the issue",
          },
        },
        21: {
          text: "A supervisor is always busy but delivers limited results. What should you do?",
          options: {
            A: "Accept the situation",
            B: "Assess priorities and identify inefficiencies",
            C: "Increase their workload",
            D: "Ignore the issue",
          },
        },
        22: {
          text: "An employee struggles with workload planning. What should you do?",
          options: {
            A: "Reassign their work",
            B: "Coach them on prioritization and planning",
            C: "Ignore the issue",
            D: "Reduce their responsibilities permanently",
          },
        },
        23: {
          text: "How do you protect coaching time in a high-pressure environment?",
          options: {
            A: "Cancel sessions during busy periods",
            B: "Schedule dedicated time and treat it as a priority",
            C: "Delegate coaching",
            D: "Conduct coaching informally only",
          },
        },
        24: {
          text: "How do you role-model effective time management?",
          options: {
            A: "Work longer hours",
            B: "Demonstrate structured planning and prioritization",
            C: "Avoid meetings",
            D: "Delegate everything",
          },
        },
      },
      5: {
        25: {
          text: "A poorly worded message damages morale. What should you do?",
          options: {
            A: "Ignore the reaction",
            B: "Clarify the message and acknowledge misunderstanding",
            C: "Blame the team",
            D: "Avoid communicating again",
          },
        },
        26: {
          text: "An employee repeatedly misunderstands expectations. What should you do?",
          options: {
            A: "Repeat instructions the same way",
            B: "Clarify expectations and confirm understanding",
            C: "Assign someone else",
            D: "Ignore the issue",
          },
        },
        27: {
          text: "How do you deliver corrective feedback effectively?",
          options: {
            A: "Deliver it publicly",
            B: "Provide clear and respectful feedback privately",
            C: "Avoid giving feedback",
            D: "Send an email instead",
          },
        },
        28: {
          text: "How do you adapt communication across personalities?",
          options: {
            A: "Use the same style for everyone",
            B: "Adjust communication style based on the audience",
            C: "Avoid adjusting communication",
            D: "Let employees adapt",
          },
        },
        29: {
          text: "A supervisor talks more than they listen. What should you do?",
          options: {
            A: "Encourage it",
            B: "Coach them to practice active listening",
            C: "Ignore the issue",
            D: "Remove them from meetings",
          },
        },
        30: {
          text: "How do you ensure clarity in communication?",
          options: {
            A: "Assume everyone understands",
            B: "Confirm understanding and summarize expectations",
            C: "Send instructions only by email",
            D: "Avoid follow-up",
          },
        },
      },
      6: {
        31: {
          text: "A new hire needs structure while a senior employee wants autonomy. What should you do?",
          options: {
            A: "Use the same leadership style",
            B: "Adapt leadership style based on each employee's needs",
            C: "Focus only on the senior employee",
            D: "Ignore the new hire",
          },
        },
        32: {
          text: "A previously strong employee's performance suddenly drops. What should you do?",
          options: {
            A: "Ignore the change",
            B: "Investigate the cause and adjust support",
            C: "Discipline immediately",
            D: "Replace the employee",
          },
        },
        33: {
          text: "How do you assess competence versus commitment?",
          options: {
            A: "Evaluate performance and motivation",
            B: "Assume competence",
            C: "Focus only on results",
            D: "Ignore motivation",
          },
        },
        34: {
          text: "How do you lead during uncertainty or change?",
          options: {
            A: "Avoid communication",
            B: "Provide direction, clarity, and reassurance",
            C: "Delay decisions",
            D: "Ignore concerns",
          },
        },
        35: {
          text: "When should you shift from coaching to directing?",
          options: {
            A: "When employees lack competence or clarity",
            B: "Whenever you prefer control",
            C: "Always",
            D: "Never",
          },
        },
      },
      7: {
        36: {
          text: "A supervisor delegates but constantly interferes. What should you do?",
          options: {
            A: "Continue micromanaging",
            B: "Clarify expectations and allow ownership",
            C: "Take the task back",
            D: "Stop delegating",
          },
        },
        37: {
          text: "A delegated task fails. What should you do?",
          options: {
            A: "Blame the employee",
            B: "Review the situation and identify lessons learned",
            C: "Avoid delegating again",
            D: "Escalate immediately",
          },
        },
        38: {
          text: "Team members feel overloaded due to poor delegation. What should you do?",
          options: {
            A: "Ignore concerns",
            B: "Review workload distribution and rebalance tasks",
            C: "Assign equal work regardless",
            D: "Reduce expectations",
          },
        },
        39: {
          text: "How can delegation support development?",
          options: {
            A: "Assign routine work only",
            B: "Assign stretch tasks that build new skills",
            C: "Avoid delegation",
            D: "Delegate only to high performers",
          },
        },
        40: {
          text: "How do you hold employees accountable after delegation?",
          options: {
            A: "Check their work constantly",
            B: "Set clear expectations and follow up appropriately",
            C: "Let them work independently without follow-up",
            D: "Avoid accountability conversations",
          },
        },
      },
    },

    // Manager/Behavioral Assessment Questions
    manager: {
      101: {
        text: "During coaching sessions, the supervisor focused on developing the staff member's skills and capabilities, not just correcting errors or addressing performance gaps",
        options: {
          A: "Rarely observed; mainly focused on correcting mistakes",
          B: "Occasionally coached for development but often focused on errors",
          C: "Frequently used coaching to guide skill development",
          D: "Consistently developed the staff member through coaching conversations",
        },
      },
      102: {
        text: "The supervisor demonstrated trust-building behaviors by maintaining confidentiality, showing empathy, and treating the staff member fairly during coaching sessions",
        options: {
          A: "Trust-building behaviors were rarely observed",
          B: "Sometimes demonstrated trust-building behaviors",
          C: "Usually maintained trust and confidentiality during sessions",
          D: "Consistently built strong trust through empathy and fairness",
        },
      },
      103: {
        text: "When addressing performance or behavioral issues, the supervisor applied discipline fairly, consistently, and in a timely manner",
        options: {
          A: "Avoided or delayed addressing discipline issues",
          B: "Applied discipline but with inconsistent standards or timing",
          C: "Applied discipline fairly in most situations",
          D: "Consistently applied discipline promptly and fairly",
        },
      },
      104: {
        text: "The supervisor showed self-awareness by acknowledging their own development areas and actively seeking or accepting feedback during coaching interactions",
        options: {
          A: "Rarely acknowledged development areas or accepted feedback",
          B: "Sometimes listened to feedback but resisted making changes",
          C: "Accepted feedback and reflected on development areas",
          D: "Actively sought feedback and demonstrated openness to improvement",
        },
      },
      105: {
        text: "The supervisor managed their time effectively by consistently prioritizing coaching sessions and giving adequate attention to both people and operational results",
        options: {
          A: "Frequently missed or rushed coaching sessions",
          B: "Sometimes managed coaching time effectively",
          C: "Generally managed time well for coaching and results",
          D: "Consistently prioritized coaching and balanced people and results",
        },
      },
      106: {
        text: "During coaching sessions, the supervisor communicated expectations clearly, listened actively to the staff member, and ensured mutual understanding",
        options: {
          A: "Expectations were often unclear; limited active listening observed",
          B: "Communication was sometimes clear but inconsistent listening",
          C: "Usually communicated clearly and listened to the staff member",
          D: "Consistently communicated clearly and demonstrated active listening",
        },
      },
      107: {
        text: "The supervisor adapted their leadership approach during coaching sessions based on the staff member's competence level and commitment to development",
        options: {
          A: "Used the same leadership style regardless of the situation",
          B: "Occasionally adapted leadership style to the staff member's needs",
          C: "Usually adapted leadership approach appropriately",
          D: "Consistently practiced situational leadership during coaching",
        },
      },
      108: {
        text: "When delegating tasks or responsibilities during coaching, the supervisor provided clear expectations, offered appropriate support, and followed up on accountability",
        options: {
          A: "Rarely delegated effectively or tended to micromanage",
          B: "Delegated but with limited clarity or follow-up",
          C: "Delegated clearly with reasonable support and follow-up",
          D: "Consistently delegated with clarity, trust, and accountability",
        },
      },
      109: {
        text: "The supervisor's coaching sessions led to measurable improvements in the staff member's performance, behaviors, or work outcomes",
        options: {
          A: "Coaching sessions rarely resulted in observable improvements",
          B: "Some improvements were observed but not consistently",
          C: "Coaching sessions often led to performance improvements",
          D: "Coaching consistently drove measurable and sustained improvements",
        },
      },
      110: {
        text: "The supervisor held themselves and the staff member accountable during coaching by addressing issues directly rather than avoiding difficult conversations",
        options: {
          A: "Frequently avoided or delayed accountability conversations",
          B: "Sometimes addressed accountability but with reluctance",
          C: "Generally held themselves and others accountable",
          D: "Consistently enforced accountability through direct conversations",
        },
      },
      111: {
        text: "Based on the completed coaching sessions, rate the supervisor's overall effectiveness in coaching and developing this staff member",
        options: {
          A: "Emerging (developing foundational coaching skills)",
          B: "Developing (building competence with some gaps)",
          C: "Proficient (demonstrates consistent coaching effectiveness)",
          D: "Advanced (exemplifies excellence in coaching and development)",
        },
      },
    },
  },
};

export type TranslationKeys = typeof en;
