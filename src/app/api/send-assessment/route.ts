import { NextRequest, NextResponse } from "next/server";
import Mailgun from "mailgun.js";
import FormData from "form-data";
import type { AssessmentSubmission } from "@/lib/assessment-types";

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY!,
});

function buildParticipantEmail(submission: AssessmentSubmission): string {
  const { participantName, role, scores, organizationName, submittedAt, staffMemberName } =
    submission;

  const passBadge = scores.passed
    ? '<span style="background:#10b981;color:white;padding:4px 12px;border-radius:20px;font-size:13px;font-weight:bold;">PASSED</span>'
    : '<span style="background:#ef4444;color:white;padding:4px 12px;border-radius:20px;font-size:13px;font-weight:bold;">EXTENDED COACHING REQUIRED</span>';

  const moduleRows =
    role === "staff" && scores.moduleBreakdown.length > 0
      ? scores.moduleBreakdown
          .map(
            (mod) => `
        <tr>
          <td style="padding:8px 12px;border-bottom:1px solid #f1f5f9;font-size:13px;color:#475569;">${mod.title}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #f1f5f9;font-size:13px;text-align:center;">${mod.correct}/${mod.total}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #f1f5f9;font-size:13px;text-align:center;font-weight:bold;color:${
            mod.percentage >= 90
              ? "#10b981"
              : mod.percentage >= 70
              ? "#f59e0b"
              : "#ef4444"
          };">${mod.percentage}%</td>
        </tr>`
          )
          .join("")
      : "";

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:600px;margin:40px auto;background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

    <div style="background:linear-gradient(135deg,#1e40af,#0369a1);padding:40px 32px;text-align:center;">
      <h1 style="color:white;margin:0;font-size:24px;font-weight:700;">Coaching Assessment Results</h1>
      <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;font-size:14px;">
        ${new Date(submittedAt).toLocaleDateString("en-GB", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>

    <div style="padding:32px;">
      <p style="color:#374151;font-size:15px;margin:0 0 24px;">
        Dear <strong>${participantName}</strong>,<br><br>
        Thank you for completing the Coaching Assessment${organizationName ? ` for <strong>${organizationName}</strong>` : ""}${role === "manager" && staffMemberName ? ` for staff member <strong>${staffMemberName}</strong>` : ""}. 
        Here is a summary of your results.
      </p>

      <div style="text-align:center;margin-bottom:28px;">
        ${passBadge}
      </div>

      <div style="background:#f8fafc;border-radius:12px;padding:20px;margin-bottom:24px;">
        <h2 style="margin:0 0 16px;font-size:16px;color:#1e293b;">Score Summary</h2>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
          <span style="color:#64748b;font-size:14px;">Final Weighted Score</span>
          <span style="font-size:28px;font-weight:900;color:${
            scores.passed ? "#10b981" : "#ef4444"
          }">${scores.weightedTotal}%</span>
        </div>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:12px 0;">
        ${
          role === "staff"
            ? `
        <div style="display:flex;justify-content:space-between;font-size:13px;color:#64748b;margin-bottom:6px;">
          <span>Knowledge Assessment (40%)</span><span style="font-weight:600;color:#1e293b;">${scores.knowledgeScore}%</span>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:13px;color:#64748b;">
          <span>Attendance Evaluation (10%)</span><span style="font-weight:600;color:#1e293b;">${scores.attendanceScore}%</span>
        </div>`
            : `
        <div style="display:flex;justify-content:space-between;font-size:13px;color:#64748b;margin-bottom:6px;">
          <span>Behavioural Assessment (50%)</span><span style="font-weight:600;color:#1e293b;">${scores.behavioralScore}%</span>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:13px;color:#64748b;">
          <span>Attendance Evaluation (10%)</span><span style="font-weight:600;color:#1e293b;">${scores.attendanceScore}%</span>
        </div>`
        }
      </div>

      ${
        moduleRows
          ? `
      <div style="margin-bottom:24px;">
        <h2 style="margin:0 0 12px;font-size:15px;color:#1e293b;">Module Breakdown</h2>
        <table style="width:100%;border-collapse:collapse;border-radius:8px;overflow:hidden;border:1px solid #e2e8f0;">
          <thead>
            <tr style="background:#f1f5f9;">
              <th style="padding:10px 12px;text-align:left;font-size:12px;color:#64748b;font-weight:600;">MODULE</th>
              <th style="padding:10px 12px;text-align:center;font-size:12px;color:#64748b;font-weight:600;">SCORE</th>
              <th style="padding:10px 12px;text-align:center;font-size:12px;color:#64748b;font-weight:600;">%</th>
            </tr>
          </thead>
          <tbody>${moduleRows}</tbody>
        </table>
      </div>`
          : ""
      }

      ${
        !scores.passed
          ? `
      <div style="background:#fef3c7;border:1px solid #fcd34d;border-radius:10px;padding:16px;margin-bottom:24px;">
        <p style="margin:0;font-size:14px;color:#92400e;">
          <strong>Next Steps:</strong> Your score is below the 90% pass mark. 
          You will be contacted to schedule an extended coaching session.
        </p>
      </div>`
          : `
      <div style="background:#ecfdf5;border:1px solid #6ee7b7;border-radius:10px;padding:16px;margin-bottom:24px;">
        <p style="margin:0;font-size:14px;color:#065f46;">
          <strong>Well done!</strong> You have successfully passed the Coaching Assessment. 
          Your achievement has been recorded.
        </p>
      </div>`
      }

      <p style="color:#94a3b8;font-size:12px;text-align:center;margin:0;">
        This is an automated message from the Coaching Assessment Platform.<br>
        Please do not reply to this email.
      </p>
    </div>
  </div>
</body>
</html>`;
}

function buildAdminEmail(submission: AssessmentSubmission): string {
  const {
    participantName,
    participantEmail,
    role,
    organizationName,
    scores,
    submittedAt,
    answers,
    staffMemberName,
  } = submission;

  const answerRows = answers
    .map(
      (a, i) =>
        `<tr style="background:${i % 2 === 0 ? "#f8fafc" : "white"};">
          <td style="padding:6px 10px;font-size:12px;color:#64748b;">${a.questionId}</td>
          <td style="padding:6px 10px;font-size:12px;font-weight:bold;color:#1e293b;">${a.selected}</td>
        </tr>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:680px;margin:40px auto;background:white;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);">

    <div style="background:#1e293b;padding:28px 32px;">
      <h1 style="color:white;margin:0;font-size:20px;">New Assessment Submission</h1>
      <p style="color:rgba(255,255,255,0.6);margin:6px 0 0;font-size:13px;">
        Submitted: ${new Date(submittedAt).toLocaleString("en-GB")}
      </p>
    </div>

    <div style="padding:28px 32px;">
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
        <tr><td style="padding:8px 0;font-size:13px;color:#64748b;width:160px;">Name</td><td style="padding:8px 0;font-size:13px;font-weight:600;color:#1e293b;">${participantName}</td></tr>
        <tr><td style="padding:8px 0;font-size:13px;color:#64748b;">Email</td><td style="padding:8px 0;font-size:13px;color:#1e293b;">${participantEmail}</td></tr>
        <tr><td style="padding:8px 0;font-size:13px;color:#64748b;">Organisation</td><td style="padding:8px 0;font-size:13px;color:#1e293b;">${organizationName || "--"}</td></tr>
        <tr><td style="padding:8px 0;font-size:13px;color:#64748b;">Role</td><td style="padding:8px 0;font-size:13px;color:#1e293b;text-transform:capitalize;">${role}</td></tr>
        ${role === "manager" && staffMemberName ? `<tr><td style="padding:8px 0;font-size:13px;color:#64748b;">Staff Member</td><td style="padding:8px 0;font-size:13px;color:#1e293b;">${staffMemberName}</td></tr>` : ""}
        <tr><td style="padding:8px 0;font-size:13px;color:#64748b;">Result</td>
          <td style="padding:8px 0;">
            <span style="background:${scores.passed ? "#10b981" : "#ef4444"};color:white;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:bold;">
              ${scores.passed ? "PASSED" : "FAILED"} -- ${scores.weightedTotal}%
            </span>
          </td>
        </tr>
      </table>

      <hr style="border:none;border-top:1px solid #e2e8f0;margin:0 0 24px;">

      <h3 style="margin:0 0 12px;font-size:14px;color:#1e293b;">Score Breakdown</h3>
      <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:24px;">
        <tr style="background:#f1f5f9;">
          <th style="padding:8px 10px;text-align:left;color:#64748b;font-weight:600;">Component</th>
          <th style="padding:8px 10px;text-align:center;color:#64748b;font-weight:600;">Score</th>
          <th style="padding:8px 10px;text-align:center;color:#64748b;font-weight:600;">Weight</th>
        </tr>
        ${
          role === "staff"
            ? `<tr><td style="padding:8px 10px;color:#475569;">Knowledge Assessment</td><td style="padding:8px 10px;text-align:center;font-weight:600;">${scores.knowledgeScore}%</td><td style="padding:8px 10px;text-align:center;color:#64748b;">40%</td></tr>`
            : `<tr><td style="padding:8px 10px;color:#475569;">Behavioural Assessment</td><td style="padding:8px 10px;text-align:center;font-weight:600;">${scores.behavioralScore}%</td><td style="padding:8px 10px;text-align:center;color:#64748b;">50%</td></tr>`
        }
        <tr style="background:#f8fafc;"><td style="padding:8px 10px;color:#475569;">Attendance Evaluation</td><td style="padding:8px 10px;text-align:center;font-weight:600;">${scores.attendanceScore}%</td><td style="padding:8px 10px;text-align:center;color:#64748b;">10%</td></tr>
        <tr style="background:#1e293b;"><td style="padding:10px;font-weight:700;color:white;">Final Score</td><td style="padding:10px;text-align:center;font-weight:900;color:${
          scores.passed ? "#34d399" : "#f87171"
        };">${scores.weightedTotal}%</td><td style="padding:10px;text-align:center;color:#94a3b8;">100%</td></tr>
      </table>

      <h3 style="margin:0 0 12px;font-size:14px;color:#1e293b;">All Answers</h3>
      <table style="width:100%;border-collapse:collapse;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
        <thead>
          <tr style="background:#f1f5f9;">
            <th style="padding:8px 10px;text-align:left;font-size:12px;color:#64748b;">Question ID</th>
            <th style="padding:8px 10px;text-align:left;font-size:12px;color:#64748b;">Answer</th>
          </tr>
        </thead>
        <tbody>${answerRows}</tbody>
      </table>
    </div>
  </div>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const submission: AssessmentSubmission = await req.json();

    const domain = process.env.MAILGUN_DOMAIN;
    const fromEmail = process.env.FROM_EMAIL;
    const adminEmail = process.env.ADMIN_EMAIL;
    const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "Coaching Assessment";

    if (!domain || !fromEmail || !adminEmail) {
      console.error("Missing required env vars: MAILGUN_DOMAIN, FROM_EMAIL, ADMIN_EMAIL");
      return NextResponse.json({ success: false, error: "Server misconfiguration" }, { status: 500 });
    }

    const resultLabel = submission.scores.passed
      ? "PASSED"
      : "Extended Coaching Required";

    await mg.messages.create(domain, {
      from: `${appName} <${fromEmail}>`,
      to: [submission.participantEmail],
      subject: `Your Coaching Assessment Results -- ${resultLabel}`,
      html: buildParticipantEmail(submission),
    });

    await mg.messages.create(domain, {
      from: `${appName} <${fromEmail}>`,
      to: [adminEmail],
      subject: `[New Submission] ${submission.participantName} -- ${submission.scores.weightedTotal}% -- ${
        submission.scores.passed ? "PASSED" : "FAILED"
      }`,
      html: buildAdminEmail(submission),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mailgun error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
