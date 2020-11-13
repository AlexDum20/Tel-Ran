

export let makeImage = (content, numImage) =>{
    content.innerHTML = '';
    let image = document.createElement('img');
    image.src = `https://starwars-visualguide.com/assets/img/characters/${numImage}.jpg`;
    content.appendChild(image);
}