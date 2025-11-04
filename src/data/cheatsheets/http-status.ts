import type { CheatSheetData } from "./types";

export const httpStatusCheatsheet: CheatSheetData = {
  title: "Cheatsheet de Códigos HTTP",
  description: "Significado y uso de los principales códigos de estado HTTP.",
  ui: {
    searchPlaceholder: "🔍 Buscar código o descripción…",
    searchHelper: "Filtra por número o categoría de estado.",
    footerText: "💡 Conoce el significado de cada respuesta del servidor y depura como un experto.",
  },
  sections: [
    {
      id: "info",
      title: "1xx — Informativos",
      items: [
        {
          primary: "100 Continue",
          secondary: "El servidor ha recibido los encabezados y espera el cuerpo.",
        },
        {
          primary: "101 Switching Protocols",
          secondary: "El cliente solicita cambiar de protocolo (por ejemplo, a WebSocket).",
        },
        {
          primary: "102 Processing",
          secondary:
            "El servidor está procesando la solicitud, pero aún no hay respuesta (WebDAV).",
        },
      ],
    },
    {
      id: "success",
      title: "2xx — Éxito",
      items: [
        { primary: "200 OK", secondary: "Solicitud exitosa. Respuesta estándar." },
        { primary: "201 Created", secondary: "Recurso creado correctamente (POST o PUT)." },
        { primary: "202 Accepted", secondary: "Solicitud aceptada para procesamiento asíncrono." },
        { primary: "204 No Content", secondary: "Éxito sin contenido que devolver." },
        {
          primary: "206 Partial Content",
          secondary: "Respuesta parcial (descargas reanudables o rangos).",
        },
      ],
    },
    {
      id: "redirects",
      title: "3xx — Redirecciones",
      items: [
        {
          primary: "301 Moved Permanently",
          secondary: "El recurso se ha movido definitivamente a otra URL.",
        },
        { primary: "302 Found", secondary: "Redirección temporal." },
        { primary: "303 See Other", secondary: "Usado tras POST para redirigir con GET." },
        {
          primary: "307 Temporary Redirect",
          secondary: "Redirección temporal manteniendo método y cuerpo.",
        },
        {
          primary: "308 Permanent Redirect",
          secondary: "Redirección permanente manteniendo método y cuerpo.",
        },
      ],
      notes: "💡 Usa 301 para SEO permanente y 302/307 para redirecciones temporales.",
    },
    {
      id: "client-errors",
      title: "4xx — Errores del cliente",
      items: [
        { primary: "400 Bad Request", secondary: "Solicitud mal formada o inválida." },
        { primary: "401 Unauthorized", secondary: "Requiere autenticación (sin token válido)." },
        {
          primary: "403 Forbidden",
          secondary: "El cliente está autenticado pero no tiene permisos.",
        },
        { primary: "404 Not Found", secondary: "Recurso no encontrado." },
        { primary: "405 Method Not Allowed", secondary: "Método HTTP no permitido para esa ruta." },
        {
          primary: "409 Conflict",
          secondary: "Conflicto de estado (por ejemplo, registro duplicado).",
        },
        { primary: "410 Gone", secondary: "Recurso eliminado permanentemente." },
        {
          primary: "422 Unprocessable Entity",
          secondary: "Error de validación (muy usado en APIs REST y GraphQL).",
        },
        {
          primary: "429 Too Many Requests",
          secondary: "Demasiadas peticiones — throttling o rate limiting.",
        },
      ],
      notes: "⚠️ Los errores 4xx indican un problema en la solicitud o permisos del cliente.",
    },
    {
      id: "server-errors",
      title: "5xx — Errores del servidor",
      items: [
        { primary: "500 Internal Server Error", secondary: "Error genérico del servidor." },
        { primary: "501 Not Implemented", secondary: "Método no soportado o aún no implementado." },
        {
          primary: "502 Bad Gateway",
          secondary: "El servidor actúa como proxy y recibió una respuesta inválida.",
        },
        {
          primary: "503 Service Unavailable",
          secondary: "Servidor temporalmente fuera de servicio (mantenimiento o sobrecarga).",
        },
        {
          primary: "504 Gateway Timeout",
          secondary: "El servidor proxy no recibió respuesta a tiempo.",
        },
        { primary: "505 HTTP Version Not Supported", secondary: "Versión HTTP no soportada." },
      ],
      notes: "💣 Los errores 5xx suelen requerir revisión del backend o la infraestructura.",
    },
    {
      id: "api-tips",
      title: "🧩 Buenas prácticas en APIs",
      items: [
        {
          primary: "Usa 201 en POST exitosos",
          secondary: "Indica creación y devuelve el recurso nuevo o su ubicación.",
        },
        {
          primary: "404 coherente",
          secondary: "Devuelve 404 solo si el recurso realmente no existe.",
        },
        {
          primary: "422 para validación",
          secondary: "Ideal para errores de campos inválidos en JSON.",
        },
        { primary: "429 con Retry-After", secondary: "Incluye cabecera con segundos de espera." },
        { primary: "Usa 204 en DELETE", secondary: "Éxito sin cuerpo en eliminaciones." },
      ],
    },
  ],
};
