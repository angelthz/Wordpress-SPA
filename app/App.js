import api from "./helpers/wp_api.js"
import {ajax} from "./helpers/ajax.js"
import {Title} from "./components/Title.js"
import {Loader} from "./components/Loader.js"
import { Header } from "./components/Header.js";
import { PostCard } from "./components/PostCard.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";
import { InfiniteScroll } from "./helpers/infinite_scroll.js";

export async function App(){
    const $root = document.getElementById("root");
    // correcion para que no duplique el header
    $root.innerHTML = null;
    $root.appendChild( Header() );
    $root.appendChild( Main() );
    $root.appendChild( Loader() );
    await Router();
    InfiniteScroll();
}