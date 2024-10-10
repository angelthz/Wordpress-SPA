export function ajax(props) {
    let { url, successCallback } = props;
    fetch(url,{"Access-Control-Allow-Origin": "*"})
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => successCallback(json))
        .catch(err => {
            let msg = err.statusText || "Ocurrio un error al acceder a la API";
            console.error(err);
            document.getElementById("main").innerHTML = `
                <div>
                <p class="error">Error ${err.status}: ${msg}</p>
                </div>
            `;
            document.querySelector(".loader").style.display = "none";
        })
}