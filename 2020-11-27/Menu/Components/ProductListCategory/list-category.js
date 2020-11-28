import {listCategories} from "../../Content/content-menu.js";

export const listCategory = (showProduct) =>{
    const listMenuCategories = document.createElement('div');
    listMenuCategories.classList.add('list-menu');

    listCategories.forEach(item =>{
        const categoryLi = document.createElement('li');
        categoryLi.innerText = Object.keys(item)[0];
        listMenuCategories.appendChild(categoryLi);
        if (categoryLi === listMenuCategories.firstElementChild) {
            categoryLi.classList.add('active');
            showProduct(item[Object.keys(item)[0]]);
        }
        categoryLi.addEventListener('click', (e)=> {
            const category = e.target.innerText;
            listMenuCategories.querySelectorAll('li')
                .forEach(item => item.classList.remove('active'));
            e.target.classList.add('active');
            showProduct(listCategories.find(item => Object.keys(item)[0]==category)[category])
        });
    });
    return listMenuCategories;
}