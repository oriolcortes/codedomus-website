import type { CheatSheetData } from "./types";

export const gitCheatsheet: CheatSheetData = {
  title: "Cheatsheet de Git",
  description: "Comandos esenciales para tu flujo de trabajo.",
  ui: {
    searchPlaceholder: "🔍 Buscar en Git…",
    searchHelper: "Filtra por comando, explicación o sección.",
    footerText: "¡Listo! Con esta chuleta tienes Git bajo control. Feliz commit 🚀",
  },
  sections: [
    {
      id: "setup",
      title: "0. Setup inicial",
      items: [
        { primary: "git init", secondary: "Crea un repositorio vacío en la carpeta actual" },
        {
          primary: "git clone https://github.com/usuario/proyecto.git",
          secondary: "Clona un repositorio remoto",
        },
        { primary: "cd proyecto", secondary: "Entra en el proyecto clonado" },
        { primary: "git remote -v", secondary: "Verifica los remotos configurados" },
        { primary: "git config --list", secondary: "Muestra configuración actual de Git" },
      ],
    },
    {
      id: "config",
      title: "1. Inicialización y configuración",
      items: [
        {
          primary: 'git config --global user.name "Tu Nombre"',
          secondary: "Configura tu nombre global",
        },
        {
          primary: 'git config --global user.email "tu@email.com"',
          secondary: "Configura tu email global",
        },
        {
          primary: "git config --global init.defaultBranch main",
          secondary: "Define la rama principal por defecto",
        },
      ],
    },
    {
      id: "basic-flow",
      title: "2. Flujo de trabajo básico",
      items: [
        { primary: "git status", secondary: "Ver estado actual" },
        { primary: "git add .", secondary: "Añade todos los cambios" },
        { primary: "git add src/components/Header.astro", secondary: "Añade solo un archivo" },
        {
          primary: 'git commit -m "feat: cabecera responsive"',
          secondary: "Crea un commit con mensaje",
        },
        { primary: "git push origin main", secondary: "Sube commits a remoto" },
      ],
    },
    {
      id: "branches",
      title: "3. Ramas (feature flow)",
      items: [
        { primary: "git branch", secondary: "Lista ramas locales" },
        { primary: "git checkout -b feat/blog", secondary: "Crea y cambia a nueva rama" },
        { primary: "git merge feat/blog", secondary: "Fusiona rama en actual" },
        { primary: "git switch main", secondary: "Cambia a la rama principal" },
        { primary: "git branch -d feat/blog", secondary: "Borra una rama fusionada" },
      ],
      notes:
        "💡 Trabaja cada componente o página grande en su propia rama; mantén main siempre desplegable.",
    },
    {
      id: "remotes",
      title: "4. Repositorios remotos",
      items: [
        {
          primary: "git remote add origin https://github.com/tuuser/tu-sitio-astro.git",
          secondary: "Añade remoto al repositorio",
        },
        { primary: "git remote -v", secondary: "Ver URLs remotas configuradas" },
        { primary: "git fetch --all", secondary: "Descarga ramas y etiquetas sin fusionar" },
        { primary: "git pull --rebase", secondary: "Actualiza evitando merges extra" },
      ],
    },
    {
      id: "history",
      title: "5. Inspección del historial",
      items: [
        {
          primary: "git log --oneline --graph --decorate --all",
          secondary: "Muestra historial compacto y ramificado",
        },
        { primary: "git show HEAD~1", secondary: "Muestra detalles del commit anterior" },
        { primary: "git diff main..feat/blog", secondary: "Compara diferencias entre ramas" },
      ],
    },
    {
      id: "undo",
      title: "6. Deshacer sin dramas",
      items: [
        { primary: "git restore archivo.astro", secondary: "Revierte un archivo al último commit" },
        {
          primary: "git reset --soft HEAD~1",
          secondary: "Deshace último commit manteniendo cambios",
        },
        { primary: "git reset --hard HEAD~1", secondary: "Deshace y elimina cambios (¡cuidado!)" },
      ],
    },
    {
      id: "stash",
      title: "7. Stash (cambios provisionales)",
      items: [
        {
          primary: 'git stash push -m "wip: diseño footer"',
          secondary: "Guarda cambios sin commitear",
        },
        { primary: "git switch main", secondary: "Cambia a main" },
        { primary: "git stash apply", secondary: "Recupera último stash guardado" },
        {
          primary: "git stash list | git stash drop stash@{0}",
          secondary: "Lista o elimina un stash",
        },
      ],
    },
    {
      id: "collab",
      title: "8. Trabajar en equipo",
      items: [
        {
          primary: "git pull --rebase origin main",
          secondary: "Rebase local antes de enviar cambios",
        },
        {
          primary: "git push --set-upstream origin feat/blog",
          secondary: "Sube rama y crea tracking remoto",
        },
      ],
      notes: "Usa PR/MR para revisión de código.",
    },
    {
      id: "aliases",
      title: "9. Aliases útiles",
      items: [
        { primary: "co = checkout", secondary: "Cambiar de rama" },
        { primary: "cm = commit -m", secondary: "Commit con mensaje" },
        { primary: "st = status -sb", secondary: "Ver estado resumido" },
        {
          primary: "lg = log --oneline --graph --decorate --all",
          secondary: "Historial gráfico compacto",
        },
      ],
    },
  ],
};
