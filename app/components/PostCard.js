export function PostCard(props){
    /*destructuracion del objeto props (json) resultante de la llamada a la api de wordpress*/
    let {date,_embedded, slug, title} = props;
    
    let formatedDate = new Date(date).toLocaleString();
    let urlPoster  = _embedded["wp:featuredmedia"] ? _embedded["wp:featuredmedia"][0].source_url : "app/assets/favicon.png";
    return `
        <article class="post-card">
            <img src="${urlPoster}" alt="${title.rendered}">
            <h2>${title.rendered}</h2>
            <p>
                <time datetime="${date}">${formatedDate}</time>
                <a href="#/${slug}">Ver publicacion</a>
            </p>
        </article>
    `;
}