import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";


/* Invoacion de peticiones a realizar dependiendo de la seccion de contenido que 
    se requiera.
*/

export function Router() {
    // destructuracion de location para obtener la propeiedad hash
    let {hash} = location;
    const $main = document.getElementById("main");
    console.log(hash);

    $main.innerHTML = null;
    // validaciones
    if(!hash || hash==="#/"){
        // $posts.innerHTML = `<h2>Seccion Home</h2>`;
        ajax({
            url: api.POSTS,
            successCallback: (posts) => {
                console.log(posts);
    
                let html = "";
                posts.forEach(post => html += PostCard(post));
                document.querySelector(".loader").style.display = "none";
                $main.innerHTML = html;
            }
        });
    }
    else if(hash.includes("#/search")){
        $main.innerHTML = `<h2>Seccion Buscar</h2>`;
    }
    else if(hash === "#/contacto"){
        $main.innerHTML = `<h2>Seccion Contacto</h2>`;
    }
    else{
        /* articulos */
        $main.innerHTML = `<h2>Contenido del Post seleccionado</h2>`;
    }
    
}