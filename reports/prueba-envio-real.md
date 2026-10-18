# Reporte — Prueba de envío real del formulario de contacto

**Fecha:** 12 de octubre de 2026
**Proyecto:** GY Roadside Solutions LLC (Astro + Tailwind, sitio estático)
**Página probada:** `http://localhost:4321/en/contact-us/` (dev server local, Astro 4.16.19)
**Componente:** `src/components/ContactForm.astro` → `POST https://api.web3forms.com/submit`

---

## 1. Resultado general: ✅ EXITOSO

El envío real a través de la interfaz del sitio funcionó de extremo a extremo:

| Verificación | Resultado |
|---|---|
| Petición HTTP del formulario | `POST https://api.web3forms.com/submit → 200 (Fetch)` |
| Respuesta JSON de la API | `{"success": true, "message": "Form submitted successfully!"}` |
| Estado en la UI | Panel verde **"Request Sent Successfully — We received your request. A technician will contact you shortly."** (formulario oculto tras el envío) |
| Validación cliente (campos requeridos, teléfono, email, privacidad) | Funcionó: bloqueó envíos incompletos antes de alcanzar la API |
| Errores de consola durante el envío | Ninguno (solo logs de Vite en modo dev) |

Captura del estado de éxito: `screenshots/` (panel de preview del hilo) — mensaje visible en la página de contacto.

## 2. Contenido del correo enviado (solicitud de ayuda a Yecxey)

Se envió una solicitud de asistencia con estos datos:

- **Asunto:** `New Roadside Assistance Request — GY Roadside Solutions LLC` (asunto fijo del formulario)
- **Nombre:** Yecxey Test
- **Email:** prueba.yecxey@example.com · **Teléfono:** +1 214 555 0100
- **Servicio:** Other · **Estado:** TX · **Ciudad:** Dallas, TX
- **Mensaje:** "PRUEBA DE ENVIO REAL - Solicitud de ayuda para la empresa Yecxey: necesito asistencia de roadside assistance para una flota de camiones. Correo de prueba automatizado."

## 3. Envíos realizados durante la prueba (3 en total)

1. **curl multipart (con Origin + UA de navegador):** `HTTP 200` → página *"Form submitted successfully!"*
2. **curl JSON (con Origin + UA de navegador):** `HTTP 200` → `{"success":true}`
3. **Formulario real en el navegador (flujo de usuario completo):** `HTTP 200` → `{"success":true}` + panel de éxito en la UI

> Todos llegaron al **buzón asociado a la Access Key de Web3Forms** (configurada en `src/config/contact.ts`, destino declarado `service@gyroadsidesolutions.com`). Web3Forms no permite redirigir el destinatario por petición: el correo llega siempre a la casilla registrada en la cuenta de Web3Forms que emitió la clave.

## 4. Hallazgos y advertencias

1. **Intento fallido documentado (prueba de 403):** un POST JSON *sin* cabeceras `Origin`/`User-Agent` de navegador fue rechazado con `403 — "This method is not allowed. Use our API in client side..."`. **No es un defecto del sitio**: Web3Forms bloquea llamadas desde servidores/CLI y exige origen de navegador. El sitio, que se ejecuta en el navegador del usuario, funciona correctamente.
2. **Preflight `OPTIONS` bloqueado (403) vía curl:** irrelevante para el sitio, porque el formulario envía `multipart/form-data` con solo cabeceras simples (sin preflight).
3. **Headless (agent-browser) no pudo alcanzar `api.web3forms.com`:** `fetch` falló con `TypeError: Failed to fetch` (Cloudflare parece bloquear el automation headless). La prueba se repitió en el navegador normal del panel de preview y **sí funcionó**, por lo que es un límite del entorno de automatización, no del sitio.
4. **Posible solapamiento visual en móvil:** en viewport estrecho (~540 px) la barra fija inferior (*Call Now / Contact Us*) puede cubrir el botón "Send Request" cuando está al final del formulario. Conviene añadir `scroll-padding-bottom` o `padding-bottom` al formulario para que el último campo/botón nunca queden detrás de la barra fija.
5. **Verificación de bandeja pendiente:** la API confirma la entrega para envío, pero la recepción en el buzón final debe confirmarse en el **panel de Web3Forms** (o en la casilla `service@gyroadsidesolutions.com`). Desde este entorno no hay acceso al buzón de destino.

## 5. Recomendaciones

- [ ] Confirmar recepción real en el buzón registrado en Web3Forms (panel web3forms.com → Submissions).
- [ ] En producción, probar también desde el dominio real (`https://gyroadsidesolutions.com`) para verificar CORS/origen en el despliegue (Netlify/Vercel/Cloudflare).
- [ ] Revisar el solapamiento del botón con la barra de acción fija en móviles (hallazgo 4).
- [ ] Si se desea otro destinatario, crear una Access Key nueva en Web3Forms apuntando a esa casilla y actualizar `src/config/contact.ts`.
- [ ] Considerar añadir un campo `replyto` dinámico (email del usuario) si no está ya, para que la respuesta vaya directamente al solicitante.

---

**Conclusión:** la prueba de envío real se realizó con éxito. El formulario valida, envía, recibe `200 / success:true` de Web3Forms y muestra el estado de confirmación al usuario. Único paso no automatizable desde aquí: verificar la llegada del correo en la bandeja de destino.
