# PASCAL

*fecha creacion     : 2026-02-13*

*fecha modificacion : 2026-06-08*

> En proceso de redaccion...

# Reglas

* Siempre guardar los proyectos en la carpeta compartida.
* Asegurar que se guarden los cambios constantemente.
* El CTRL+z no es buena solucion, se precabido.
* No elimines, primero comenta y cuando confirmes el funcionamientos, ahora si borra el comentario.

## Principios

* Tipado fuerte, fuerza a declarar el tipo de cada variable lo que hace que los errores bajen.
* Legibilidad, es bastante facil de leer.
* Estrucura, sigue un orden rigido para cada etapa de programacion, lo divide en:
    - Encabezado.
    - Bloque de declaracion.
    - Cuerpo del programa.

**Uso en la actualidad** : para la enseñanza de algorinos, conceptos basicos y razonamiento logico, son utilizado empresas tradicionales como sistemas legado.

Los **sistemas legados** (legacy sistem) son programas con tecnologia que ya es obsoleta o antigua, pero que se mantienen en uso por su utilidad.

Se definen legados dado a su resistencia ante la modernizacion y la dificulta en replazarlos o actualizarlos.

## Conceptos Clave

1. Tipado de datos, Simples o Estructurados.
2. Estrucutra de control: condicionales e iterables.
3. Modularidad: procedure y function.
4. Estructura de datos personalizados: type record.

### Tipado de datos

El tipado de datos es fundamental para gestionar la memoria ya que existen variantes para cada uso

#### 1. Tipo de dato Simple (Escalares)

Son aquellos que almacenan un solo valor. Ejemplo Integer, Real, Boolean y Char.

#### 2. Tipo de dato Estructurado

Permiten agrupar multiples valores bajo un mismo identificador.

* String: secuencia de caracteres
* Arreglos: Coleccion de elementos de un mismo tipo.
* Registros (Record): Permiten agrupar diferentes tipos de datos sobre un mismo identificador.
* Conjuntos (Set): Colecciones de elementos del mismo tipo base (generalmente ordinales) sin orden y sin duplicados.

#### 3. Tipado definido por el programador (Tipos personalizados)

* Enumerados (Enumerated): Definen una lista de valores posibles.
* Subrangos (Subrange): Definen un rango permitido dentro de un tipo existente.


## Variables

se asignan de esta manera 

~~~
name : string; 

name : string = "Bernardo"; 

name := "Bernardo"; 
~~~
 
## Secciones

En pascal se maneja todo por secciones de definiciones: type, public, private, var, const, implementation, etc.

Pascal obliga a seguir un estructoria bien definida para garantizar la organizacion.

### Estructura Estricta de Bloques

* Sección **uses**: Para importar librerías (unidades).
* Sección **var**: Declaración de variables globales o locales.
* Sección **type**: Donde defines tus propios tipos de datos (muy útil para crear estructuras complejas).
* Sección **const**: Para definir constantes.
* Sección **begin...end**: El cuerpo del programa o procedimiento.



## HERENCIA Y POLIMORFISMO

Una funcion puede ser virtual o override para poder definir diferente comportamiento dependiendo de la clase que decee llamarla.

destructor Detroy of class is a virtual funtion, este se invoca por free

No es bueno dar acceso directo a las variables, es mejor tratar una clase como una caja negra, que envuelvan su propios datos internos y solo dar acceso por canales bien definidos usando metodos, para evitar que alguien mas modifique albitrariamente las varibles.

Una tradicion de nomenclatura es agregar guion bajo "_" a las variables privadas de un objeto ( _name : string; ), algunos otros usas f para las variables privadas ( fName : string; )

~~~
BookString = string[30];

BookOb = class
    strict private 
        _name   : BookString;
        _author : BookString;
        procedure AddAuthor ( anAuthor BookString );
    public
        property Name   : BookString read _name     write _name;
        property Autor  : BookString read _author   write AddAuthor;
        function    Describe : BookString;
        constructor Create;
        destructor  Destroy; override;
end;

implementation

procedure BookOb.AddAuthor ( anAuthor BookString );
var 
    newAuthor : BookString;
begin
    if anAuthor = '' then
        newAuthor := 'Anon';
    else 
        newAuthor := anAuthor;
    end;
    _author := newAuthor;
end;
~~~


----------

APRENDE COSAS RELACIONA CON EL PROYECTO

PASCAL

program SIAT; { SIAT,dpr }

Una directiva del compilador en Pascal (y Free Pascal) es una instrucción especial incrustada en el código fuente, generalmente entre llaves y con el símbolo de pesos { $... }, que indica al compilador cómo procesar el código. No generan código máquina, sino que configuran opciones de compilación, como el modo de lenguaje, advertencias o compilación condicional.

{$R *.RES}

La directiva {$R *.RES} en Pascal es una directiva del compilador que indica que se debe incluir un archivo de recursos (.res) en el archivo ejecutable final (.exe).


Una UNIT (unidad) en Pascal es un módulo independiente de código reutilizable que agrupa constantes, tipos, variables, procedimientos y funciones, permitiendo una programación estructurada, modular y de mayor eficiencia al compilar. Facilita la creación de bibliotecas sin exponer el código fuente y permite el uso de recursos externos mediante uses





