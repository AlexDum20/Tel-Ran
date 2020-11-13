// const url = "https://open.exchangerate-api.com/v6/latest";
const url = "https://swapi.dev/api/people/";
// const url = "http://swapi.dev/api/planets/1/";

fetch(url)
    .then(result => result.json())
    .then(json=> console.log(json));
    // .then(json=> console.log(Object.keys(json.results[0]).slice(0,9)));


