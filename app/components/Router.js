import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Posts.js";


/* Invoacion de peticiones a realizar dependiendo de la seccion de contenido que 
    se requiera.
*/

/* Añadimos async/await */

export async function Router() {
    // destructuracion de location para obtener la propeiedad hash
    let { hash } = window.location;
    const $main = document.getElementById("main");

    $main.innerHTML = null;
    // validaciones
    if (!hash || hash === "#/") {
        await ajax({
            url: api.POSTS,
            successCallback: (posts) => {
                console.log(posts);
                let html = "";
                posts.forEach(post => html += PostCard(post));
                $main.innerHTML = html;
            }
        });
    }
    else if (hash.includes("#/search")) {
        let query = localStorage.getItem("wpSearch");
        if(!query) return false;
        await ajax({
            url : `${api.SEARCH}${query}`,
            successCallback : (result) => {
                console.log(result)
            }
        })
    }
    else if (hash === "#/contacto") {
        $main.innerHTML = `<h2>Seccion Contacto</h2>`;
    }
    else {
        /* post individual
            peticion ajax para solicitar el post seleccionado
            endpoint: api.POST+"/id_posts"
        */
        // ahora tomamos el id del post del objeto location.hash
        let regx = /&post=\d+/;
        let postId = regx.exec(location.hash)[0].replace("&post=","");
        await ajax({
            url: `${api.POST}/${postId}`,
            successCallback: (post) => {
                $main.innerHTML = Post(post);
            }
        });
    }
    document.querySelector(".loader").style.display = "none";
}