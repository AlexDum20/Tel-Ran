import {data} from "../Context/context.js";
import {getResultsFetch, getRes} from "../HTTP/http-service.js";

export let makeContent = (content,numberStar) => {
    content.innerHTML = '';
    let title = document.createElement('strong');
    content.innerText = data[numberStar].name;
    title.style.fontSize = '3vmin';
    const result = (answer) => {
        title.innerHTML =
            "<p>Height: "+data[numberStar].height+"</p>" +
            "<p>Mass: "+data[numberStar].mass+"</p>" +
            "<p>Hair color: "+data[numberStar].hair_color+"</p>" +
            "<p>Skin color: "+data[numberStar].skin_color+"</p>" +
            "<p>Eye color: "+data[numberStar].eye_color+"</p>" +
            "<p>Birth year: "+data[numberStar].birth_year+"</p>" +
            "<p>Gender: "+data[numberStar].gender+"</p>" +
            "<p>Homeworld: "+answer.name+"</p>";
    };
    content.appendChild(title);
    getResultsFetch(result,data[numberStar].homeworld);
    console.log(getRes(data[numberStar].homeworld));
}
