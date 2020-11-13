import {getResultsFetch,getResultAsync} from "./HTTP/http-service.js";
import {data} from "./Context/context.js";
import {makeMenu} from "./Menu/make-menu.js";
import {makeContent} from "./Content/make-content.js";
import {makeImage} from "./Content/make-image.js";

const url = "https://swapi.dev/api/people/";

const changeContent = (numberStar) =>{
    makeContent(document.querySelector('[details]'), numberStar);
    makeImage(document.querySelector('[image]'), numberStar+1)
}
const done = (obj) => {
    Object.assign(data,obj.results);
    makeMenu(document.querySelector('[menu]'),changeContent);
}


// getResultsFetch(done, url);
getResultAsync(done,url);


