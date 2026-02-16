# Comandos GIT

*2026-02-13*

> En proceso de redaccion...


Arroba.
~~~
@ = AltGr + q
~~~

## Borra Archivo con GIT

~~~
git rm -f filename1.txt
~~~

## Resete los cambios de un archivo

~~~
git checkout -- .
git checkout -- filename1.txt
~~~

## STASH - Almacen temporal de cambios.

Almacenado.
~~~
git stash save "stash-message"
~~~

Almacenado de archivos especificos.
Nota: debe agregar los archivos con git add para que stash lo identifique
~~~
git stash -m "stash-message" -- filename1.txt filename2.txt…
~~~

Listado.
~~~
git stash list
~~~

Muestra los cambios.
~~~
git stash show -p stash@{0}

git stash show stash@{0} --name-only
~~~

Aplicado  y Aplicado con limpiado.
~~~
git stash apply stash@{0}

git checkout stash@{1} -- filename1.txt

git stash pop stash@{0}
~~~

Eliminacion.
~~~
git stash drop stash@{0}
~~~

Limpiado.
~~~
git stash clear
~~~

