# Documentación Técnica – Proyecto Turismo ARG

## 1. Introducción

El proyecto **Turismo ARG** es un sitio web informativo y promocional orientado al turismo en Argentina. Fue desarrollado utilizando tecnologías web base: HTML5, CSS3 y JavaScript. El objetivo principal es presentar destinos turísticos, agencias, precios y contenido visual atractivo mediante una interfaz moderna, organizada e interactiva.

## 2. Tecnologías Utilizadas

* **HTML5:** utilizado para estructurar el contenido de forma semántica mediante etiquetas como `header`, `main`, `section`, `article` y `footer`. Se eligió porque mejora la organización del código, la accesibilidad y el posicionamiento en buscadores.
* **CSS3:** utilizado para todo el diseño visual del sitio: colores, tipografías, espaciados, animaciones, transiciones y diseño responsivo. Se eligió por permitir crear una interfaz moderna sin depender de librerías externas.
* **JavaScript:** utilizado principalmente para cargar componentes reutilizables como header y footer, además de pequeños comportamientos dinámicos. Se eligió para evitar repetir código HTML y facilitar mantenimiento.
* **GitHub Pages / Netlify:** plataformas de despliegue utilizadas para publicar el sitio online de forma gratuita y accesible desde cualquier dispositivo.

## 3. Estructura General del Proyecto

El proyecto fue organizado en carpetas para separar responsabilidades:

* `assets/css/` → hojas de estilo.
* `assets/js/` → scripts JavaScript.
* `assets/img/` → imágenes.
* `assets/video/` → recursos multimedia.
* `components/` → header y footer reutilizables.
* `pages/` → páginas internas del sitio.
* `index.html` → página principal.

Esta estructura mejora el mantenimiento y escalabilidad del proyecto.

## 4. Componentes Reutilizables

Se implementó un sistema de carga dinámica para el **header** y **footer** mediante JavaScript (`include.js`). Esto evita repetir código en cada página.

### Funcionamiento:

* Detecta si la página actual se encuentra dentro de `/pages/`.
* Ajusta la ruta relativa automáticamente.
* Inserta `header.html` y `footer.html` mediante `fetch()`.

### Ventajas:

* Reutilización de código.
* Fácil mantenimiento.
* Consistencia visual en todo el sitio.

## 5. Página Principal (Home)

La página principal fue diseñada para causar impacto visual e invitar al usuario a explorar el sitio.

### Secciones implementadas:

### Hero Section

* Video de fondo en reproducción automática.
* Texto principal superpuesto con animación.
* Overlay oscuro para mejorar legibilidad.

### Destinos Destacados

* Tarjetas con imágenes representativas.
* Efecto hover con zoom.
* Información emergente al pasar el cursor.
* Layout con CSS Grid adaptable.

### Contador Visual

* Indicador numérico animado de visitas.
* Uso de `@keyframes` para efecto dinámico.

### Testimonios

* Carrusel desarrollado solo con CSS.
* Uso de radio buttons y `:checked`.
* Cambio suave entre testimonios.

## 6. Diseño y Estilo Visual

Se utilizaron criterios modernos de diseño con una intención funcional y estética:

* **Colores sobrios con buen contraste:** elegidos para transmitir seriedad y permitir una lectura clara sobre imágenes y videos.
* **Tipografía sans-serif:** seleccionada por su legibilidad en pantallas y apariencia moderna.
* **Bordes redondeados en tarjetas:** utilizados para suavizar la interfaz y generar una estética actual.
* **Espaciados consistentes:** aplicados para mejorar el orden visual y evitar saturación de contenido.
* **Animaciones suaves:** implementadas para dar dinamismo sin distraer al usuario.
* **Experiencia visual limpia y profesional:** priorizando navegación simple e impacto visual.

## 7. Layouts Utilizados

### CSS Grid

Usado en galerías y tarjetas para organizar contenido en filas y columnas automáticas. Se eligió porque permite distribuir múltiples elementos de distinto tamaño de forma ordenada y adaptable.

### Flexbox

Usado en header, hero y alineación de elementos internos. Se eligió porque facilita centrar contenido horizontal y verticalmente, además de distribuir bloques en una sola dirección de forma flexible.

## 8. Responsividad

El sitio fue adaptado para diferentes tamaños de pantalla mediante:

* `auto-fit` y `minmax()` en Grid.
* Medidas relativas (% / rem / vh).
* Contenedores flexibles.
* Distribución adaptable en dispositivos móviles.

## 9. Decisiones Técnicas Relevantes

* **Separación modular de archivos:** HTML, CSS y JS fueron organizados por carpetas para facilitar mantenimiento.
* **Reutilización de componentes:** header y footer externos para modificar una sola vez y reflejar cambios en todo el sitio.
* **Uso mínimo de JavaScript:** se priorizó resolver interacciones con CSS para reducir complejidad.
* **Mayor protagonismo de CSS avanzado:** uso de Grid, Flexbox, hover, transiciones y animaciones para demostrar manejo técnico.
* **Navegación simple y clara:** menús directos para mejorar experiencia del usuario.
* **Uso de recursos multimedia:** videos e imágenes reales para aumentar atractivo turístico del proyecto.

## 10. Conclusión

El proyecto Turismo ARG cumple con los requisitos funcionales y visuales solicitados. Se aplicaron buenas prácticas de estructura web, reutilización de código y diseño responsivo. El resultado es un sitio atractivo, ordenado y preparado para ser publicado online.
