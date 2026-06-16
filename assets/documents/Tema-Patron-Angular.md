# Patrón de Estado Compartido vía Servicios con Signals

El patrón de **Estado Compartido vía Servicios con Signals** en Angular es un enfoque moderno y reactivo para gestionar el estado de la aplicación. 
Consiste en encapsular una signal dentro de un servicio inyectable, permitiendo que múltiples componentes lean y reaccionen a los cambios de datos de forma granular y eficiente.

Este enfoque es ideal para estados de UI o datos compartidos dentro de módulos de características, ofreciendo una alternativa ligera a las librerías complejas.

1. Componentes Clave del Patrón:

    * Servicio Angular (@Injectable): Funciona como la "fuente única de verdad" (Single Source of Truth).

    * Writetable Signal (signal): Mantiene el valor del estado privado dentro del servicio para asegurar que las actualizaciones sean controladas.

    * Read-only Signal (asReadonly): Expone el estado a los componentes para que solo puedan leerlo, no modificarlo directamente.

    * Métodos de actualización: Funciones en el servicio (ej. update, set) para modificar el valor de la señal de manera controlada.

2. Ventajas de este patrón

    * Reactividad Granular: Los componentes solo se vuelven a renderizar cuando el valor específico que utilizan cambia, mejorando el rendimiento.

    * Gestión Centralizada: Facilita la depuración al tener los datos en un solo lugar.

    * Simple y Ligero: No requiere librerías externas ni código repetitivo (boilerplate).

    * Inmutabilidad: El uso de update asegura que el estado se maneje de forma segura.

3. Alternativas Avanzadas

    Para aplicaciones de mayor complejidad, se puede utilizar el paquete @ngrx/signals, que ofrece signalStore y signalState para gestionar estados más estructurados y escalables, integrándose directamente con los principios de inmutabilidad y efectos.