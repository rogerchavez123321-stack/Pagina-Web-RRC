Crea una aplicación web llamada "StockControler": un sistema de control de material escolar para docentes. Todo el texto de la interfaz debe estar en español (Argentina, tono voseo cercano: "Ganá", "Registrá").

## CONTEXTO
- Destinatarios del proyecto: Profesor Eduardo Mestrovich y Julián Impeluso (Julián es el responsable que recibe las notificaciones de verificación).
- Usuarios: docentes que necesitan controlar el material escolar de su aula.
- Problema actual: el control se hace con planillas de Excel, lo que genera pérdida de objetos, desconocimiento de la cantidad real de stock, y falta de registro de lugar, fecha y persona a quien se prestó cada material.
- Propuesta de valor (usar como titular del hero): "Ganá el control absoluto de tus materiales escolares y olvidate de las pérdidas para siempre."
- Diferencial: login exclusivo para profesores, cada uno con su propia área de materiales organizada, con imágenes y datos sobre estado, lugar y persona que posee cada objeto.
- Alcance actual: SOLO FRONTEND con datos mock. A futuro se integrará un backend real en Kotlin (API REST con JSON) y una base de datos SQL. El código debe quedar listo para ese cambio sin reescribir las pantallas (ver sección "Arquitectura y preparación para backend real").

## STACK
Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui + lucide-react.

## ESTILO VISUAL
- Moderno, limpio y educativo. Paleta azul/índigo con acentos verde (OK), ámbar (préstamo/alerta) y rojo (roto/faltante).
- Tarjetas con bordes redondeados, buena jerarquía tipográfica, íconos de lucide-react, componentes shadcn/ui.
- Mobile-first y totalmente responsive (el profesor lo usa desde el celular en el aula).
- Acciones rápidas de un clic o un toque.

## PÁGINAS / SECCIONES

1. **Landing page (pública)**
   - Hero con el mensaje de valor y botón "Ingresar como profesor".
   - Sección "El problema": 3 tarjetas (Pérdida de objetos / Cantidad actual desconocida / Falta de registro de lugar, fechas y personas) con comparación breve "Excel vs StockControler".
   - Sección de 3 features principales:
     a) Módulo de Préstamos e Historial: registrá con un clic la persona responsable, la hora de salida y la fecha límite de devolución, con alertas de retraso.
     b) Conteo de Stock en Tiempo Real: existencias exactas desde cualquier dispositivo; cada entrada y salida se descuenta manualmente.
     c) Ubicación y Estado Visual: asigná cada objeto a un espacio o responsable (ej. "Caja 2 / Aula A") con un toque.
   - Sección de ventaja diferencial: datos de fechas, lugares y personal, acceso fácil y búsqueda rápida.
   - Footer simple. Sin precios (el producto es gratuito, no mostrar planes).

2. **Login exclusivo para profesores**
   - Formulario de email y contraseña. Por ahora valida contra datos mock. Tras ingresar, el profesor accede únicamente a su propia área de materiales.

3. **Dashboard del profesor**
   - Selector de aula.
   - Resumen: total de objetos, disponibles, prestados, rotos, préstamos vencidos (con alerta visual).
   - Estado del aula: Abierta / Cerrada, con la hora y el usuario del último cierre.
   - Botones de acceso rápido: "Registrar préstamo", "Agregar material", "Checklist de fin de clase".
   - Campana de notificaciones en el header con contador de no leídas.

4. **Inventario del aula**
   - Grilla/lista de materiales con imagen, nombre, cantidad, estado (Disponible, Prestado, Roto, Faltante), ubicación (ej. "Caja 2 / Aula A") y persona que lo posee.
   - Búsqueda rápida y filtros por estado y ubicación.
   - Al seleccionar un material: panel de detalle con estado, lugar, quién lo posee, historial de movimientos y las anotaciones previas.

