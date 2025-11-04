import type { CheatSheetData } from "./types";

export const regexCheatsheet: CheatSheetData = {
  title: "Cheatsheet de REGEX · Habituales",
  description: "Colección rápida de patrones ya hechos para inputs típicos. Copiar y pegar.",
  ui: {
    searchPlaceholder: "🔍 Buscar en regex…",
    searchHelper: "Filtra por patrón, explicación o sección.",
    footerText: "¡Listo! Con esta chuleta tienes las regex más comunes a mano. Feliz validación 🚀",
  },
  sections: [
    {
      id: "forms",
      title: "1. Formularios comunes",
      items: [
        {
          primary: "^[A-Za-z]{2,}$",
          secondary: "solo letras (mín. 2) — nombres sencillos",
        },
        {
          primary: "^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$",
          secondary: "email sencillo",
        },
        {
          primary: "^\\d{5}$",
          secondary: "código postal de 5 dígitos",
        },
        {
          primary: "^[0-9]{9}$",
          secondary: "teléfono español sin prefijo",
        },
        {
          primary: "^\\+?[0-9\\s-]{7,15}$",
          secondary: "teléfono internacional simple",
        },
        {
          primary: "^(\\d{4}-\\d{4}-\\d{4}-\\d{4}|\\d{16})$",
          secondary: "número de tarjeta de crédito (16 dígitos)",
        },
        {
          primary: "^(0[1-9]|1[0-2])\\/([0-9]{2})$",
          secondary: "fecha de caducidad MM/AA",
        },
        {
          primary: "^\\d{3}$",
          secondary: "código CVV (3 dígitos)",
        },
      ],
    },
    {
      id: "auth",
      title: "2. Autenticación y seguridad",
      items: [
        {
          primary: "^[a-zA-Z0-9_-]{3,16}$",
          secondary: "username típico (3–16 chars)",
        },
        {
          primary: "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d).{8,}$",
          secondary: "contraseña fuerte: 8+ chars, mayús, minús y número",
        },
        {
          primary: "^(?=.*[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]).{8,}$",
          secondary: "contraseña con símbolo especial (8+ chars)",
        },
      ],
    },
    {
      id: "validation",
      title: "3. Validación de datos",
      items: [
        {
          primary: "^\\d{4}-\\d{2}-\\d{2}$",
          secondary: "fecha ISO (YYYY-MM-DD)",
        },
        {
          primary: "^(0[1-9]|1[0-2]):([0-5][0-9])$",
          secondary: "hora en formato 24h (HH:MM)",
        },
        {
          primary: "^https?:\\/\\/[^\\s]+$",
          secondary: "URL http o https",
        },
        {
          primary: "^(https?:\\/\\/)?(www\\.)?[a-z0-9-]+\\.[a-z]{2,6}(\\/.*)?$",
          secondary: "URL más flexible (con o sin www)",
        },
        {
          primary: "^[0-9]+(\\.[0-9]{1,2})?$",
          secondary: "número decimal (máx. 2 decimales)",
        },
        {
          primary: "^#[0-9A-Fa-f]{3}([0-9A-Fa-f]{3})?$",
          secondary: "código de color HEX (3 o 6 dígitos)",
        },
        {
          primary: "^(rgb|rgba)\\((\\s*\\d+\\s*,){2}\\s*\\d+(\\.\\d+)?\\s*\\)$",
          secondary: "código de color RGB(A)",
        },
      ],
    },
  ],
};
