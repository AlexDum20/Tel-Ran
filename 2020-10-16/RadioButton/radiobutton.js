let radioButtons = document.querySelectorAll("[name='city']");
//-------
// let show = () => console.log(radioButtons.reduce((city, rb) => rb.checked ? city = rb.value : city, "no choice"));
//------
let show = () => console.log([...radioButtons].reduce((city, rb) => rb.checked ? city = rb.value : city, "no choice"));
// let show = () => console.log(Array.from(radioButtons).reduce((city, rb) => rb.checked ? city = rb.value : city, "no choice"));
// let show = () => console.log(
//     [].reduce.call(radioButtons,(city, rb) => rb.checked ? city = rb.value : city, "no choice")
// );
// let show = () => console.log(
//     Array.prototype.reduce.call(radioButtons, (city, rb) => rb.checked ? city = rb.value : city, "no choice")
// );
