import {productListOrder} from "../../Content/content-menu.js";
import {productOrder} from "../ProductOrder/product-order.js";


const arrAdd = (arr, item) => arr.push({
    name: item.children[0].innerText,
    price: item.children[1].innerText,
    count: 1
});

const arrRemove = (arr, item) => arr.splice(arr.indexOf(item), 1)


export const productCard = (product) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="card-image-wrap">
            <img class="card-image" src="${product.imgSrc}"/>
        </div>
        <div class="card-change-wrap">
            <div class="change-count" minusCount>-</div>
            <div class="change-count" plusCount>+</div>
        </div>
        <div class="data-wrap">
            <div class="card-item">${product.name}</div>
            <div class="card-item">${product.price.toFixed(2)}</div>
        </div>    
    `;
    card.querySelector('.card-change-wrap').addEventListener('click', (e) => {
        const target = e.composedPath()
            .filter(item => item.className == 'card')[0]
            .lastElementChild;
        const currentProduct = productListOrder.find(item => item.name === target.children[0].innerText);
        currentProduct ? (e.target.innerText === '+' ? currentProduct.count += 1 :
            (currentProduct.count === 1 ? arrRemove(productListOrder, currentProduct) :
                currentProduct.count -= 1)) :
            (e.target.innerText === '+' ? arrAdd(productListOrder, target) : '');
        productOrder(document.querySelector('.wrap-order'));
    });
    return card;
}