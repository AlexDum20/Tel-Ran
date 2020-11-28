import {productCard} from "../ProductCard/product-card.js";

export const productCategory = (category, container)=>{
    container.innerHTML = '';
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category-div');
    category.forEach(product => categoryDiv.appendChild(productCard(product)));
    return categoryDiv;
}