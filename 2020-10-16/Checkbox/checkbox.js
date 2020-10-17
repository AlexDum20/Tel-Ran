let checkBoxes = document.querySelectorAll("[type='checkbox']");
let show = () => checkBoxes.forEach(cb=> console.log(cb.value, cb.checked));