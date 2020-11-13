// const url = "https://open.exchangerate-api.com/v6/latest";
const url = "https://swapi.dev/api/people/";


(async () => {
    const result = await fetch(url);
    const obj = await result.json();
    console.log(obj);
})();

