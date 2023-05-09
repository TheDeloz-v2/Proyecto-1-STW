# Proyecto-1-STW
Proyecto 1 - Sistemas y Tecnologías Web
Replicación de una página web a elección utilizando React.

# [Spacex](https://www.spacex.com/)
<img src="https://enfoquenoticias.com.mx/wp-content/uploads/2022/03/space-750x422.jpg">
Spacex - Es una empresa estadounidense de fabricación aeroespacial y de servicios de transporte espacial con sede en Hawthorne. Fue fundada en 2002 por Elon Musk

## Preview
Click [aquí](https://stw-proyecto-1.vercel.app/).

## Estrcutura
- **Pages**: Folder de organización para implementación de Next.js
    - *components*: Componentes de la página
      - Footer
      - Header
      - Section
    - *images*: Images de la página
      - Imagenes .webp
      - Logo
    - *styles*: Styles de la página
      - App.scss
    - _app.js
    - _document.js
    - index.jsx

- **Src**: Folder de organización para implementación de React
    - *components*: Componentes de la página
      - Footer
      - Header
      - Section
    - *images*: Images de la página
      - Imagenes .webp
      - Logo
    - App.js
    - App.scss
    - index.js
    - index.scss


- **Public**: Folder público para implementación de React
    - index.html
    - favicon.ico
    - manifes.json
    - Logos .jpg .png

- **package.json**
- **package-lock.json**


## SetUP

Utilizar el manejador de archivos [npm](https://docs.npmjs.com/getting-started) para poder instalar los modulos necesarios
```bash
npm install
```

## Uso

Para iniciar el proyecto en un servidor [local](http://localhost:3000/), utilizar el comando:
```bash
npm run dev
```
Para crear una salida de producción, utilizar el comando:
```bash
npm run build
```

## ¿Qué tecnologías se utilizaron en este proyecto?
Este proyecto utiliza las siguientes tecnologías:
- [React](https://es.reactjs.org/)
- [SASS](https://sass-lang.com/)
- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com/)

### ¿Cómo se aplicaron?

- **React**: React se ha utilizado para el desarrollo de los componentes de la página.
    Cada sección de la página se ha desarrollado como un componente individual. Se aprovecharon las funcionalidades de React para aplicarse en interacciones dentro de la página.
- **SASS**: SASS se ha utilizado para el desarrollo de los estilos de la página.
 Se ha utilizado para poder aprovechar sus funciones de variables y su sistema de anidación de CSS, mejorando y facilitando el entendimiento de los estilos.
- **Next.js**: Next.js se ha utilizado para el desarrollo de la página en general.
  Se ha utilizado para poder aprovechar su función de SSR (*Server Side Rendering*).
- **Vercerl**: Vercel se ha utilizado como plataforma para construir, desplegar y compartir el proyecto.