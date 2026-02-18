# 4. Fase de Diseño

*2026-02-13*

> En proceso de redaccion...

<!-- Link Referencia 2026-02-16 https://global.tiffin.edu/blog/cuales-son-las-etapas-del-desarrollo-de-software -->

Aquí se define cómo se implementará el sistema para cumplir con los requisitos establecidos en el análisis. En esta fase, se crea una arquitectura que organiza los componentes del software, incluyendo su estructura, interfaces, y flujo de datos. 

También se especifican tecnologías, herramientas y patrones a utilizar para garantizar una solución escalable.

Dicha etapa contempla tanto el diseño a alto nivel (arquitectura del sistema) como el diseño detallado (estructuras de datos, algoritmos y diagramas técnicos). El diseño actúa como un plano que guía a los desarrolladores durante la construcción del software, asegurando que cada parte del sistema sea funcional, coherente y alineada con los objetivos del proyecto.

Listado de cosas para capacitar a soporte
* Funciones
* Procedimientos
* Consultas

> Hay que definir como va a funcionar y como se va a crear antes de coficarlo.

--- 
<br><br>

## Diseño Tecnico de Software

El diseño tecnico de software es el proceso de planificar la **arquitectura, componentes, interfaces y datos** de un sistema antes de la codificación, garantizando soluciones escalables, seguras y eficientes.

> En un inicio se utiliza lápiz y papel.

Componentes Clave:
* __Arquitectura de Software:__ Define la estructura de alto nivel (monolítica, microservicios, serverless).
* __Diseño de Base de Datos:__ Modelado de datos (relacional/NoSQL) y estructura de almacenamiento.
* __Interfaces y APIs:__ Definición de cómo interactuarán los diferentes módulos y sistemas externos.
* __Documento de Diseño Técnico (TDD):__ Actúa como hoja de ruta para desarrolladores y testers, detallando la implementación. 


Principios y Técnicas:
* __Modularidad:__ División en componentes cohesivos y con bajo acoplamiento.
* __Abstracción:__ Organización de ideas y entidades antes de la implementación.
* __Seguridad y Escalabilidad:__ Asegurar que el sistema sea robusto, sostenible y adaptable a futuros cambios.
* __Documentación:__ Uso de diagramas (UML, flujos) para comunicación clara. 

--- 
<br><br>

## Documento de Diseño Técnico (TDD)

Un **Documento de Diseño Técnico (TDD)** es la hoja de ruta que explica cómo se construirá una solución de software. 
A diferencia de los documentos funcionales que dicen qué debe hacer el sistema, el TDD se enfoca en **la arquitectura, los datos y las decisiones de ingeniería**. 

Para crear uno efectivo, sigue esta estructura y mejores prácticas: 

1. Estructura recomendada
Un **TDD** sólido debe estar organizado de forma lógica, generalmente bajo estas secciones: 

    * __Resumen y Objetivos:__ Define el problema que intentas resolver y el alcance del proyecto.
    * __Contexto y Antecedentes:__ Explica por qué se toma esta dirección técnica y qué sistemas actuales se verán afectados.
    * __Arquitectura del Sistema:__ Usa diagramas (como diagramas C4 o de flujo) para mostrar cómo interactúan los componentes.
    * __Diseño de Datos:__ Detalla el esquema de la base de datos, modelos de datos y cómo fluirá la información.
    * __Detalle de APIs y Componentes:__ Define los nuevos endpoints, servicios y lógica compleja (pseudocódigo si es necesario).
    * __Consideraciones de Seguridad y Rendimiento:__ Describe protocolos de cifrado, manejo de errores y cómo escalará el sistema.
    * __Plan de Pruebas y Despliegue:__ Estrategia para verificar que el código funcione y los pasos para llevarlo a producción. 

2. Pasos para su elaboración

    * __Reúne requisitos:__ Colabora con los stakeholders para entender las necesidades funcionales antes de proponer la técnica.
    * __Elige tu stack:__ Define lenguajes, frameworks y bases de datos, justificando cada elección.
    * __Dibuja primero:__ Antes de escribir párrafos largos, crea diagramas visuales para simplificar ideas complejas.
    * __Redacta con sencillez:__ Usa lenguaje directo, listas con viñetas y evita jerga innecesaria para que sea accesible a todo el equipo.
    * __Solicita revisión:__ Envía el borrador a otros ingenieros para recibir feedback y ajustar el diseño antes de empezar a programar. 

3. Consejos clave
    * __Mantenlo vivo:__ El TDD no es estático; actualízalo a medida que el proyecto evoluciona para que no quede obsoleto.
    * __Sé consistente:__ Utiliza la misma terminología y formato en todo el documento para facilitar su lectura.
    * __No olvides los "No-Objetivos":__ Clarifica qué no estás intentando resolver para evitar que el alcance del proyecto crezca sin control. 

[Receta TDD](?file=Reseta-TDD.md)

--- 
<br><br>

[Anterior](?file=Proyectos-Fases-no4-Diseno.md)  [**Principal**](?file=Proyectos-Fases-del-Proceso-de-Dearrollo.md)  [Siguiente](?file=Proyectos-Fases-no5-Analisis-de-Iteracion.md)