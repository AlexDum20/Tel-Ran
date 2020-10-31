let upper = 'sasha';

const pages = document.querySelectorAll('.page');

const  setUpper = (name) => () => {
    [...pages].forEach(page => page.style.opacity = '0');
    document.querySelector('['+name+']').style.opacity = 1;
}

setUpper('sasha')();

// let shown = "";
//
// const setUpper = (name) => () => {
//     if (shown != name) {
//         if (shown) document.querySelector("[" + shown + "]").style.opacity = "0";
//         document.querySelector("[" + name + "]").style.opacity = "1";
//         shown = name;
//     }
// };
//
// setUpper("sasha")();
