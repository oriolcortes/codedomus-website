import type { CheatSheetData } from "./types";

export const sqlCheatsheet: CheatSheetData = {
  title: "Cheatsheet de SQL",
  description: "Consultas y operaciones esenciales para el día a día.",
  ui: {
    searchPlaceholder: "🔍 Buscar en SQL…",
    searchHelper: "Filtra por comando, explicación o sección.",
    footerText: "Keep calm and query on 💻",
  },
  sections: [
    {
      id: "select-basic",
      title: "1. Selección básica",
      items: [
        { primary: "SELECT * FROM tabla;", secondary: "Todas las columnas y filas" },
        { primary: "SELECT col1, col2 FROM tabla;", secondary: "Columnas específicas" },
        { primary: "SELECT DISTINCT col FROM tabla;", secondary: "Valores únicos" },
        { primary: "SELECT col AS alias FROM tabla;", secondary: "Alias de columna" },
        { primary: "SELECT NOW();", secondary: "Fecha/hora actual (depende del motor)" },
      ],
    },
    {
      id: "filters",
      title: "2. Filtros (WHERE)",
      items: [
        { primary: "SELECT * FROM t WHERE id = 10;", secondary: "Igualdad" },
        { primary: "SELECT * FROM t WHERE price BETWEEN 10 AND 20;", secondary: "Rango" },
        { primary: "SELECT * FROM t WHERE name LIKE 'Jo%';", secondary: "Coincidencia por patrón" },
        { primary: "SELECT * FROM t WHERE col IS NULL;", secondary: "Nulos" },
        {
          primary: "SELECT * FROM t WHERE status IN ('open','closed');",
          secondary: "Conjunto de valores",
        },
      ],
    },
    {
      id: "order-limit",
      title: "3. Orden y límite",
      items: [
        { primary: "SELECT * FROM t ORDER BY created_at DESC;", secondary: "Orden descendente" },
        { primary: "SELECT * FROM t ORDER BY a ASC, b DESC;", secondary: "Orden compuesto" },
        { primary: "SELECT * FROM t LIMIT 10;", secondary: "Limitar filas" },
        { primary: "SELECT * FROM t LIMIT 10 OFFSET 20;", secondary: "Paginación" },
        { primary: "SELECT TOP 10 * FROM t;", secondary: "SQL Server: primeras N filas" },
      ],
    },
    {
      id: "joins",
      title: "4. JOINs",
      items: [
        {
          primary: "SELECT * FROM a JOIN b ON a.id = b.a_id;",
          secondary: "INNER JOIN (intersección)",
        },
        {
          primary: "SELECT * FROM a LEFT JOIN b ON a.id = b.a_id;",
          secondary: "LEFT JOIN (todo A + coincidencias)",
        },
        {
          primary: "SELECT * FROM a RIGHT JOIN b ON a.id = b.a_id;",
          secondary: "RIGHT JOIN (todo B + coincidencias)",
        },
        {
          primary: "SELECT * FROM a FULL JOIN b ON a.id = b.a_id;",
          secondary: "FULL (todo A y B, Postgres)",
        },
        { primary: "SELECT * FROM a CROSS JOIN b;", secondary: "Producto cartesiano" },
      ],
      notes:
        "💡 Prefiere ON con claves explícitas. Evita NATURAL JOIN salvo casos muy controlados.",
    },
    {
      id: "aggregation",
      title: "5. Agregaciones (GROUP BY / HAVING)",
      items: [
        { primary: "SELECT COUNT(*) FROM t;", secondary: "Conteo de filas" },
        {
          primary: "SELECT status, COUNT(*) FROM t GROUP BY status;",
          secondary: "Conteo por categoría",
        },
        { primary: "SELECT AVG(price) FROM t;", secondary: "Media" },
        {
          primary: "SELECT dept, SUM(salary) s FROM emp GROUP BY dept HAVING SUM(salary) > 100000;",
          secondary: "Filtrar grupos con HAVING",
        },
        { primary: "SELECT MIN(col), MAX(col) FROM t;", secondary: "Mínimo y máximo" },
      ],
    },
    {
      id: "subqueries",
      title: "6. Subconsultas",
      items: [
        {
          primary: "SELECT * FROM t WHERE id IN (SELECT id FROM u WHERE active = 1);",
          secondary: "Subconsulta en WHERE",
        },
        {
          primary:
            "SELECT (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS order_count FROM users u;",
          secondary: "Escalar en SELECT",
        },
        { primary: "INSERT INTO t (col) SELECT col FROM u;", secondary: "INSERT…SELECT" },
        {
          primary: "WITH top_u AS (SELECT * FROM u LIMIT 10) SELECT * FROM top_u;",
          secondary: "CTE (WITH)",
        },
        {
          primary: "WITH RECURSIVE r AS (...) SELECT * FROM r;",
          secondary: "CTE recursiva (árboles)",
        },
      ],
    },
    {
      id: "dml",
      title: "7. DML (INSERT/UPDATE/DELETE)",
      items: [
        { primary: "INSERT INTO t (a,b) VALUES (1,'x');", secondary: "Insertar una fila" },
        { primary: "INSERT INTO t (a,b) VALUES (1,'x'), (2,'y');", secondary: "Insert múltiple" },
        { primary: "UPDATE t SET col = 'nuevo' WHERE id = 1;", secondary: "Actualizar con filtro" },
        {
          primary: "DELETE FROM t WHERE created_at < '2025-01-01';",
          secondary: "Eliminar con filtro",
        },
        {
          primary: "INSERT INTO t (a) VALUES (1) ON CONFLICT (a) DO NOTHING;",
          secondary: "Upsert (Postgres)",
        },
      ],
      notes: "⚠️ Siempre usa WHERE en UPDATE/DELETE para evitar afectar todas las filas.",
    },
    {
      id: "ddl",
      title: "8. DDL (CREATE/ALTER/DROP)",
      items: [
        {
          primary: "CREATE TABLE users (id SERIAL PRIMARY KEY, name TEXT NOT NULL);",
          secondary: "Crear tabla (Postgres)",
        },
        { primary: "ALTER TABLE users ADD COLUMN email TEXT;", secondary: "Añadir columna" },
        {
          primary: "ALTER TABLE users ALTER COLUMN name SET NOT NULL;",
          secondary: "Modificar restricción",
        },
        { primary: "DROP TABLE users;", secondary: "Borrar tabla" },
        {
          primary: "CREATE VIEW active_users AS SELECT * FROM users WHERE active = true;",
          secondary: "Crear vista",
        },
      ],
    },
    {
      id: "constraints-indexes",
      title: "9. Claves, restricciones e índices",
      items: [
        { primary: "PRIMARY KEY (id)", secondary: "Identificador único y no nulo" },
        {
          primary: "FOREIGN KEY (user_id) REFERENCES users(id)",
          secondary: "Integridad referencial",
        },
        { primary: "UNIQUE (email)", secondary: "Evita duplicados" },
        { primary: "CREATE INDEX idx_t_col ON t(col);", secondary: "Índice simple" },
        {
          primary: "CREATE INDEX idx_t_col_lower ON t(LOWER(col));",
          secondary: "Índice funcional (Postgres)",
        },
      ],
      notes:
        "💡 Indexa columnas usadas en JOIN/WHERE/ORDER BY. Demasiados índices penalizan escrituras.",
    },
    {
      id: "transactions",
      title: "10. Transacciones",
      items: [
        { primary: "BEGIN; ... COMMIT;", secondary: "Iniciar y confirmar" },
        { primary: "BEGIN; ... ROLLBACK;", secondary: "Deshacer cambios" },
        {
          primary: "SET TRANSACTION ISOLATION LEVEL READ COMMITTED;",
          secondary: "Nivel de aislamiento",
        },
        { primary: "SAVEPOINT sp1; ROLLBACK TO sp1;", secondary: "Puntos de guarda" },
        { primary: "SELECT txid_current();", secondary: "ID de transacción (Postgres)" },
      ],
    },
    {
      id: "functions",
      title: "11. Funciones comunes",
      items: [
        { primary: "UPPER(col), LOWER(col), LENGTH(col)", secondary: "Cadenas" },
        {
          primary: "CONCAT(a,' ',b) / a || ' ' || b",
          secondary: "Concat (MySQL/SQL Server vs Postgres)",
        },
        { primary: "COALESCE(col, 'N/D')", secondary: "Sustituir NULL" },
        {
          primary: "NOW(), CURRENT_DATE, DATE_TRUNC('day', ts)",
          secondary: "Fechas y truncado (Postgres)",
        },
        { primary: "CASE WHEN cond THEN x ELSE y END", secondary: "Condicional en SELECT" },
      ],
    },
  ],
};
