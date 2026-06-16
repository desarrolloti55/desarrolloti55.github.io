# SQL

*2026-02-11*


## OPTIMIZACION

### Consulta Deterministica

Una **Consulta deterministica** es aquella que no varia si ejecuta varias veces en un periodo y no cambia el resultado.

Para que sea **No deterministica** debe contener un dato que cambie en cada ejecucion como lo es las funciones de Fecha y Hora (NOW(), CURDATE(), GETDAY() O SYSDATE()), Funciones aleatorias (RAND() o NEWID()) y la Falta de ordenamiento (ORDER BY)

La principal ventaja de la consulta deterministica es que puede ser **cacheada** eficazmente.

En MySQL: Si creas una función que siempre da el mismo resultado para los mismos argumentos, debes declararla con la palabra clave **DETERMINISTIC**. Esto le dice al optimizador que puede confiar en ella para mejorar el rendimiento.