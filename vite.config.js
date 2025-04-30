import { defineConfig } from "vite"; // Importa la función para definir la configuración de Vite.
import react from "@vitejs/plugin-react"; // Importa el plugin para habilitar soporte de React.
import { VitePWA } from "vite-plugin-pwa"; // Importa el plugin para integrar funcionalidades PWA.

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), // Habilita el soporte para React en el proyecto.
    VitePWA({
      registerType: "autoUpdate", // Configura el Service Worker para actualizarse automáticamente.
      manifest: {
        name: "Mi PWA React", // Nombre completo de la aplicación.
        short_name: "PWA React", // Nombre corto que aparece en la pantalla de inicio.
        description: "Una Progressive Web App creada con React y Vite", // Breve descripción de la aplicación.
        theme_color: "#ffffff", // Color del tema que se muestra en la barra de herramientas del navegador.
        background_color: "#000000", // Color de fondo de la pantalla de carga inicial.
        display: "standalone", // Modo de visualización: "standalone" simula una app nativa.
        orientation: "portrait", // Orientación preferida de la aplicación.
        start_url: "/", // URL inicial al abrir la aplicación.
        icons: [
          {
            src: "/icon.png", // Ruta del icono de 192x192 píxeles.
            sizes: "192x192", // Tamaño del icono.
            type: "image/png", // Tipo de archivo del icono.
          },
          {
            src: "/icon.png", // Ruta del icono de 512x512 píxeles.
            sizes: "512x512", // Tamaño del icono.
            type: "image/png", // Tipo de archivo del icono.
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^http:\/\/localhost:5173\/.*$/, // Patrón para manejar las solicitudes del localhost.
            handler: "NetworkFirst", // Intenta primero la red y luego la caché.
            options: {
              cacheName: "local-cache", // Nombre de la caché para estas solicitudes.
              expiration: {
                maxEntries: 50, // Máximo de recursos en caché.
                maxAgeSeconds: 86400, // Duración máxima en la caché (1 día).
              },
            },
          },
        ],
      },
      
    }),
  ],
});
