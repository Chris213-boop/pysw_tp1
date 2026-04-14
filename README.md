================================================================================
DOCUMENTACIÓN TÉCNICA: SITIO WEB DE TURISMO ARG
================================================================================

1. INTRODUCCIÓN
--------------------------------------------------------------------------------
Este proyecto consiste en el desarrollo de un sitio web turístico para promocionar 
destinos en Argentina, utilizando HTML5 y CSS3. El sitio está diseñado para ser 
responsivo, accesible y con efectos avanzados de CSS. Las decisiones de diseño 
se centraron en una experiencia de usuario intuitiva, con navegación clara y 
elementos interactivos.

2. TECNOLOGÍAS UTILIZADAS
--------------------------------------------------------------------------------
* HTML5: Estructura semántica (<header>, <nav>, <section>, <article>, etc.).
* CSS3: Layouts responsivos (Flexbox/Grid), Animaciones (Keyframes) y efectos.
* JavaScript: Mínimo para componentes dinámicos y modo oscuro.
* Herramientas: Visual Studio Code, HTML CSS Support y Live Server.

3. ESTRUCTURA DEL PROYECTO (ORGANIZACIÓN MODULAR)
--------------------------------------------------------------------------------
/
|-- index.html               (Página principal - Home)
|-- pages/                   (destinos.html, agencias.html, etc.)
|-- components/              (header.html, footer.html reutilizables)
|-- assets/
    |-- css/                 (styles.css, header.css, footer.css)
    |-- img/                 (Imágenes de destinos)
    |-- js/                  (Scripts de componentes y modo oscuro)
    |-- video/               (Videos para sección hero)

4. PÁGINAS Y FUNCIONALIDADES IMPLEMENTADAS
--------------------------------------------------------------------------------

[01] PÁGINA PRINCIPAL (index.html)
- Encabezado: Position sticky y mega-menú desplegable.
- Sección Hero: Video de fondo (object-fit: cover) con overlay animado.
- Destinos Destacados: Grid responsivo con efectos de zoom en hover.
- Contador Animado: Simulación de conteo dinámico mediante CSS Keyframes.
- Testimonios: Carrusel 100% CSS (usando radio buttons y labels).
- Pie de Página: Formulario de newsletter y mapa de Google Maps embebido.

[02] PÁGINA DE DESTINOS (destinos.html)
- Sistema de Filtrado: Implementación pura CSS usando selectores :checked.
- Galería Masonry: CSS Grid con alturas variables.
- Tabla Responsiva: Adaptación de precios a móviles mediante Media Queries.

[03] PÁGINA DE AGENCIAS (agencias.html)
- Tarjetas Flip: Efecto de rotación 3D (rotateY) al pasar el mouse.
- Sistema de Rating: Estrellas interactivas con pseudoelementos y CSS.

[04] FORMULARIO DE CONTACTO (contacto.html)
- Validación: Estilos dinámicos inmediatos con :valid e :invalid.
- Feedback: Spinner de carga CSS y modal de confirmación.

[05] PÁGINA DE PRECIOS (precios.html)
- Interactividad: Resaltado de filas en hover y tooltips con ::after.

[06] BLOG DE DESTINOS (blogDestinos.html)
- Diseño Newspaper: Layout tipo revista con CSS Grid.
- Scroll Reveal: Animaciones de revelación al desplazar la página.

5. TÉCNICAS AVANZADAS IMPLEMENTADAS
--------------------------------------------------------------------------------
- Custom Properties: Variables CSS en :root para gestión de colores y temas.
- Clip-path & Masking: Formas creativas e irregulares en imágenes.
- Scroll Snap: Ajuste automático de posición al hacer scroll en secciones.
- Modo Oscuro: Toggle mediante JS que altera las variables globales de CSS.
- Box Model: Uso consistente de box-sizing: border-box.

6. ACCESIBILIDAD Y DISEÑO
--------------------------------------------------------------------------------
- Contraste: Cumplimiento de estándares AA/AAA.
- Navegación: Estados de Focus visibles para uso con teclado.
- Semántica: Uso de ARIA Labels y etiquetas HTML5 adecuadas.
- Responsividad: Estrategia de diseño adaptativa (Mobile First).

--------------------------------------------------------------------------------
FIN DE LA DOCUMENTACIÓN
================================================================================
