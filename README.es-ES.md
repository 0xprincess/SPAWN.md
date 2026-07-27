<p align="center">
  <a href="https://0xprincess.github.io/SPAWN.md/">
    <img src="docs/hero.svg" alt="SPAWN.md — agents play, you set the game rules" width="100%">
  </a>
</p>

# SPAWN.md

SPAWN.md es una plantilla de flujo de trabajo para proyectos donde agentes autónomos escriben la mayor parte del código y un operador humano dirige a través de concesiones delimitadas en lugar de una supervisión paso a paso. Consiste enteramente en archivos Markdown y una única semilla JSON; sin entorno de ejecución, sin frameworks, sin herramientas que instalar. Un agente lo instancia basándose en la descripción de un proyecto; el resultado es la estructura de gobernanza y registro que el proyecto mantiene durante toda su vida útil.

La plantilla fue extraída de un proyecto agéntico impulsado por benchmarks que duró varios meses y fue generalizada. Sus reglas no son aspiracionales: cada una responde a un modo de fallo que ocurrió en la práctica, varios de ellos repetidamente y con costos reales.

## Por qué

Los proyectos construidos agénticamente tienden a fallar en cuatro preguntas para las cuales nadie escribió las respuestas:

1. ¿Qué se decidió y el código realmente se ajusta a ello?
2. ¿Qué se intentó, cuánto costó y por qué ganó o perdió?
3. ¿Qué puede hacer el agente sin preguntar y cuándo debe detenerse?
4. ¿Cómo retoma el trabajo una sesión nueva sin heredar mitos?

SPAWN.md asigna a cada pregunta una vía con reglas explícitas, plantillas y ganchos de verificación.

## Características

### Vía de arquitectura (`arch/`)

Las decisiones de diseño se registran como propuestas de mejora numeradas con un ciclo de vida estilo EIP (Borrador, Revisión, Aceptada, Final, Superada, Retirada) y encabezados de relación (Supera a, Requiere, Extendida por). Las propuestas finales son inmutables; los cambios ocurren mediante superación o mediante enmiendas fechadas y explícitamente delimitadas. El historial de decisiones es, por construcción, de solo añadir (append-only).

El estado de la implementación se mantiene totalmente fuera de las propuestas. Un mapa de conformidad legible por máquina independiente (`arch/conformance.json`) registra, por propuesta, si el código cumple, qué módulos y pruebas lo satisfacen y qué brechas quedan. Las entradas conformes requieren pruebas; las entradas parciales requieren la enumeración de brechas; el mapa se actualiza en el mismo commit que el código que describe.

### Vía de experimentación (`experiments/`)

Cada contacto con la realidad —ejecuciones pagadas, benchmarks, canarios, pruebas de usuario— recibe un registro numerado que se declara antes de cualquier gasto: hipótesis con un mecanismo de producción explícito, alcance congelado, alternativas, riesgos, criterios de aceptación falsables y presupuesto. Cada registro termina con un cierre terminal obligatorio: resultado, causa raíz, costo real, siguiente acción.

La disciplina codifica predeterminados ganados con esfuerzo: ensayo completo de costo cero antes del despliegue real (incluyendo los pasos finales de publicación y liquidación), los fallos de unidad única liquidan su unidad en lugar de matar la campaña, los experimentos cerrados terminalmente nunca se reanudan y los resultados negativos se conservan con el mismo cuidado que las victorias.

### Vía de gobernanza (`governance/`)

El control del operador se expresa como un acta (charter): una definición falsable de "terminado", concesiones de autonomía (topes de gasto, alcance de decisión), invariantes estrictos cuya violación anula el acta, restricciones de dirección que codifican vectores de fallo ya diagnosticados, disparadores de escalada y una cadencia de informes en la que el silencio prolongado es, en sí mismo, una anomalía. Dentro de las concesiones, el agente no pide permiso; fuera de ellas, se detiene.