5. **Préstamos e Historial**
   - Formulario rápido: material, persona responsable, hora de salida (automática), fecha límite de devolución.
   - Listado de préstamos activos con badge de "Retrasado" en rojo y botón "Registrar devolución".
   - Historial completo de entradas, salidas y préstamos.

6. **Gestión de inventario**
   - Agregar material: nombre, marca, imagen, cantidad, ubicación, estado. Confirmar con toast "Material agregado con éxito".
   - Dar de baja un material o marca completa: diálogo de confirmación y toast "Registro eliminado correctamente".
   - Reportar como roto: botón "Reportar como roto" con confirmación. El estado cambia a "Roto" y se guarda el reporte con fecha.

7. **Revisión y cierre del aula**
   - Revisión previa: al elegir el aula, mostrar la cantidad registrada y las anotaciones anteriores.
   - Registro de novedades: actualizar la cantidad real y registrar ausencias o préstamos a otro docente. Al guardar, notificar "Todo en orden".
   - Botón "Confirmar estado correcto": genera una notificación para Julián Impeluso ("La revisión concluyó sin faltantes"), visible en la campana de notificaciones.
   - Checklist de fin de clase: recordatorio de pedir a los estudiantes que dejen mouses y teclados en el aula, e instrucciones para cerrar los lockers con candado.
   - Botón "Cierre de aula completo": el estado pasa a "Cerrado" y se registra la hora y el usuario.

## USER STORIES / CRITERIOS DE ACEPTACIÓN (implementar el comportamiento)
- Revisión previa: al seleccionar un aula se ven las cantidades y anotaciones anteriores.
- Estado de materiales: al seleccionar un material se ven estado, lugar y poseedor.
- Marcador de roto: "Reportar como roto" + confirmar, el estado pasa a "Roto" y se guarda el registro.
- Ingreso de objetos: completar datos y guardar, aparece el material en el listado con mensaje de éxito.
- Baja de objetos: eliminar con confirmación y notificar la eliminación.
- Registro de novedades: guardar la nueva cantidad y avisar que todo está en orden.
- Verificación exitosa: notificación automática a Julián Impeluso.
- Fin de clase: checklist con recordatorio de mouses, teclados y candados.
- Cierre de aula: estado "Cerrado" con hora y usuario.

## ARQUITECTURA Y PREPARACIÓN PARA BACKEND REAL

Por ahora todos los datos son mock en el front. Más adelante se conectará una API REST en Kotlin con base de datos SQL. Al pasar de mock a API real, SOLO debe cambiar la implementación de los servicios, nunca los componentes ni las pantallas.

### Reglas de arquitectura
1. **Capa de servicios desacoplada**: los componentes NUNCA acceden directo a los datos mock. Toda la lógica de datos vive en `/services` (`authService`, `classroomsService`, `materialsService`, `loansService`, `notificationsService`). Cada función es async, devuelve Promises y simula latencia (300-600 ms) con un delay.
2. **Cliente API único**: crea `/lib/apiClient.ts` con `BASE_URL` leída de `process.env.NEXT_PUBLIC_API_URL` y un flag `USE_MOCK` (`NEXT_PUBLIC_USE_MOCK`, true por defecto). Cada servicio decide: si `USE_MOCK` es true usa `/mocks`; si no, hace `fetch` a la API real. Dejá los `fetch` escritos con los endpoints del contrato de abajo, detrás del flag.
3. **Tipos TypeScript compartidos** en `/types` que reflejen las tablas SQL (ver modelo). IDs numéricos (`number`), fechas en ISO 8601 (string), campos del JSON en `camelCase`.
4. **Datos mock en `/mocks`** con la misma forma exacta que devolverá la API. Mantené el estado mock en memoria dentro de los servicios (por ejemplo, un store simple) para que las altas, bajas, préstamos y cierres persistan mientras la app está abierta.
5. **Estados de UI reales** en todas las pantallas: loading (skeletons), error (mensaje con botón "Reintentar") y vacío, porque con backend real van a existir.
6. **Manejo de errores centralizado**: el cliente API lanza un error tipado `ApiError { status, message }` y la UI lo muestra con toast.
7. **Autenticación preparada para JWT**: `authService.login(email, password)` devuelve `{ token, user }`. Guardá el token en un `AuthContext` y envialo como header `Authorization: Bearer <token>` desde el cliente API. Rutas protegidas con un guard. Cada profesor solo ve sus propias aulas y materiales.
8. **Sin actualizaciones optimistas**: esperá la respuesta del servicio antes de actualizar la UI.
9. **Variables de entorno**: incluí un `.env.example` con `NEXT_PUBLIC_API_URL` y `NEXT_PUBLIC_USE_MOCK=true`.

