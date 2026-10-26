# Registro de estaciones ferroviarias de Buenos Aires

Aplicación web informativa para explorar una selección de líneas y estaciones ferroviarias de la Ciudad Autónoma de Buenos Aires. Presenta las líneas mediante tarjetas, reúne fotografías de estaciones y ofrece un formulario de contacto para consultas o correcciones.

## Contenido

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Scripts disponibles](#scripts-disponibles)
- [Alcance actual](#alcance-actual)

## Características

- **Inicio:** presentación del sitio y acceso al listado de líneas.
- **Líneas ferroviarias:** tarjetas con información básica e imágenes de siete líneas: San Martín, Belgrano Norte, Mitre, Urquiza, Sarmiento, Belgrano Sur y Roca.
- **Estaciones:** galería de fotografías de estaciones asociadas a distintas líneas.
- **Contacto:** formulario con campos para datos personales, motivo y mensaje.
- **Navegación:** menú y pie de página compartidos, con rutas para Inicio, Líneas, Estaciones y Contacto.
- **Página 404:** mensaje para las rutas que no existen y enlace para volver al inicio.

## Tecnologías

- React 19
- JavaScript (ES modules)
- Vite 8
- React Router DOM 7
- ESLint 10

## Requisitos

- Node.js y npm instalados.
- Git, si se desea clonar el repositorio.

## Instalación

Cloná el repositorio y accedé a la carpeta del proyecto:

```bash
git clone <URL_DEL_REPOSITORIO>
cd tp-front-ribot
```

Instalá las dependencias:

```bash
npm install
```

## Uso

Iniciá el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local para abrir la aplicación en el navegador. Mientras el servidor esté activo, los cambios en el código se reflejarán durante el desarrollo.

Las secciones principales están disponibles en estas rutas:

| Sección | Ruta |
| --- | --- |
| Inicio | `/` |
| Líneas | `/lineas` |
| Estaciones | `/estaciones` |
| Contacto | `/contacto` |

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor local de desarrollo de Vite. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve localmente la versión previamente compilada. |
| `npm run lint` | Ejecuta ESLint sobre el proyecto. |

Para comprobar la versión de producción, ejecutá primero `npm run build` y después `npm run preview`.

## Estructura del proyecto

```text
public/
  Lines/       Imágenes de las líneas ferroviarias
  images/      Fotografías de estaciones
src/
  assets/      Recursos importados por la aplicación
  components/  Componentes compartidos, como la navegación y el pie
  pages/       Vistas de Inicio, Líneas, Estaciones, Contacto y error
  styles/      Hojas de estilo de las secciones
  main.jsx     Punto de entrada y configuración de rutas
```

## Alcance actual

El proyecto es una interfaz frontend estática: el contenido de líneas y estaciones está definido en el código y las imágenes se sirven desde `public/`. El formulario de contacto permite completar y validar campos en el navegador, pero todavía no está conectado a un backend ni envía o almacena mensajes.
