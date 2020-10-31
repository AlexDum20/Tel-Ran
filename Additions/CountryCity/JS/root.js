import {makeMenu} from "./menu.js";

export let content = document.createElement('div');
content.classList.add('content')
document.querySelector('body').appendChild(content);
export let menu = document.createElement('div');
menu.classList.add('menu');
document.querySelector('body').appendChild(menu);

makeMenu(menu);

