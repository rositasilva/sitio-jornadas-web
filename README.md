# Jornadas de Desarrollo Web 2026

Es una página para un evento académico inventado: dos días de charlas y talleres sobre desarrollo web.

Demostración: https://rositasilva.github.io/sitio-jornadas-web/
Repositorio: https://github.com/rositasilva/sitio-jornadas-web

## Qué tiene la página

Tiene cuatro secciones: inicio, programa, sede e inscripción. El diseño lo hice pensando primero en el celular y después lo adapté a pantallas más grandes con dos media queries. Usé Bootstrap solo para la rejilla y los botones; los colores, las variables y el menú los escribí yo en `css/styles.css`.

En JavaScript hice tres cosas, sin librerías: el menú que se abre y se cierra en pantallas pequeñas, un filtro para ver solo charlas o solo talleres, y la validación del formulario de inscripción.

## Archivos

- `index.html`: la estructura de la página
- `css/styles.css`: los estilos
- `js/main.js`: el menú, el filtro y el formulario
- `img/hero.svg`: la ilustración de la portada

## Cómo abrirla

Se descarga el repositorio y se abre `index.html` en el navegador. Hace falta internet porque Bootstrap se carga desde un CDN.

Rosa Silva
