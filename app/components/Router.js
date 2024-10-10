import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";

/* Invoacion de peticiones a realizar dependiendo de la seccion de contenido que 
    se requiera.
*/

export function Router() {
    // destructuracion de location para obtener la propeiedad hash
    let {hash} = location;
    console.log(hash);
    ajax({
        url: api.POSTS,
        successCallback: (posts) => {
            console.log(posts);

            let html = "";
            posts.forEach(post => html += PostCard(post));
            document.querySelector(".loader").style.display = "none";
            document.getElementById("posts").innerHTML = html;
        }
    });
}