### Modelo de datos (referencia para las tablas SQL)
- `teachers` (id, name, email, password_hash, created_at)
- `classrooms` (id, name, teacher_id, status ['ABIERTO','CERRADO'], closed_at, closed_by)
- `locations` (id, classroom_id, name)  // ej. "Caja 2", "Locker 1"
- `materials` (id, classroom_id, name, brand, image_url, quantity, status ['DISPONIBLE','PRESTADO','ROTO','FALTANTE'], location_id, holder_name, notes, created_at, updated_at)
- `loans` (id, material_id, borrower_name, quantity, loaned_at, due_date, returned_at, status ['ACTIVO','DEVUELTO','RETRASADO'])
- `stock_movements` (id, material_id, type ['ENTRADA','SALIDA','PRESTAMO','DEVOLUCION','BAJA','ROTURA'], quantity, note, created_by, created_at)
- `damage_reports` (id, material_id, reported_by, reason, created_at)
- `notifications` (id, recipient_name, type, message, classroom_id, read, created_at)
- `classroom_reviews` (id, classroom_id, teacher_id, quantities_ok, notes, created_at)

### Contrato de endpoints esperado (Kotlin REST)
Base: `/api/v1`
- `POST /auth/login` → `{ token, user }`
- `GET /classrooms` → aulas del profesor logueado
- `GET /classrooms/{id}` → detalle, estado y anotaciones previas
- `POST /classrooms/{id}/close` → cierre completo (registra hora y usuario)
- `POST /classrooms/{id}/reviews` → registrar revisión / novedades
- `POST /classrooms/{id}/confirm-ok` → "Confirmar estado correcto" (genera notificación para Julián Impeluso)
- `GET /classrooms/{id}/materials?status=&locationId=&search=`
- `GET /materials/{id}` → detalle con historial
- `POST /materials` → alta
- `PUT /materials/{id}` → editar cantidad, ubicación, poseedor
- `DELETE /materials/{id}` → baja
- `POST /materials/{id}/report-damage` → marcar como roto
- `GET /loans?status=` → préstamos (con filtro de retrasados)
- `POST /loans` → registrar préstamo
- `PATCH /loans/{id}/return` → registrar devolución
- `GET /notifications` y `PATCH /notifications/{id}/read`

Respuestas de error: `{ "status": 400, "message": "texto legible" }`.

Documentá este contrato en un archivo `API_CONTRACT.md` dentro del proyecto para que el equipo de backend lo use de referencia.

## DATOS DE EJEMPLO (MOCK)
Datos realistas con la misma forma que el modelo SQL: aulas (Aula A, Aula B), materiales (mouses, teclados, monitores, cables HDMI, marcadores, calculadoras) con imágenes de placeholder, personas (Eduardo Mestrovich, Julián Impeluso, otros docentes), ubicaciones ("Caja 1 / Aula A", "Locker 2"). Incluí al menos un préstamo vencido, un objeto roto y una notificación sin leer para mostrar las alertas. Usuario de prueba: eduardo.mestrovich@ejemplo.com / 123456.

## NO INCLUIR
Planes de pago, precios ni checkout.
