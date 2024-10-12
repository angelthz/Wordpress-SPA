import { App } from "./App.js";
import api from "./helpers/wp_api.js";

/* Carga de la applicacion */
document.addEventListener("DOMContentLoaded", e=> {
    api.page = 1;
    App();
});

/* Detectar el cambio del hash de la url de nuestra app */
window.addEventListener("hashchange", e=>{
    console.log(api.page)
    api.page = 1;
    App();
});