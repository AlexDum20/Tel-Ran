import {productCategory} from "./Components/ProductCategory/product-category.js";
import {listCategory} from "./Components/ProductListCategory/list-category.js";

const wrapCategory = document.querySelector('.category-panel');
export const wrapUnderNavBar = document.querySelector('.wrap-order');
const categoryPanel = (category) => wrapCategory.appendChild(productCategory(category,wrapCategory));

document.querySelector('.nav-bar').insertBefore(listCategory(categoryPanel),wrapUnderNavBar);
