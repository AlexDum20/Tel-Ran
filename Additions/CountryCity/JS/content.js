import {content} from "./root.js";

export let makeContent = (background = '', innerText = '') => {
    content.innerHTML = '';
    if (background && innerText) {
        let pic = document.createElement('div');
        pic.classList.add('picter');
        pic.style.background = background;
        let picName = document.createElement('div');
        picName.innerText = innerText;
        picName.classList.add('pic-name');
        content.appendChild(picName);
        content.appendChild(pic);
    }
}
