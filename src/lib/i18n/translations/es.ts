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

  // Assessment Questions and Modules
  questions: {
    // Module titles and descriptions
    modules: {
      1: {
        title: "Introducción al Coaching y Construcción de Confianza",
        shortTitle: "Coaching y Confianza",
      },
      2: {
        title: "Liderazgo Disciplinado y Mantenimiento de la Disciplina",
        shortTitle: "Disciplina",
      },
      3: {
        title: "Mejorando la Autoconciencia",
        shortTitle: "Autoconciencia",
      },
      4: {
        title: "Gestión del Tiempo y Autogestión",
        shortTitle: "Gestión del Tiempo",
      },
      5: {
        title: "Comunicación Efectiva",
        shortTitle: "Comunicación",
      },
      6: {
        title: "Liderazgo Situacional",
        shortTitle: "Liderazgo Situacional",
      },
      7: {
        title: "Delegando Tareas",
        shortTitle: "Delegación",
      },
    },

    // Staff questions by module
    staff: {
      1: {
        1: {
          text: "Un miembro del equipo evita las sesiones uno a uno después de una discusión de retroalimentación difícil. ¿Cómo restableces la seguridad psicológica y la confianza?",
          options: {
            A: "Ignorar la situación y permitirles tiempo para recuperarse",
            B: "Programar otra reunión, reconocer la conversación anterior e invitar al diálogo abierto",
            C: "Escalar el problema a RR.HH. inmediatamente",
            D: "Reducir las sesiones de coaching con el empleado",
          },
        },
        2: {
          text: "Un empleado dice: \"El coaching se siente como buscar fallas\". ¿Cómo respondes?",
          options: {
            A: "Enfatizar sus brechas de desempeño",
            B: "Reformular el coaching como una conversación de desarrollo centrada en el crecimiento y las fortalezas",
            C: "Terminar la sesión y revisarla más tarde",
            D: "Decirles que el coaching es obligatorio",
          },
        },
        3: {
          text: "Debes entrenar a un alto rendimiento que desconfía del liderazgo debido a experiencias pasadas. ¿Qué enfoque tomas?",
          options: {
            A: "Enfocarse solo en el rendimiento de tareas",
            B: "Construir confianza gradualmente a través de comunicación consistente y transparente",
            C: "Evitar conversaciones de coaching",
            D: "Asignar otro gerente para entrenarlos",
          },
        },
        4: {
          text: "Un supervisor comparte información confidencial de coaching con otros. ¿Qué debes hacer?",
          options: {
            A: "Ignorar el problema para evitar conflictos",
            B: "Abordar la violación privadamente y reforzar las expectativas de confidencialidad",
            C: "Reprender públicamente al supervisor",
            D: "Cancelar las sesiones de coaching",
          },
        },
        5: {
          text: "Durante el coaching, un empleado se cierra emocionalmente. ¿Cuál es la mejor respuesta?",
          options: {
            A: "Continuar la conversación sin importar qué",
            B: "Pausar, reconocer las emociones y crear espacio para la reflexión",
            C: "Terminar la sesión inmediatamente",
            D: "Moverse directamente a los objetivos de desempeño",
          },
        },
        6: {
          text: "¿Cómo equilibras la accesibilidad con la autoridad como supervisor?",
          options: {
            A: "Enfocarse solo en mantener la autoridad",
            B: "Evitar conversaciones difíciles",
            C: "Mantener límites profesionales mientras permaneces solidario y accesible",
            D: "Delegar conversaciones difíciles a RR.HH.",
          },
        },
      },
      2: {
        7: {
          text: "Un miembro del equipo dobla las reglas \"para obtener resultados\". ¿Qué debes hacer?",
          options: {
            A: "Ignorar el comportamiento si los resultados son buenos",
            B: "Reforzar los estándares mientras reconoces la iniciativa",
            C: "Disciplinar inmediatamente al empleado",
            D: "Transferirlos a otro equipo",
          },
        },
        8: {
          text: "Dos empleados cometen la misma ofensa pero tienen historiales diferentes. ¿Cuál es la mejor respuesta?",
          options: {
            A: "Aplicar castigo idéntico sin importar el contexto",
            B: "Considerar el comportamiento pasado mientras aseguras equidad y cumplimiento de políticas",
            C: "Ignorar el incidente",
            D: "Disciplinar solo al empleado con peor historial",
          },
        },
        9: {
          text: "Un supervisor evita hacer cumplir la disciplina para mantenerse querido. ¿Cómo lo entrenas?",
          options: {
            A: "Animarlos a mantenerse amigables con el equipo",
            B: "Enfatizar que el liderazgo requiere justicia y responsabilidad",
            C: "Manejar la disciplina tú mismo",
            D: "Ignorar el problema",
          },
        },
        10: {
          text: "La moral del equipo baja después de una acción disciplinaria. ¿Qué debes hacer?",
          options: {
            A: "Evitar acciones disciplinarias en el futuro",
            B: "Comunicar claramente sobre expectativas y justicia",
            C: "Revertir la decisión",
            D: "Ignorar el impacto en la moral",
          },
        },
        11: {
          text: "Un empleado reclama que la acción disciplinaria fue sesgada. ¿Qué debes hacer?",
          options: {
            A: "Ignorar la queja",
            B: "Revisar la decisión objetivamente y explicar la justificación",
            C: "Revertir la acción inmediatamente",
            D: "Escalar sin investigación",
          },
        },
        12: {
          text: "Las violaciones menores de políticas están aumentando. ¿Qué debes hacer?",
          options: {
            A: "Ignorar el problema",
            B: "Reforzar las expectativas y abordar el comportamiento temprano",
            C: "Introducir penalidades severas inmediatamente",
            D: "Eliminar la política",
          },
        },
        13: {
          text: "¿Cómo modelas liderazgo disciplinado bajo presión?",
          options: {
            A: "Priorizar resultados sobre política",
            B: "Mantener integridad y seguir estándares",
            C: "Retrasar decisiones",
            D: "Delegar responsabilidad",
          },
        },
      },
      3: {
        14: {
          text: "La retroalimentación sugiere que tu liderazgo desalienta la comunicación abierta. ¿Qué debes hacer?",
          options: {
            A: "Rechazar la retroalimentación",
            B: "Reflexionar y buscar maneras de mejorar la comunicación",
            C: "Ignorar la retroalimentación",
            D: "Reducir la interacción del equipo",
          },
        },
        15: {
          text: "Un supervisor rechaza toda retroalimentación pero cree que tiene autoconciencia. ¿Qué debes hacer?",
          options: {
            A: "Dejar de dar retroalimentación",
            B: "Usar preguntas reflexivas para ayudarles a evaluar su comportamiento",
            C: "Escalar inmediatamente",
            D: "Ignorar el problema",
          },
        },
        16: {
          text: "Notas que los desencadenantes emocionales afectan las decisiones. ¿Qué acción debes tomar?",
          options: {
            A: "Ignorarlos",
            B: "Reflexionar, buscar retroalimentación y desarrollar estrategias para manejar las reacciones",
            C: "Evitar tomar decisiones",
            D: "Delegar decisiones a otros",
          },
        },
        17: {
          text: "Un empleado reacciona defensivamente a la retroalimentación. ¿Qué debes hacer?",
          options: {
            A: "Terminar la discusión",
            B: "Enfocarse en comportamientos específicos e invitar su perspectiva",
            C: "Evitar retroalimentación futura",
            D: "Escalar inmediatamente",
          },
        },
        18: {
          text: "¿Cómo demuestras vulnerabilidad como supervisor?",
          options: {
            A: "Evitar admitir errores",
            B: "Compartir experiencias de aprendizaje y reconocer áreas de mejora",
            C: "Enfocarse solo en la autoridad",
            D: "Evitar discutir el desarrollo",
          },
        },
        19: {
          text: "¿Cómo aseguras que la autoconciencia lleve al cambio de comportamiento?",
          options: {
            A: "Reflexionar una vez y seguir adelante",
            B: "Establecer metas de desarrollo y hacer seguimiento del progreso",
            C: "Ignorar la retroalimentación",
            D: "Esperar que otros cambien",
          },
        },
      },
      4: {
        20: {
          text: "Las sesiones de coaching se siguen posponiendo debido a demandas operacionales. ¿Qué debes hacer?",
          options: {
            A: "Cancelar las sesiones de coaching",
            B: "Priorizar y programar el coaching como un compromiso no negociable",
            C: "Delegar el coaching a alguien más",
            D: "Ignorar el problema",
          },
        },
        21: {
          text: "Un supervisor siempre está ocupado pero entrega resultados limitados. ¿Qué debes hacer?",
          options: {
            A: "Aceptar la situación",
            B: "Evaluar prioridades e identificar ineficiencias",
            C: "Aumentar su carga de trabajo",
            D: "Ignorar el problema",
          },
        },
        22: {
          text: "Un empleado tiene dificultades con la planificación de la carga de trabajo. ¿Qué debes hacer?",
          options: {
            A: "Reasignar su trabajo",
            B: "Entrenarlos en priorización y planificación",
            C: "Ignorar el problema",
            D: "Reducir sus responsabilidades permanentemente",
          },
        },
        23: {
          text: "¿Cómo proteges el tiempo de coaching en un ambiente de alta presión?",
          options: {
            A: "Cancelar sesiones durante períodos ocupados",
            B: "Programar tiempo dedicado y tratarlo como una prioridad",
            C: "Delegar el coaching",
            D: "Realizar coaching solo informalmente",
          },
        },
        24: {
          text: "¿Cómo modelas gestión efectiva del tiempo?",
          options: {
            A: "Trabajar más horas",
            B: "Demostrar planificación estructurada y priorización",
            C: "Evitar reuniones",
            D: "Delegar todo",
          },
        },
      },
      5: {
        25: {
          text: "Un mensaje mal redactado daña la moral. ¿Qué debes hacer?",
          options: {
            A: "Ignorar la reacción",
            B: "Aclarar el mensaje y reconocer el malentendido",
            C: "Culpar al equipo",
            D: "Evitar comunicarse nuevamente",
          },
        },
        26: {
          text: "Un empleado malentiende repetidamente las expectativas. ¿Qué debes hacer?",
          options: {
            A: "Repetir las instrucciones de la misma manera",
            B: "Aclarar expectativas y confirmar comprensión",
            C: "Asignar a alguien más",
            D: "Ignorar el problema",
          },
        },
        27: {
          text: "¿Cómo entregas retroalimentación correctiva efectivamente?",
          options: {
            A: "Entregarla públicamente",
            B: "Proporcionar retroalimentación clara y respetuosa privadamente",
            C: "Evitar dar retroalimentación",
            D: "Enviar un email en su lugar",
          },
        },
        28: {
          text: "¿Cómo adaptas la comunicación a través de las personalidades?",
          options: {
            A: "Usar el mismo estilo para todos",
            B: "Ajustar el estilo de comunicación basado en la audiencia",
            C: "Evitar ajustar la comunicación",
            D: "Permitir que los empleados se adapten",
          },
        },
        29: {
          text: "Un supervisor habla más de lo que escucha. ¿Qué debes hacer?",
          options: {
            A: "Animarlo",
            B: "Entrenarlo para practicar escucha activa",
            C: "Ignorar el problema",
            D: "Eliminarlo de las reuniones",
          },
        },
        30: {
          text: "¿Cómo aseguras claridad en la comunicación?",
          options: {
            A: "Asumir que todos entienden",
            B: "Confirmar comprensión y resumir expectativas",
            C: "Enviar instrucciones solo por email",
            D: "Evitar seguimiento",
          },
        },
      },
      6: {
        31: {
          text: "Un nuevo empleado necesita estructura mientras que un empleado senior quiere autonomía. ¿Qué debes hacer?",
          options: {
            A: "Usar el mismo estilo de liderazgo",
            B: "Adaptar el estilo de liderazgo basado en las necesidades de cada empleado",
            C: "Enfocarse solo en el empleado senior",
            D: "Ignorar al nuevo empleado",
          },
        },
        32: {
          text: "El rendimiento de un empleado previamente fuerte cae repentinamente. ¿Qué debes hacer?",
          options: {
            A: "Ignorar el cambio",
            B: "Investigar la causa y ajustar el apoyo",
            C: "Disciplinar inmediatamente",
            D: "Reemplazar al empleado",
          },
        },
        33: {
          text: "¿Cómo evalúas competencia versus compromiso?",
          options: {
            A: "Evaluar rendimiento y motivación",
            B: "Asumir competencia",
            C: "Enfocarse solo en resultados",
            D: "Ignorar la motivación",
          },
        },
        34: {
          text: "¿Cómo lideras durante incertidumbre o cambio?",
          options: {
            A: "Evitar comunicación",
            B: "Proporcionar dirección, claridad y tranquilidad",
            C: "Retrasar decisiones",
            D: "Ignorar preocupaciones",
          },
        },
        35: {
          text: "¿Cuándo debes cambiar de coaching a dirigir?",
          options: {
            A: "Cuando los empleados carecen de competencia o claridad",
            B: "Siempre que prefieras control",
            C: "Siempre",
            D: "Nunca",
          },
        },
      },
      7: {
        36: {
          text: "Un supervisor delega pero interfiere constantemente. ¿Qué debes hacer?",
          options: {
            A: "Continuar micromanejando",
            B: "Aclarar expectativas y permitir propiedad",
            C: "Retomar la tarea",
            D: "Dejar de delegar",
          },
        },
        37: {
          text: "Una tarea delegada falla. ¿Qué debes hacer?",
          options: {
            A: "Culpar al empleado",
            B: "Revisar la situación e identificar lecciones aprendidas",
            C: "Evitar delegar nuevamente",
            D: "Escalar inmediatamente",
          },
        },
        38: {
          text: "Los miembros del equipo se sienten sobrecargados debido a mala delegación. ¿Qué debes hacer?",
          options: {
            A: "Ignorar preocupaciones",
            B: "Revisar la distribución de carga de trabajo y rebalancear tareas",
            C: "Asignar trabajo igual sin importar",
            D: "Reducir expectativas",
          },
        },
        39: {
          text: "¿Cómo puede la delegación apoyar el desarrollo?",
          options: {
            A: "Asignar solo trabajo rutinario",
            B: "Asignar tareas desafiantes que construyan nuevas habilidades",
            C: "Evitar delegación",
            D: "Delegar solo a los de alto rendimiento",
          },
        },
        40: {
          text: "¿Cómo responsabilizas a los empleados después de la delegación?",
          options: {
            A: "Revisar su trabajo constantemente",
            B: "Establecer expectativas claras y hacer seguimiento apropiadamente",
            C: "Permitirles trabajar independientemente sin seguimiento",
            D: "Evitar conversaciones de responsabilidad",
          },
        },
      },
    },

    // Manager/Behavioral Assessment Questions
    manager: {
      101: {
        text: "Durante las sesiones de coaching, el supervisor se enfocó en desarrollar las habilidades y capacidades del miembro del personal, no solo en corregir errores o abordar brechas de desempeño",
        options: {
          A: "Raramente observado; principalmente enfocado en corregir errores",
          B: "Ocasionalmente entrenó para desarrollo pero a menudo se enfocó en errores",
          C: "Frecuentemente usó el coaching para guiar el desarrollo de habilidades",
          D: "Consistentemente desarrolló al miembro del personal a través de conversaciones de coaching",
        },
      },
      102: {
        text: "El supervisor demostró comportamientos de construcción de confianza manteniendo confidencialidad, mostrando empatía y tratando al miembro del personal justamente durante las sesiones de coaching",
        options: {
          A: "Los comportamientos de construcción de confianza fueron raramente observados",
          B: "A veces demostró comportamientos de construcción de confianza",
          C: "Generalmente mantuvo confianza y confidencialidad durante las sesiones",
          D: "Consistentemente construyó fuerte confianza a través de empatía y justicia",
        },
      },
      103: {
        text: "Al abordar problemas de desempeño o comportamiento, el supervisor aplicó disciplina justamente, consistentemente y de manera oportuna",
        options: {
          A: "Evitó o retrasó abordar problemas de disciplina",
          B: "Aplicó disciplina pero con estándares o tiempos inconsistentes",
          C: "Aplicó disciplina justamente en la mayoría de las situaciones",
          D: "Consistentemente aplicó disciplina pronta y justamente",
        },
      },
      104: {
        text: "El supervisor mostró autoconciencia reconociendo sus propias áreas de desarrollo y buscando activamente o aceptando retroalimentación durante las interacciones de coaching",
        options: {
          A: "Raramente reconoció áreas de desarrollo o aceptó retroalimentación",
          B: "A veces escuchó retroalimentación pero resistió hacer cambios",
          C: "Aceptó retroalimentación y reflexionó sobre áreas de desarrollo",
          D: "Buscó activamente retroalimentación y demostró apertura a la mejora",
        },
      },
      105: {
        text: "El supervisor gestionó su tiempo efectivamente priorizando consistentemente las sesiones de coaching y dando atención adecuada tanto a las personas como a los resultados operacionales",
        options: {
          A: "Frecuentemente perdió o apresuró las sesiones de coaching",
          B: "A veces gestionó el tiempo de coaching efectivamente",
          C: "Generalmente gestionó bien el tiempo para coaching y resultados",
          D: "Consistentemente priorizó el coaching y balanceó personas y resultados",
        },
      },
      106: {
        text: "Durante las sesiones de coaching, el supervisor comunicó expectativas claramente, escuchó activamente al miembro del personal y aseguró comprensión mutua",
        options: {
          A: "Las expectativas a menudo no eran claras; escucha activa limitada observada",
          B: "La comunicación a veces era clara pero escucha inconsistente",
          C: "Generalmente se comunicó claramente y escuchó al miembro del personal",
          D: "Consistentemente se comunicó claramente y demostró escucha activa",
        },
      },
      107: {
        text: "El supervisor adaptó su enfoque de liderazgo durante las sesiones de coaching basado en el nivel de competencia del miembro del personal y compromiso con el desarrollo",
        options: {
          A: "Usó el mismo estilo de liderazgo sin importar la situación",
          B: "Ocasionalmente adaptó el estilo de liderazgo a las necesidades del miembro del personal",
          C: "Generalmente adaptó el enfoque de liderazgo apropiadamente",
          D: "Consistentemente practicó liderazgo situacional durante el coaching",
        },
      },
      108: {
        text: "Al delegar tareas o responsabilidades durante el coaching, el supervisor proporcionó expectativas claras, ofreció apoyo apropiado y hizo seguimiento sobre responsabilidad",
        options: {
          A: "Raramente delegó efectivamente o tendió a micromanagear",
          B: "Delegó pero con claridad o seguimiento limitado",
          C: "Delegó claramente con apoyo razonable y seguimiento",
          D: "Consistentemente delegó con claridad, confianza y responsabilidad",
        },
      },
      109: {
        text: "Las sesiones de coaching del supervisor llevaron a mejoras medibles en el desempeño, comportamientos o resultados de trabajo del miembro del personal",
        options: {
          A: "Las sesiones de coaching raramente resultaron en mejoras observables",
          B: "Algunas mejoras fueron observadas pero no consistentemente",
          C: "Las sesiones de coaching a menudo llevaron a mejoras de desempeño",
          D: "El coaching consistentemente impulsó mejoras medibles y sostenidas",
        },
      },
      110: {
        text: "El supervisor se responsabilizó a sí mismo y al miembro del personal durante el coaching abordando problemas directamente en lugar de evitar conversaciones difíciles",
        options: {
          A: "Frecuentemente evitó o retrasó conversaciones de responsabilidad",
          B: "A veces abordó responsabilidad pero con renuencia",
          C: "Generalmente se responsabilizó a sí mismo y a otros",
          D: "Consistentemente enforció responsabilidad a través de conversaciones directas",
        },
      },
      111: {
        text: "Basado en las sesiones de coaching completadas, califica la efectividad general del supervisor en entrenar y desarrollar a este miembro del personal",
        options: {
          A: "Emergente (desarrollando habilidades de coaching fundamentales)",
          B: "En Desarrollo (construyendo competencia con algunas brechas)",
          C: "Competente (demuestra efectividad consistente en coaching)",
          D: "Avanzado (ejemplifica excelencia en coaching y desarrollo)",
        },
      },
    },
  },
};
