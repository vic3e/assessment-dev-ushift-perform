// Spanish translations
import type { TranslationKeys } from "./en";

export const es: TranslationKeys = {
  // Role Selection
  roleSelection: {
    title: "Evaluación de Finalización de Coaching",
    passMarkDescription: "La nota de aprobación es {passmark} basada en asistencia, evaluación de conocimiento/comportamiento y desempeño general.",
    passmark: "90%",
    yourDetails: "Sus Datos",
    fullName: "Nombre Completo",
    email: "Correo Electrónico",
    organizationName: "Nombre de la Organización",
    organizationOptional: "(Opcional)",
    staffMemberName: "Nombre del Miembro del Personal",
    staffMemberNote: "Ingrese el nombre del miembro del personal que está evaluando",
    selectRole: "Seleccione Su Rol",
    startAssessment: "Iniciar Evaluación",
    errors: {
      nameRequired: "El nombre es requerido",
      emailRequired: "El correo electrónico es requerido",
      emailInvalid: "Correo electrónico inválido",
      roleRequired: "Por favor seleccione un rol",
      staffMemberRequired: "El nombre del miembro del personal es requerido para la evaluación de comportamiento",
    },
    roles: {
      staff: {
        label: "Miembro del Personal",
        description: "Participé en una sesión de coaching y necesito completar la Evaluación de Conocimiento.",
        weight: "Parte A -- Evaluación de Conocimiento (40%)",
      },
      manager: {
        label: "Gerente / Supervisor",
        description: "Gestiono personal que participó y necesito completar la Evaluación de Comportamiento.",
        weight: "Parte B -- Evaluación de Comportamiento (50%)",
      },
    },
  },

  // Assessment Shell
  assessment: {
    module: "Módulo",
    of: "de",
    question: "Pregunta",
  },

  // Module Slide
  moduleSlide: {
    selectAnswer: "Seleccione una respuesta para continuar",
    previous: "Anterior",
    next: "Siguiente",
    submit: "Enviar Evaluación",
    back: "Atrás",
    nextModule: "Siguiente Módulo",
    reviewSubmit: "Revisar y Enviar",
    moduleOf: "Módulo {current} de {total}",
    answered: "{answered}/{total} respondidas",
    pleaseAnswerCurrent: "Por favor responda esta pregunta antes de continuar.",
    pleaseAnswerAll: "Por favor responda todas las {total} preguntas antes de continuar. {remaining} restantes.",
    questionProgress: "{current} / {total}",
  },

  // Results Screen
  results: {
    complete: "¡Evaluación Completa!",
    thankYou: "Gracias, {name}. Sus respuestas han sido enviadas exitosamente.",
    whatNext: "¿Qué sigue?",
    step1: "Sus respuestas de evaluación están siendo revisadas",
    step2: "Los resultados y comentarios serán compartidos con usted en breve",
    step3: "Cualquier acción de seguimiento se comunicará directamente",
    yourScore: "Su Puntuación",
    totalScore: "Puntuación Total",
    passed: "Aprobado",
    failed: "No Aprobado",
    passRequirement: "Requisito de aprobación: {percentage}% o más",
    retakeNote: "Puede volver a tomar la evaluación para mejorar su puntuación.",
    emailSending: "Enviando confirmación a {email}...",
    emailSent: "Confirmación enviada a {email}",
    emailPending: "Entrega de correo pendiente...",
    restartAssessment: "Iniciar Nueva Evaluación",
    participant: "Participante",
    organization: "Organización",
    role: "Rol",
    dateCompleted: "Fecha de Finalización",
    rating: "Calificación",
    ratings: {
      advanced: "Avanzado",
      proficient: "Competente",
      developing: "En Desarrollo",
      emerging: "Emergente",
    },
    roleNames: {
      staff: "Miembro del Personal",
      manager: "Gerente/Supervisor",
    },
  },

  // Common
  common: {
    loading: "Cargando...",
    cancel: "Cancelar",
    confirm: "Confirmar",
    close: "Cerrar",
  },
};
