-- Datos de ejemplo (NO ejecutar en produccion)

INSERT INTO categories (name, slug, sort_order) VALUES ('General', 'general', 0);

-- TRUNCATE TABLE documents RESTART IDENTITY;
INSERT INTO documents (title, slug, content) VALUES ('¡Hola mundo!', 'hola-mundo', E'# Hola mundo\nEste es el contenido de mi archivo markdown.');