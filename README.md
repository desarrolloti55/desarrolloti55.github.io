# desarrolloti55.github.io

Carta de presentación personal. Sitio estático (HTML, CSS y JavaScript sin
dependencias) publicado con GitHub Pages en <https://desarrolloti55.github.io>.

## Estructura

```text
index.html                      Contenido de la página
assets/
  css/styles.css                Estilos, tema claro y oscuro automático
  data/perfil.json              Datos que muestra la tarjeta
  images/greca-oro.svg          Máscara de la fila dorada de la greca de fondo
  images/greca-cian.svg         Máscara de la fila cian de la greca de fondo
  js/perfil.js                  Carga el perfil en la tarjeta
  js/efectos.js                 Foco de luz que sigue al cursor
```

## Editar los datos

La tarjeta lee `assets/data/perfil.json`. Los campos se editan a mano:

- `name`: nombre visible y título de la pestaña. Con `null` usa `login`.
- `login`: usuario de GitHub, se usa si `name` está vacío.
- `bio`: texto bajo el nombre. Un `|` separa el titular de la segunda línea.
- `avatar_url`: imagen de la tarjeta y del favicon.
- `html_url`: destino del botón de GitHub.
Si el archivo no carga, la página muestra los valores por defecto de
`index.html`.

## Uso local

El navegador bloquea la lectura del JSON y las máscaras de la greca al abrir
el HTML directamente desde el disco (`file://`). Hay que servir la carpeta:

```powershell
npx serve .
```

También sirve la extensión Live Server de VS Code o Kiro.

## Diseño

- Los colores están en variables CSS al inicio de `styles.css`; el tema se
  elige según la preferencia del sistema.
- La opacidad de la greca se ajusta con `--opacidad-patron`.
- Las filas de la greca se pintan con el color del tema usando los SVG como
  máscara, por eso mantienen contraste en ambos temas.
- Con "reducir movimiento" activado en el sistema se desactivan las
  animaciones.
