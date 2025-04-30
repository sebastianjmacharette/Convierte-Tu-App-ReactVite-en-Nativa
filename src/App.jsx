import React, { useEffect } from "react";

function App() {
  // Set item en localStorage y log para verificar
  localStorage.setItem("nombre", "Laboratorio de Código y Diseño");
  console.log("localStorage actualizado con clave: 'nombre'");

  useEffect(() => {
    // Comprobar si el Service Worker está registrado
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("Service Worker registrado con éxito:", registration);
        })
        .catch((error) => {
          console.error("Error al registrar el Service Worker:", error);
        });
    } else {
      console.warn("El navegador no soporta Service Workers.");
    }

    // Logs para diferentes eventos del Service Worker
    if (navigator.serviceWorker.controller) {
      console.log("El Service Worker está activo y controlando la página.");
    }

    navigator.serviceWorker.addEventListener("controllerchange", () => {
      console.log("El controlador del Service Worker ha cambiado.");
    });
  }, []);

  // Agregar eventos al Service Worker
  self.addEventListener("install", (event) => {
    console.log("Service Worker: Instalado correctamente.");
  });

  self.addEventListener("activate", (event) => {
    console.log("Service Worker: Activado correctamente.");
  });

  self.addEventListener("fetch", (event) => {
    console.log("Service Worker: Fetch interceptado para", event.request.url);
  });

  return (
    <div>
      <h1>Laboratorio de Código y Diseño</h1>
    </div>
  );
}

export default App;
