import { NextRequest, NextResponse } from "next/server";
import Mailgun from "mailgun.js";
import FormData from "form-data";
import type { AssessmentSubmission } from "@/lib/assessment-types";

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY!,
});

// Email content by language
const emailContent = {
  en: {
    participant: {
      subject: "Thank you for completing the Coaching Completion Assessment",
      title: "Thank You for Completing the Assessment",
      greeting: (name: string, organizationName?: string, role?: string, staffMemberName?: string) => 
        `Dear <strong>${name}</strong>,<br><br>
        Thank you for completing the Coaching Completion Assessment${organizationName ? ` for <strong>${organizationName}</strong>` : ""}${role === "manager" && staffMemberName ? ` for staff member <strong>${staffMemberName}</strong>` : ""}. 
        Your responses have been successfully submitted.`,
      completeBadge: {
        title: "Assessment Complete!",
        subtitle: "Your results will be reviewed and shared with you shortly."
      },
      nextSteps: {
        title: "What Happens Next?",
        steps: [
          "Your assessment responses are being reviewed",
          "Results and feedback will be shared with you soon", 
          "Any follow-up actions will be communicated directly"
        ]
      },
      footer: "This is an automated confirmation from the Coaching Completion Assessment Platform.<br>Please do not reply to this email."
    }
  },
  es: {
    participant: {
      subject: "Gracias por completar la Evaluación de Finalización de Coaching",
      title: "Gracias por Completar la Evaluación",
      greeting: (name: string, organizationName?: string, role?: string, staffMemberName?: string) =>
        `Estimado/a <strong>${name}</strong>,<br><br>
        Gracias por completar la Evaluación de Finalización de Coaching${organizationName ? ` para <strong>${organizationName}</strong>` : ""}${role === "manager" && staffMemberName ? ` para el miembro del personal <strong>${staffMemberName}</strong>` : ""}. 
        Sus respuestas han sido enviadas exitosamente.`,
      completeBadge: {
        title: "¡Evaluación Completa!",
        subtitle: "Sus resultados serán revisados y compartidos con usted en breve."
      },
      nextSteps: {
        title: "¿Qué Sigue?",
        steps: [
          "Sus respuestas de evaluación están siendo revisadas",
          "Los resultados y comentarios serán compartidos con usted pronto",
          "Cualquier acción de seguimiento se comunicará directamente"
        ]
      },
      footer: "Esta es una confirmación automática de la Plataforma de Evaluación de Finalización de Coaching.<br>Por favor no responda a este correo electrónico."
    }
  }
};

function buildParticipantEmail(submission: AssessmentSubmission): string {
  const { participantName, role, organizationName, submittedAt, staffMemberName, language } =
    submission;
  
  const content = emailContent[language].participant;
  const locale = language === 'es' ? 'es-ES' : 'en-GB';

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:600px;margin:40px auto;background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

    <div style="background:linear-gradient(135deg,#1e40af,#0369a1);padding:40px 32px;text-align:center;">
      <h1 style="color:white;margin:0;font-size:24px;font-weight:700;">${content.title}</h1>
      <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;font-size:14px;">
        ${new Date(submittedAt).toLocaleDateString(locale, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>

    <div style="padding:32px;">
      <p style="color:#374151;font-size:15px;margin:0 0 24px;">
        ${content.greeting(participantName, organizationName, role ?? undefined, staffMemberName)}
      </p>

      <div style="background:#ecfdf5;border:1px solid #6ee7b7;border-radius:10px;padding:16px;margin-bottom:24px;">
        <p style="margin:0;font-size:14px;color:#065f46;text-align:center;">
          <strong>${content.completeBadge.title}</strong><br>
          ${content.completeBadge.subtitle}
        </p>
      </div>

      <div style="background:#f8fafc;border-radius:12px;padding:20px;margin-bottom:24px;">
        <h2 style="margin:0 0 16px;font-size:16px;color:#1e293b;text-align:center;">${content.nextSteps.title}</h2>
        <ul style="margin:0;padding-left:20px;color:#475569;font-size:14px;line-height:1.6;">
          ${content.nextSteps.steps.map(step => `<li>${step}</li>`).join('')}
        </ul>
      </div>

      <p style="color:#94a3b8;font-size:12px;text-align:center;margin:0;">
        ${content.footer}
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
    const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "Coaching Completion Assessment";

    if (!domain || !fromEmail || !adminEmail) {
      console.error("Missing required env vars: MAILGUN_DOMAIN, FROM_EMAIL, ADMIN_EMAIL");
      return NextResponse.json({ success: false, error: "Server misconfiguration" }, { status: 500 });
    }

    await mg.messages.create(domain, {
      from: `${appName} <${fromEmail}>`,
      to: [submission.participantEmail],
      subject: emailContent[submission.language || 'en'].participant.subject,
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

    // Send data to n8n webhook for Google Sheets integration
    try {
      const webhookUrl = "https://n8n-three.southafricanorth.azurecontainer.io/webhook/coaching-assessment";
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      });
      
      if (!webhookResponse.ok) {
        console.warn(`Webhook failed: ${webhookResponse.status} ${webhookResponse.statusText}`);
      } else {
        console.log("Data successfully sent to Google Sheets via n8n webhook");
      }
    } catch (webhookError) {
      console.error("Webhook error:", webhookError);
      // Don't fail the entire request if webhook fails
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mailgun error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
