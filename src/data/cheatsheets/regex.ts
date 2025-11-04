import type { CheatSheetData } from "./types";

export const regexCheatsheet: CheatSheetData = {
  title: "Cheatsheet de REGEX",
  description: "Sintaxis base, anclas y usos típicos.",
  ui: {
    searchPlaceholder: "🔍 Buscar en regex…",
    searchHelper: "Filtra por patrón, explicación o sección.",
    footerText:
      "Empieza por patrones sencillos, escapa caracteres especiales y documenta las regex largas.",
  },
  sections: [
    {
      id: "basicos",
      title: "🧱 Básicos",
      items: [
        { primary: ".", secondary: "Cualquier carácter (excepto salto de línea, salvo flag 's')" },
        { primary: "\\d", secondary: "Dígito (0-9)" },
        { primary: "\\D", secondary: "No dígito" },
        { primary: "\\w", secondary: "Carácter de palabra (letras, números, _)" },
        { primary: "\\W", secondary: "No carácter de palabra" },
        { primary: "\\s", secondary: "Espacio en blanco (espacio, tab, salto...)" },
        { primary: "\\S", secondary: "No espacio en blanco" },
      ],
    },
    {
      id: "cuantificadores",
      title: "🔢 Cuantificadores",
      items: [
        { primary: "a*", secondary: "0 o más veces" },
        { primary: "a+", secondary: "1 o más veces" },
        { primary: "a?", secondary: "0 o 1 vez (opcional)" },
        { primary: "a{3}", secondary: "exactamente 3 veces" },
        { primary: "a{2,}", secondary: "2 o más veces" },
        { primary: "a{2,5}", secondary: "entre 2 y 5 veces" },
        { primary: "a+?", secondary: "no codicioso (lo mínimo posible)" },
        { primary: "a*?", secondary: "0 o más pero no codicioso" },
      ],
    },
    {
      id: "anclas",
      title: "🎯 Anclas y límites",
      items: [
        {
          primary: "^abc$",
          secondary: "coincide EXACTAMENTE con 'abc'. Muy usado en validaciones web",
        },
        { primary: "^", secondary: "inicio de cadena/línea" },
        { primary: "$", secondary: "fin de cadena/línea" },
        { primary: "\\bword\\b", secondary: "palabra completa 'word'" },
        { primary: "\\Babc", secondary: "sin límite de palabra" },
      ],
    },
    {
      id: "conjuntos",
      title: "🧪 Conjuntos y rangos",
      items: [
        { primary: "[abc]", secondary: "cualquiera de a, b o c" },
        { primary: "[a-z]", secondary: "letra minúscula" },
        { primary: "[A-Z]", secondary: "letra mayúscula" },
        { primary: "[0-9]", secondary: "dígito" },
        { primary: "[a-zA-Z]", secondary: "cualquier letra" },
        { primary: "[^0-9]", secondary: "cualquier cosa menos dígitos" },
      ],
    },
    {
      id: "grupos",
      title: "📦 Grupos y alternancia",
      items: [
        { primary: "(abc)", secondary: "grupo de captura" },
        { primary: "(?:abc)", secondary: "grupo sin captura" },
        { primary: "(abc|def)", secondary: "abc o def" },
        { primary: "(ab){2}", secondary: "repite el grupo 2 veces → abab" },
        { primary: "\\1", secondary: "usa lo capturado en el grupo 1" },
        { primary: "(?=abc)", secondary: "lookahead positivo" },
        { primary: "(?!abc)", secondary: "lookahead negativo" },
      ],
    },
    {
      id: "flags",
      title: "⚙️ Flags (modificadores)",
      items: [
        { primary: "/.../g", secondary: "global (todas las coincidencias)" },
        { primary: "/.../i", secondary: "ignora mayús/minús" },
        { primary: "/.../m", secondary: "^ y $ por línea" },
        { primary: "/.../s", secondary: "'.' incluye saltos de línea" },
        { primary: "/.../u", secondary: "unicode" },
      ],
    },
    {
      id: "js",
      title: "💻 En código JavaScript",
      items: [
        { primary: "/^\\d+$/ .test(valor)", secondary: "validar solo números" },
        { primary: "str.match(/abc/gi)", secondary: "obtener todas las coincidencias 'abc'" },
        { primary: "str.replace(/\\s+/g, ' ')", secondary: "reducir espacios múltiples" },
        { primary: "str.split(/,\\s*/)", secondary: "dividir por coma opcionalmente con espacios" },
        { primary: "new RegExp('^' + user + '$')", secondary: "regex dinámica en JS" },
      ],
    },
  ],
};
