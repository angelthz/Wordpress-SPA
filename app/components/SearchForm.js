export function SearchForm(){
    const $form = document.createElement("form");
    const $input = document.createElement("input");
    
    $form.classList.add("search-form");
    $input.name = "search";
    $input.type = "search";
    $input.placeholder = "Buscar...";
    $form.appendChild($input);
    // eventos

    if(window.location.hash.includes("#/search")){
        $input.value = localStorage.getItem("wpSearch");
    }

    document.addEventListener("submit", e=> {
        if(!e.target.matches(".search-form")) return false;
        e.preventDefault();
        // añadir el termino de busqueda al localstorage
        window.localStorage.setItem("wpSearch", e.target.search.value);
        location.hash = `#/search?=${e.target.search.value}`;
    })

   /*  document.addEventListener("focusin", e=> {
        if(!e.target.matches("input[type='search']")) return false;
        e.target.value = "";
        window.localStorage.removeItem("wpSearch")
    }) */

    
    return $form;
}