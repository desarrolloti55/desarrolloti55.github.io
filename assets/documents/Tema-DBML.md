# Database Markup Language

**date:** _2026-02-17_
 
**DBML (Database Markup Language)** es un lenguaje de código abierto diseñado para definir y documentar esquemas de bases de datos de forma simple y legible mediante código

Aspectos clave de DBML:
* __Sintaxis Sencilla:__ Diseñado para ser leíble por humanos, enfocado en estructuras de bases de datos relacionales.
* __Definición de Esquemas:__ Permite definir tablas, primary keys, foreign keys, tipos de datos y restricciones (not null, unique).
* __Relaciones:__ Se definen fácilmente mediante la palabra clave ref (ej: Table1.id > Table2.t1_id).
* __Compatibilidad:__ Funciona con múltiples bases de datos como MySQL, PostgreSQL, SQLite y SQL Server.
* __Herramientas:__ Se integra con herramientas como {Link: [dbdiagram.io](https://dbdiagram.io/)} para visualización, {Link: [dbdiagram.io/docs](https://dbml.dbdiagram.io/docs)} para documentación y {Link: [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=nicolas-liger.dbml-viewer)}.
* __Diferencia Importante:__ No debe confundirse con el formato XML de mapeo de LINQ to SQL de Microsoft, aunque comparten la extensión .dbml. 

> dbdiagram.io: Te permite pegar tu código SQL y genera automáticamente el diagrama.