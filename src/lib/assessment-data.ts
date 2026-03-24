import type { Module, Question } from "./assessment-types";

export const STAFF_MODULES: Module[] = [
  {
    id: 1,
    title: "Introduction to Coaching and Building Trust",
    shortTitle: "Coaching and Trust",
    questions: [
      {
        id: 1,
        moduleId: 1,
        text:
          "A team member avoids one-on-one sessions after a difficult feedback discussion. How do you re-establish psychological safety and trust?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Ignore the situation and allow them time to recover" },
          {
            id: "B",
            text:
              "Schedule another meeting, acknowledge the previous conversation, and invite open dialogue",
          },
          { id: "C", text: "Escalate the issue to HR immediately" },
          { id: "D", text: "Reduce coaching sessions with the employee" },
        ],
      },
      {
        id: 2,
        moduleId: 1,
        text: "An employee says, \"Coaching feels like fault-finding.\" How do you respond?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Emphasize their performance gaps" },
          {
            id: "B",
            text:
              "Reframe coaching as a development conversation focused on growth and strengths",
          },
          { id: "C", text: "End the session and revisit it later" },
          { id: "D", text: "Tell them coaching is mandatory" },
        ],
      },
      {
        id: 3,
        moduleId: 1,
        text:
          "You must coach a high performer who distrusts leadership due to past experiences. What approach do you take?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Focus only on task performance" },
          {
            id: "B",
            text:
              "Build trust gradually through consistent and transparent communication",
          },
          { id: "C", text: "Avoid coaching conversations" },
          { id: "D", text: "Assign another manager to coach them" },
        ],
      },
      {
        id: 4,
        moduleId: 1,
        text:
          "A supervisor shares confidential coaching information with others. What should you do?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Ignore the issue to avoid conflict" },
          {
            id: "B",
            text:
              "Address the breach privately and reinforce confidentiality expectations",
          },
          { id: "C", text: "Publicly reprimand the supervisor" },
          { id: "D", text: "Cancel coaching sessions" },
        ],
      },
      {
        id: 5,
        moduleId: 1,
        text: "During coaching, an employee shuts down emotionally. What is the best response?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Continue the conversation regardless" },
          {
            id: "B",
            text: "Pause, acknowledge emotions, and create space for reflection",
          },
          { id: "C", text: "End the session immediately" },
          { id: "D", text: "Move directly to performance targets" },
        ],
      },
      {
        id: 6,
        moduleId: 1,
        text: "How do you balance approachability with authority as a supervisor?",
        correctAnswer: "C",
        options: [
          { id: "A", text: "Focus only on maintaining authority" },
          { id: "B", text: "Avoid difficult conversations" },
          {
            id: "C",
            text:
              "Maintain professional boundaries while remaining supportive and accessible",
          },
          { id: "D", text: "Delegate difficult conversations to HR" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Disciplined Leadership and Maintaining Discipline",
    shortTitle: "Discipline",
    questions: [
      {
        id: 7,
        moduleId: 2,
        text: "A team member bends rules \"to get results.\" What should you do?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Ignore the behavior if results are good" },
          { id: "B", text: "Reinforce standards while recognizing initiative" },
          { id: "C", text: "Immediately discipline the employee" },
          { id: "D", text: "Transfer them to another team" },
        ],
      },
      {
        id: 8,
        moduleId: 2,
        text:
          "Two employees commit the same offense but have different histories. What is the best response?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Apply identical punishment regardless of context" },
          {
            id: "B",
            text:
              "Consider past behavior while ensuring fairness and policy compliance",
          },
          { id: "C", text: "Ignore the incident" },
          { id: "D", text: "Discipline only the employee with the worse history" },
        ],
      },
      {
        id: 9,
        moduleId: 2,
        text:
          "A supervisor avoids enforcing discipline to stay liked. How do you coach them?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Encourage them to stay friendly with the team" },
          {
            id: "B",
            text: "Emphasize that leadership requires fairness and accountability",
          },
          { id: "C", text: "Handle discipline yourself" },
          { id: "D", text: "Ignore the issue" },
        ],
      },
      {
        id: 10,
        moduleId: 2,
        text: "Team morale drops after disciplinary action. What should you do?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Avoid disciplinary actions in the future" },
          { id: "B", text: "Communicate clearly about expectations and fairness" },
          { id: "C", text: "Reverse the decision" },
          { id: "D", text: "Ignore the morale impact" },
        ],
      },
      {
        id: 11,
        moduleId: 2,
        text: "An employee claims disciplinary action was biased. What should you do?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Ignore the complaint" },
          { id: "B", text: "Review the decision objectively and explain the rationale" },
          { id: "C", text: "Reverse the action immediately" },
          { id: "D", text: "Escalate without investigation" },
        ],
      },
      {
        id: 12,
        moduleId: 2,
        text: "Minor policy breaches are increasing. What should you do?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Ignore the issue" },
          { id: "B", text: "Reinforce expectations and address the behavior early" },
          { id: "C", text: "Introduce severe penalties immediately" },
          { id: "D", text: "Remove the policy" },
        ],
      },
      {
        id: 13,
        moduleId: 2,
        text: "How do you model disciplined leadership under pressure?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Prioritize results over policy" },
          { id: "B", text: "Maintain integrity and follow standards" },
          { id: "C", text: "Delay decisions" },
          { id: "D", text: "Delegate responsibility" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Improving Self-Awareness",
    shortTitle: "Self-Awareness",
    questions: [
      {
        id: 14,
        moduleId: 3,
        text:
          "Feedback suggests your leadership discourages open communication. What should you do?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Reject the feedback" },
          { id: "B", text: "Reflect and seek ways to improve communication" },
          { id: "C", text: "Ignore the feedback" },
          { id: "D", text: "Reduce team interaction" },
        ],
      },
      {
        id: 15,
        moduleId: 3,
        text:
          "A supervisor rejects all feedback but believes they are self-aware. What should you do?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Stop giving feedback" },
          {
            id: "B",
            text: "Use reflective questions to help them evaluate their behavior",
          },
          { id: "C", text: "Escalate immediately" },
          { id: "D", text: "Ignore the issue" },
        ],
      },
      {
        id: 16,
        moduleId: 3,
        text:
          "You notice emotional triggers affecting decisions. What action should you take?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Ignore them" },
          {
            id: "B",
            text:
              "Reflect, seek feedback, and develop strategies to manage reactions",
          },
          { id: "C", text: "Avoid making decisions" },
          { id: "D", text: "Delegate decisions to others" },
        ],
      },
      {
        id: 17,
        moduleId: 3,
        text: "An employee reacts defensively to feedback. What should you do?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "End the discussion" },
          { id: "B", text: "Focus on specific behaviors and invite their perspective" },
          { id: "C", text: "Avoid future feedback" },
          { id: "D", text: "Escalate immediately" },
        ],
      },
      {
        id: 18,
        moduleId: 3,
        text: "How do you demonstrate vulnerability as a supervisor?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Avoid admitting mistakes" },
          {
            id: "B",
            text: "Share learning experiences and acknowledge areas for improvement",
          },
          { id: "C", text: "Focus only on authority" },
          { id: "D", text: "Avoid discussing development" },
        ],
      },
      {
        id: 19,
        moduleId: 3,
        text: "How do you ensure self-awareness leads to behavior change?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Reflect once and move on" },
          { id: "B", text: "Set development goals and track progress" },
          { id: "C", text: "Ignore feedback" },
          { id: "D", text: "Wait for others to change" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Time Management and Self-Management",
    shortTitle: "Time Management",
    questions: [
      {
        id: 20,
        moduleId: 4,
        text:
          "Coaching sessions keep getting postponed due to operational demands. What should you do?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Cancel coaching sessions" },
          {
            id: "B",
            text: "Prioritize and schedule coaching as a non-negotiable commitment",
          },
          { id: "C", text: "Delegate coaching to someone else" },
          { id: "D", text: "Ignore the issue" },
        ],
      },
      {
        id: 21,
        moduleId: 4,
        text:
          "A supervisor is always busy but delivers limited results. What should you do?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Accept the situation" },
          { id: "B", text: "Assess priorities and identify inefficiencies" },
          { id: "C", text: "Increase their workload" },
          { id: "D", text: "Ignore the issue" },
        ],
      },
      {
        id: 22,
        moduleId: 4,
        text: "An employee struggles with workload planning. What should you do?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Reassign their work" },
          { id: "B", text: "Coach them on prioritization and planning" },
          { id: "C", text: "Ignore the issue" },
          { id: "D", text: "Reduce their responsibilities permanently" },
        ],
      },
      {
        id: 23,
        moduleId: 4,
        text:
          "How do you protect coaching time in a high-pressure environment?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Cancel sessions during busy periods" },
          { id: "B", text: "Schedule dedicated time and treat it as a priority" },
          { id: "C", text: "Delegate coaching" },
          { id: "D", text: "Conduct coaching informally only" },
        ],
      },
      {
        id: 24,
        moduleId: 4,
        text: "How do you role-model effective time management?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Work longer hours" },
          { id: "B", text: "Demonstrate structured planning and prioritization" },
          { id: "C", text: "Avoid meetings" },
          { id: "D", text: "Delegate everything" },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Effective Communication",
    shortTitle: "Communication",
    questions: [
      {
        id: 25,
        moduleId: 5,
        text: "A poorly worded message damages morale. What should you do?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Ignore the reaction" },
          { id: "B", text: "Clarify the message and acknowledge misunderstanding" },
          { id: "C", text: "Blame the team" },
          { id: "D", text: "Avoid communicating again" },
        ],
      },
      {
        id: 26,
        moduleId: 5,
        text: "An employee repeatedly misunderstands expectations. What should you do?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Repeat instructions the same way" },
          { id: "B", text: "Clarify expectations and confirm understanding" },
          { id: "C", text: "Assign someone else" },
          { id: "D", text: "Ignore the issue" },
        ],
      },
      {
        id: 27,
        moduleId: 5,
        text: "How do you deliver corrective feedback effectively?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Deliver it publicly" },
          { id: "B", text: "Provide clear and respectful feedback privately" },
          { id: "C", text: "Avoid giving feedback" },
          { id: "D", text: "Send an email instead" },
        ],
      },
      {
        id: 28,
        moduleId: 5,
        text: "How do you adapt communication across personalities?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Use the same style for everyone" },
          { id: "B", text: "Adjust communication style based on the audience" },
          { id: "C", text: "Avoid adjusting communication" },
          { id: "D", text: "Let employees adapt" },
        ],
      },
      {
        id: 29,
        moduleId: 5,
        text: "A supervisor talks more than they listen. What should you do?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Encourage it" },
          { id: "B", text: "Coach them to practice active listening" },
          { id: "C", text: "Ignore the issue" },
          { id: "D", text: "Remove them from meetings" },
        ],
      },
      {
        id: 30,
        moduleId: 5,
        text: "How do you ensure clarity in communication?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Assume everyone understands" },
          { id: "B", text: "Confirm understanding and summarize expectations" },
          { id: "C", text: "Send instructions only by email" },
          { id: "D", text: "Avoid follow-up" },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Situational Leadership",
    shortTitle: "Situational Leadership",
    questions: [
      {
        id: 31,
        moduleId: 6,
        text:
          "A new hire needs structure while a senior employee wants autonomy. What should you do?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Use the same leadership style" },
          {
            id: "B",
            text: "Adapt leadership style based on each employee's needs",
          },
          { id: "C", text: "Focus only on the senior employee" },
          { id: "D", text: "Ignore the new hire" },
        ],
      },
      {
        id: 32,
        moduleId: 6,
        text:
          "A previously strong employee's performance suddenly drops. What should you do?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Ignore the change" },
          { id: "B", text: "Investigate the cause and adjust support" },
          { id: "C", text: "Discipline immediately" },
          { id: "D", text: "Replace the employee" },
        ],
      },
      {
        id: 33,
        moduleId: 6,
        text: "How do you assess competence versus commitment?",
        correctAnswer: "A",
        options: [
          { id: "A", text: "Evaluate performance and motivation" },
          { id: "B", text: "Assume competence" },
          { id: "C", text: "Focus only on results" },
          { id: "D", text: "Ignore motivation" },
        ],
      },
      {
        id: 34,
        moduleId: 6,
        text: "How do you lead during uncertainty or change?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Avoid communication" },
          { id: "B", text: "Provide direction, clarity, and reassurance" },
          { id: "C", text: "Delay decisions" },
          { id: "D", text: "Ignore concerns" },
        ],
      },
      {
        id: 35,
        moduleId: 6,
        text: "When should you shift from coaching to directing?",
        correctAnswer: "A",
        options: [
          { id: "A", text: "When employees lack competence or clarity" },
          { id: "B", text: "Whenever you prefer control" },
          { id: "C", text: "Always" },
          { id: "D", text: "Never" },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Delegating Tasks",
    shortTitle: "Delegation",
    questions: [
      {
        id: 36,
        moduleId: 7,
        text: "A supervisor delegates but constantly interferes. What should you do?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Continue micromanaging" },
          { id: "B", text: "Clarify expectations and allow ownership" },
          { id: "C", text: "Take the task back" },
          { id: "D", text: "Stop delegating" },
        ],
      },
      {
        id: 37,
        moduleId: 7,
        text: "A delegated task fails. What should you do?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Blame the employee" },
          { id: "B", text: "Review the situation and identify lessons learned" },
          { id: "C", text: "Avoid delegating again" },
          { id: "D", text: "Escalate immediately" },
        ],
      },
      {
        id: 38,
        moduleId: 7,
        text:
          "Team members feel overloaded due to poor delegation. What should you do?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Ignore concerns" },
          { id: "B", text: "Review workload distribution and rebalance tasks" },
          { id: "C", text: "Assign equal work regardless" },
          { id: "D", text: "Reduce expectations" },
        ],
      },
      {
        id: 39,
        moduleId: 7,
        text: "How can delegation support development?",
        correctAnswer: "B",
        options: [
          { id: "A", text: "Assign routine work only" },
          { id: "B", text: "Assign stretch tasks that build new skills" },
          { id: "C", text: "Avoid delegation" },
          { id: "D", text: "Assign only low-risk tasks" },
        ],
      },
      {
        id: 40,
        moduleId: 7,
        text: "How do you ensure clarity when delegating tasks?",
        correctAnswer: "A",
        options: [
          {
            id: "A",
            text: "Provide clear expectations, outcomes, and timelines",
          },
          { id: "B", text: "Give minimal instructions" },
          { id: "C", text: "Avoid follow-up" },
          { id: "D", text: "Delegate informally" },
        ],
      },
    ],
  },
];

