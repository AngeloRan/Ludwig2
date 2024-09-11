import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ReactPixel from 'react-facebook-pixel';

const options = {
  autoConfig: true,   // Inizializza automaticamente il pixel con il tracciamento delle pagine
  debug: false,       // Imposta su true per visualizzare i log di debug nella console
};


ReactPixel.init('532188439488853', {}, options); // Sostituisci 'YOUR_PIXEL_ID' con l'ID del tuo pixel
ReactPixel.pageView(); // Traccia una visualizzazione di pagina iniziale

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
