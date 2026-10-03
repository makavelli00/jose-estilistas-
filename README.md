# José Estilistas · Web

Web oficial de **José Estilistas**, barbería y peluquería en Jerez de la Frontera (Plaza de Nicaragua, Local 1A, Parque San Joaquín).

La página presenta los servicios y precios, opiniones de clientes, preguntas frecuentes y la ubicación, y permite reservar cita a través de Booksy o contactar por WhatsApp. Incluye datos estructurados (JSON-LD), `robots.txt` y `llm.txt` para mejorar el posicionamiento en buscadores y asistentes de IA.

## Tecnologías

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/), compilado con PostCSS durante el build
- Iconos de [lucide-react](https://lucide.dev/)

## Puesta en marcha

Necesitas [Node.js](https://nodejs.org/) 20.19 o superior.

```bash
npm install       # instala las dependencias
npm run dev       # servidor de desarrollo en http://localhost:5173
npm run build     # genera la versión de producción en dist/
npm run preview   # sirve localmente la versión de producción
npm run lint      # revisa el código con ESLint
```

## Estructura

```
index.html          # HTML base y metadatos SEO (JSON-LD)
src/App.jsx         # todo el contenido de la página
src/App.css         # estilos propios
src/index.css       # estilos globales y directivas de Tailwind
tailwind.config.js  # configuración de Tailwind
public/             # logo, favicon, robots.txt y llm.txt
```

Para cambiar textos, precios o servicios, edita `src/App.jsx`.
