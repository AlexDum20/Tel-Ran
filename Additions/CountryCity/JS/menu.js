import {countries} from "./data.js";
import {makeContent} from "./content.js";

export let makeMenu = (menu) => {

    let ol = document.createElement('ol');
    menu.appendChild(ol);

    countries.forEach((item) => {
        let countryWrap = document.createElement('li');
        let country = document.createElement('span');
        setParam(country, item);
        country.addEventListener('click', (e) => {
            makeContent();
            countries.find(item => item.id == e.target.id).cities.forEach((e) =>
                document.querySelector('#' + e['id']).classList.toggle('closed'));
        })
        let ul = document.createElement('ul');
        countryWrap.appendChild(country);
        countryWrap.appendChild(ul);
        item['cities'].forEach((_item) => {
            let city = document.createElement('li');
            setParam(city, _item);
            city.classList.add('closed');
            city.addEventListener('click', (elem) => {
                makeContent(`url("./pictures/${elem.target.id}.jpg")`, elem.target.innerText);
            })
            ul.appendChild(city);
        })
        ol.appendChild(countryWrap);
    })
}
let setParam = (object, elem) => {
    object.id = elem['id'];
    object.innerText = elem['title']
};