export const MANAGER_QUESTIONS: Question[] = [
  {
    id: 101,
    text: "During coaching sessions, the supervisor focused on developing the staff member's skills and capabilities, not just correcting errors or addressing performance gaps",
    options: [
      { id: "A", text: "Rarely observed; mainly focused on correcting mistakes" },
      { id: "B", text: "Occasionally coached for development but often focused on errors" },
      { id: "C", text: "Frequently used coaching to guide skill development" },
      { id: "D", text: "Consistently developed the staff member through coaching conversations" },
    ],
  },
  {
    id: 102,
    text: "The supervisor demonstrated trust-building behaviors by maintaining confidentiality, showing empathy, and treating the staff member fairly during coaching sessions",
    options: [
      { id: "A", text: "Trust-building behaviors were rarely observed" },
      { id: "B", text: "Sometimes demonstrated trust-building behaviors" },
      { id: "C", text: "Usually maintained trust and confidentiality during sessions" },
      { id: "D", text: "Consistently built strong trust through empathy and fairness" },
    ],
  },
  {
    id: 103,
    text: "When addressing performance or behavioral issues, the supervisor applied discipline fairly, consistently, and in a timely manner",
    options: [
      { id: "A", text: "Avoided or delayed addressing discipline issues" },
      { id: "B", text: "Applied discipline but with inconsistent standards or timing" },
      { id: "C", text: "Applied discipline fairly in most situations" },
      { id: "D", text: "Consistently applied discipline promptly and fairly" },
    ],
  },
  {
    id: 104,
    text: "The supervisor showed self-awareness by acknowledging their own development areas and actively seeking or accepting feedback during coaching interactions",
    options: [
      { id: "A", text: "Rarely acknowledged development areas or accepted feedback" },
      { id: "B", text: "Sometimes listened to feedback but resisted making changes" },
      { id: "C", text: "Accepted feedback and reflected on development areas" },
      { id: "D", text: "Actively sought feedback and demonstrated openness to improvement" },
    ],
  },
  {
    id: 105,
    text: "The supervisor managed their time effectively by consistently prioritizing coaching sessions and giving adequate attention to both people and operational results",
    options: [
      { id: "A", text: "Frequently missed or rushed coaching sessions" },
      { id: "B", text: "Sometimes managed coaching time effectively" },
      { id: "C", text: "Generally managed time well for coaching and results" },
      { id: "D", text: "Consistently prioritized coaching and balanced people and results" },
    ],
  },
  {
    id: 106,
    text: "During coaching sessions, the supervisor communicated expectations clearly, listened actively to the staff member, and ensured mutual understanding",
    options: [
      { id: "A", text: "Expectations were often unclear; limited active listening observed" },
      { id: "B", text: "Communication was sometimes clear but inconsistent listening" },
      { id: "C", text: "Usually communicated clearly and listened to the staff member" },
      { id: "D", text: "Consistently communicated clearly and demonstrated active listening" },
    ],
  },
  {
    id: 107,
    text: "The supervisor adapted their leadership approach during coaching sessions based on the staff member's competence level and commitment to development",
    options: [
      { id: "A", text: "Used the same leadership style regardless of the situation" },
      { id: "B", text: "Occasionally adapted leadership style to the staff member's needs" },
      { id: "C", text: "Usually adapted leadership approach appropriately" },
      { id: "D", text: "Consistently practiced situational leadership during coaching" },
    ],
  },
  {
    id: 108,
    text: "When delegating tasks or responsibilities during coaching, the supervisor provided clear expectations, offered appropriate support, and followed up on accountability",
    options: [
      { id: "A", text: "Rarely delegated effectively or tended to micromanage" },
      { id: "B", text: "Delegated but with limited clarity or follow-up" },
      { id: "C", text: "Delegated clearly with reasonable support and follow-up" },
      { id: "D", text: "Consistently delegated with clarity, trust, and accountability" },
    ],
  },
  {
    id: 109,
    text: "The supervisor's coaching sessions led to measurable improvements in the staff member's performance, behaviors, or work outcomes",
    options: [
      { id: "A", text: "Coaching sessions rarely resulted in observable improvements" },
      { id: "B", text: "Some improvements were observed but not consistently" },
      { id: "C", text: "Coaching sessions often led to performance improvements" },
      { id: "D", text: "Coaching consistently drove measurable and sustained improvements" },
    ],
  },
  {
    id: 110,
    text: "The supervisor held themselves and the staff member accountable during coaching by addressing issues directly rather than avoiding difficult conversations",
    options: [
      { id: "A", text: "Frequently avoided or delayed accountability conversations" },
      { id: "B", text: "Sometimes addressed accountability but with reluctance" },
      { id: "C", text: "Generally held themselves and others accountable" },
      { id: "D", text: "Consistently enforced accountability through direct conversations" },
    ],
  },
  {
    id: 111,
    text: "Based on the completed coaching sessions, rate the supervisor's overall effectiveness in coaching and developing this staff member",
    options: [
      { id: "A", text: "Emerging (developing foundational coaching skills)" },
      { id: "B", text: "Developing (building competence with some gaps)" },
      { id: "C", text: "Proficient (demonstrates consistent coaching effectiveness)" },
      { id: "D", text: "Advanced (exemplifies excellence in coaching and development)" },
    ],
  },
];

export const PASS_MARK = 90;
export const WEIGHTS = {
  knowledge: 0.4,
  behavioral: 0.5,
  attendance: 0.1,
};
