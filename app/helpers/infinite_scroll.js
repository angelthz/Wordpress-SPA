import { PostCard } from "../components/PostCard.js";
import { SearchCard } from "../components/SearchCard.js";
import { ajax } from "./ajax.js";
import api from "./wp_api.js";

export  async function InfiniteScroll(){
    let query = window.localStorage.getItem("wpSearch");
    let apiUrl = "";
    let Component = null;
    
    // creamos un observer
    const options = {
        rootMargin: "0px",
        threshold: [0]
    }
    
    //2. creamos nuestro observer
    const myObserver = new IntersectionObserver(myCallback, options);
    
    async function myCallback(entries, observer){
        let hash = document.location.hash;
        let html = "";
        
        if(entries[0].isIntersecting){
            api.page++;
            document.querySelector(".loader").style.display = "block";
            // console.log("visualizando todo")
            if(!hash || hash === "#/"){
                apiUrl = `${api.POSTS}&page=${api.page}`;
                Component = PostCard;
            }
            else if(hash.includes("#/search")){
                apiUrl = `${api.SEARCH}${query}&page=${api.page}`;
                Component = SearchCard;
            }
            else return false;

            await ajax({
                    url : apiUrl,
                    successCallback : (res) =>{
                        // console.log(res)
                        res.forEach( el => html += Component(el));
                        document.getElementById("main").insertAdjacentHTML("beforeend",html);
                        console.log(document.querySelectorAll(".post-card").length)
                        // document.getElementById("main").insertAdjacentHTML("beforeend",`<hr id="load-more">`)
                        document.querySelector(".loader").style.display = "none";
                    }
                })

            // console.log(api.page)
        }
        else return false;
        // console.log(entries)
    }
    // console.log(document.getElementById("load-more"))
    myObserver.observe(document.getElementById("load-more"));


   /*  window.addEventListener("scroll",  (e) => {
        let {scrollTop, clientHeight, scrollHeight} = document.documentElement;
        let {hash} = window.location;

        // console.log(scrollTop, clientHeight, scrollHeight, hash);

        if(scrollTop+clientHeight >= scrollHeight){
            let last = document.querySelectorAll(".post-card").length - 1;
            console.log(last)
            console.log(document.querySelectorAll(".post-card"))
            console.log(document.querySelectorAll(".post-card")[last])
            
            // api.page++;
            // if(!hash || hash.includes("#/")){
            //     apiUrl = `${api.POSTS}$page=${api.page}`;
            //     Component = PostCard;
            // }
            // else if(hash.includes("#/search?=")){
            //     apiUrl = `${api.SEARCH}${query}&page=${api.page}`;
            //     Component = SearchCard;
            // }
            // else return false;

            //  ajax({
            //     url : apiUrl,
            //     successCallback : (res) =>{
            //         // document.getElementById("main").insertAdjacentHTML("beforeend",Component(res))
            //         console.log(hash, api.page);
            //     }
            // })
        }
    }); */
}