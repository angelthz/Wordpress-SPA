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
    let { hash } = location;
    const $main = document.getElementById("main");
    console.log(hash);

    $main.innerHTML = null;
    // validaciones
    if (!hash || hash === "#/") {
        // $posts.innerHTML = `<h2>Seccion Home</h2>`;
        await ajax({
            url: api.POSTS,
            successCallback: (posts) => {
                console.log(posts);
                let html = "";
                posts.forEach(post => html += PostCard(post));
                $main.innerHTML = html;
            }
        });

        console.log(api.POST)
    }
    else if (hash.includes("#/search")) {
        $main.innerHTML = `<h2>Seccion Buscar</h2>`;
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
        // console.warn(api.POST + "/" + window.localStorage.getItem("wpPostId"));
        console.warn("Post ID: ", postId);
        await ajax({
            url: `${api.POST}/${postId}`,
            successCallback: (post) => {
                console.log(post);
                $main.innerHTML = Post(post);
            }
        });
    }
    document.querySelector(".loader").style.display = "none";
}