import { App } from "./App.js";

/* Carga de la applicacion */
document.addEventListener("DOMContentLoaded", App);

/* Detectar el cambio del hash de la url de nuestra app */
window.addEventListener("hashchange", App);