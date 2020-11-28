const buttons = document.querySelector("[buttons]");
const picture = document.querySelector("[picture]");
// const wrap = document.querySelector('.wrap');

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



// const setLayout = () => {
//     if (window.innerWidth > threshold){
//
//         Object.assign(text.style, {
//             position: "absolute",
//             top: "0px",
//             left: "0px",
//             width: "80vw"
//         });
//         Object.assign(picture.style, {
//             position: "absolute",
//             top: "0px",
//             left: "80vw",
//             width: "20vw"
//         })
//     }
//     else{
//         Object.assign(text.style, {
//             position: "relative",
//             width: "100vw"
//         });
//         Object.assign(picture.style, {
//             position: "relative",
//             width: "100vw",
//             left: "0px"
//         });
//     }
// };
//
// window.addEventListener("resize", setLayout);
//
// setLayout();


