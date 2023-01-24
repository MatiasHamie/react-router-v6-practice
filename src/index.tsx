import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// ** Routers de react router (son React Context) **
import { BrowserRouter } from "react-router-dom"; //el mas comun
// import { HashRouter } from "react-router-dom"; // agrega el /#/
// import { unstable_HistoryRouter } from "react-router-dom"; // acceso directo a la historia del navegador
// import { MemoryRouter } from "react-router-dom"; // almacena en memoria el historial de navegacion (sirve para testear)


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
