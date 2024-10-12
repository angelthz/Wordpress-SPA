//https://developer.wordpress.org/rest-api/

const NAME = "malvestida";
const DOMAIN = `https://www.${NAME}.com`;
const SITE = `${DOMAIN}/wp-json`;
const API_WP = `${SITE}/wp/v2`;
const PER_PAGE = 6;
const POSTS = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`;
const POST = `${API_WP}/posts`;
const CATEGORIES = `${API_WP}/categories`
const SEARCH = `${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`;
let page = 1;

export default{
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    POSTS,
    POST,
    SEARCH,
    CATEGORIES,
    PER_PAGE,
    page
}
