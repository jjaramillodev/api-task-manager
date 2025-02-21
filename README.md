# ApiTaskManager

  API RESTful para gestionar tareas.

# End Points:

  1. POST /tasks -> Para crear una nueva tarea.
  2. GET /tasks -> Para obtener la lista de tareas.
  3. PUT /tasks:id -> Para actualizar una tarea.

## Modelo de Datos

  - Estados:
    - Id: Identificador único (tipo numeric, clave única y autoincremental).
    - Título: Nombre del estado (tipo string, obligatorio).
    - Descripción: Breve descripción (tipo string, obligatorio).

  - Tarea:
    - Id: Identificador único (tipo numeric, clave única y autoincremental).
    - Título: Breve descripción (tipo string, obligatorio).
    - Fecha de vencimiento: Fecha límite (tipo fecha, opcional).
    - Estado: Inicialmente "Pendiente", luego “En progreso”, y “Completada”. (tipo numeric, clave foranea de la tabla de “Estados”)

## Regla de Negocio:

  - Si alguna tarea tiene una fecha de vencimiento pasada y aún no se ha marcado como completada, el sistema debe reflejar su estado como estado de “Atrasada”.

## Tecnologías

  - NodeJS
  - TypeScript
  - PostgreSQL