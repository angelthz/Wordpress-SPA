/* 
    Contenido html para los posts 
*/

export function Post(props){
    let {content, date, title} = props;
    let formattedDate = new Date(date).toLocaleString();
    return `
        <section class="post-page">
            <aside>
                <h2>${title.rendered}</h2>
                <time date="${date}">${formattedDate}</time>
            </aside>
            <hr>
            <article>${content.rendered}</article>
        </section>
    `;
}