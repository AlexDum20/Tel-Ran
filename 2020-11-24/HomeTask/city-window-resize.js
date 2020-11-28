const buttons = document.querySelector("[buttons]");
const picture = document.querySelector("[picture]");

const cities = ['New-York','Paris','Berlin','Madrid','Shanghai'];

const imgSrc = city=>`./IMG/${city}.jpg`;
const cityImg = document.createElement('img');
cityImg.src = imgSrc(cities[1]);
picture.appendChild(cityImg);

cities.forEach(item=> {
    const but = document.createElement('button');
    but.innerText=item;
    but.addEventListener('click',e=>cityImg.src = imgSrc(e.target.innerText));
    buttons.appendChild(but);
});
