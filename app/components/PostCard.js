export function PostCard(props){
    /*destructuracion del objeto props (json) resultante de la llamada a la api de wordpress*/
    let {date,id,_embedded, slug, title} = props;
    let formatedDate = new Date(date).toLocaleString();
    let urlPoster  = _embedded["wp:featuredmedia"] ? _embedded["wp:featuredmedia"][0].source_url : "app/assets/favicon.png";

    //Delegando eventos
    /* document.addEventListener("click", e=> {
        if(!e.target.matches(".post-card a")) return false;
        window.localStorage.setItem("wpPostId", e.target.dataset.id);

    }) */

    return `
        <article class="post-card">
            <img src="${urlPoster}" alt="${title.rendered}">
            <h2>${title.rendered}</h2>
            <p>
                <time datetime="${date}">${formatedDate}</time>
                // añadiendo el id del post al href
                <a href="#/${slug}&post=${id}" data-id="${id}">Ver publicacion</a>
            </p>
        </article>
    `;
}