# Jornadas de Desarrollo Web 2026

Sitio web de un evento académico. Presenta el programa de charlas y talleres, la información de la sede y un formulario de inscripción.

## Enlaces

- Demostración: https://rositasilva.github.io/sitio-jornadas-web/
- Repositorio: https://github.com/rositasilva/sitio-jornadas-web

## Qué incluye

- Cuatro secciones: Inicio, Programa, Sede e Inscripción.
- HTML5 semántico, con encabezados en orden, imagen con texto alternativo y formulario con etiquetas asociadas.
- CSS mobile first con variables, Bootstrap 5 para la rejilla y dos media queries propias (48em y 64em).
- JavaScript sin librerías, con tres interacciones: menú adaptable, filtro del programa por tipo de actividad y validación del formulario con mensajes por campo.

## Estructura

    sitio-jornadas-web/
    ├── css/styles.css
    ├── img/hero.svg
    ├── js/main.js 
    └── index.html

## Cómo verlo en local

1. Descargar o clonar el repositorio.
2. Abrir `index.html` en el navegador. No necesita servidor, pero sí internet para cargar Bootstrap.

## Accesibilidad

- Enlace "Saltar al contenido" y foco visible al navegar con teclado.
- Menú con `aria-expanded` y cierre con la tecla Escape.
- Errores del formulario asociados a cada campo con `aria-describedby` y `aria-invalid`.
- El contador del filtro se anuncia a lectores de pantalla con `aria-live`.

## Autora

Rosa Silva