La vía incluye `SELF-CORRECTION.md`, un manual de fallos destilado que se copia textualmente en cada proyecto instanciado. Sus reglas cubren las trampas recurrentes del desarrollo impulsado por agentes: volver a corregir una suposición errónea en lugar de cuestionarla, construir ceremonia de proceso en lugar del entregable, condicionar la salida estocástica a un contenido exacto, atribuir victorias a mecanismos no declarados y confundir las afirmaciones del agente con evidencia verificable.

### Ciclo de vida de la sesión

Las misiones se entregan a sesiones de agentes nuevas a través de dos documentos con autoridad distinta: `GOAL.md` es normativo (entregables ordenados, reglas vinculantes, presupuesto, un límite de parada explícito) y `experiments/HANDOFF.md` es descriptivo (estado actual verificado, convenciones de trabajo, peculiaridades conocidas y una lista creciente de lecciones pagadas). Las sesiones verifican el estado reclamado antes de confiar en él y reescriben el traspaso para su sucesor cuando se completa una misión.

### Adaptación en lugar de variantes

No existen ediciones por tipo de proyecto. `ADAPTATION.md` define siete vinculaciones que un agente instanciador deriva de la descripción del propio proyecto: nomenclatura de propuestas, el umbral de lo que requiere una propuesta, la unidad de gasto, el conjunto de comandos de verificación, los umbrales del acta, los artefactos propiedad del generador y las superficies de reserva. También define cómo se reduce la estructura para proyectos pequeños —colapsando documentos, nunca eliminando las cuatro preguntas— y enumera los antipatrones de instanciación que un operador debe rechazar.

## Primeros pasos

Apunta a un agente a este repositorio y a una descripción del proyecto, con una sola línea:

    Bootstrap my project from SPAWN.md: <describe tu proyecto>

El prompt se mantiene corto porque el procedimiento reside en el repo, no en el prompt. `WORKFLOW.md` comienza indicando al agente instanciador exactamente qué hacer; `ADAPTATION.md` le indica cómo derivar las vinculaciones. Lo que el agente hace, en orden:

1. Lee `WORKFLOW.md` (las reglas duraderas) y `ADAPTATION.md` (la guía de derivación).
2. Deriva las vinculaciones específicas del proyecto y las registra en el `OVERVIEW.md` instanciado.
3. Copia el árbol, renombra los archivos `*.template.md` a sus nombres reales, rellena cada marcador de posición y siembra el mapa de conformidad.
4. Realiza el commit del flujo de trabajo instanciado antes de cualquier código de producto.

`WORKFLOW.md` y `governance/SELF-CORRECTION.md` se copian textualmente; los archivos `*.template.md` llevan marcadores `{{PLACEHOLDER}}` para las vinculaciones.

## Diseño del repositorio

    WORKFLOW.md                     reglas del flujo de trabajo — copia textual
    ADAPTATION.md                   guía de derivación de vinculaciones — copia
    OVERVIEW.template.md            visión duradera del proyecto
    GOAL.template.md                acta por misión para una sesión nueva
    arch/README.md                  reglas de la vía de decisión
    arch/proposals/0000-template.md plantilla de propuesta
    arch/conformance.json           semilla del mapa de conformidad
    experiments/README.md           disciplina de registro de experimentos
    experiments/0000-template.md    plantilla de registro de experimentos
    experiments/HANDOFF.template.md briefing de traspaso de sesión
    governance/CHARTER.template.md  acta del operador
    governance/SELF-CORRECTION.md   manual de fallos — copia textual
    docs/RUNBOOK.template.md        verificación y operaciones

## Alcance

SPAWN.md gobierna cómo se decide, intenta, delimita y entrega el trabajo agéntico. No prescribe lenguajes, frameworks, ejecutores de pruebas o arneses de agentes; esos son vínculos que el agente instanciador deriva por proyecto.
