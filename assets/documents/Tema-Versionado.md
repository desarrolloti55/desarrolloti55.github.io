# Versionado

**date:** _2026-04-24_

Este permite demostrar el avaze presiso del estado un proyecto. 

La estructura: _MAJOR.MINOR.BUILF.REVISION_

Desglose de los 4 niveles
* MAYOR (Major): Indica cambios críticos o una ruptura de compatibilidad hacia atrás.

* MENOR (Minor): Añade nueva funcionalidad manteniendo la compatibilidad con las versiones anteriores dentro del mismo número mayor.

* COMPILACIÓN (Build): Se utiliza para identificar una compilación específica del código fuente. A menudo se incrementa automáticamente cada vez que el servidor de CI/CD genera un ejecutable.

* REVISIÓN (Revision): Reservado para parches de emergencia o "hotfixes". Si hay un error crítico en una compilación que debe corregirse de inmediato sin añadir funciones, se altera este número.