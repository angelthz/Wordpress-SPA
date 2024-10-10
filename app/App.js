import api from "./helpers/wp_api.js"
import {ajax} from "./helpers/ajax.js"
import {Title} from "./components/Title.js"
import {Loader} from "./components/Loader.js"
import { Header } from "./components/Header.js";
import { PostCard } from "./components/PostCard.js";
import { Posts } from "./components/Posts.js";
import { Router } from "./components/Router.js";

export function App(){
    const $root = document.getElementById("root");
    $root.appendChild( Header() );
    $root.appendChild( Posts() );
    $root.appendChild( Loader() );
    Router();
}