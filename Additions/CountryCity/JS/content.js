import {content} from "./root.js";

export let makeContent = (background = '', innerText = '') => {
    content.innerHTML = '';
    let pic = document.createElement('div');
    pic.classList.add('picture');
    let picName = document.createElement('div');
    picName.classList.add('pic-name');
    content.appendChild(picName);
    content.appendChild(pic);

    (background && innerText) ? (pic.style.background = background, picName.innerText = innerText) : 0;
}
