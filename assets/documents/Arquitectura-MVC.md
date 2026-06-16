# Model-View-Controller (MVC)

*fecha creacion : 2026-06-08*


Este patron de arquitectura divide la logica de un sistema en tres partes con resposabilidades unicas, 
esto hace que el codigo sea mas ordenado y mas mantenible cuanto mas coplejo este el proyecto

### Componentes
#### Reponsabilidades :
* **Modelo**:  Maneja la lógica de negocio, accede a la base de datos y define cómo se estructura la información.
* **Vista**: Es la interfaz. Solo se encarga de mostrar la información, no de procesarla.
* **Controlador**:	Recibe las acciones del usuario, habla con el Modelo para obtener o guardar datos, y luego decide qué Vista mostrar.