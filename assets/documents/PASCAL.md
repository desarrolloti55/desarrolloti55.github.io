# PASCAL

*2026-02-13*

> En proceso de redaccion...

# Reglas

* Siempre guardar los proyectos en la carpeta compartida.
* Asegurar que se guarden los cambios constantemente.
* El CTRL+z no es buena solucion, se precabido.
* No elimines, primero comenta y cuando confirmes el funcionamientos, ahora si borra el comentario.

## Variables

se asignan de esta manera 

~~~
name : string; 

name : string = "Bernardo"; 

name := "Bernardo"; 
~~~
 
## Secciones

En pascal se maneja todo por secciones de definiciones: type, public, private, var, const, implementation, etc.

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




