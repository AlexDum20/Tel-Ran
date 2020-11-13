const person = {
    firstName: "Masha",
    lastName: "Ivanova"
}

const url = "http://localhost:8081";

const  urlReq = url + "/hello?" + [...Object.keys(person)].map(key=>key + '='+person[key]).join("&");
console.log(urlReq);

const xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", ()=>{
    if (xhr.readyState!=4) return ;
    console.log(xhr.responseText);
});
xhr.open("GET", urlReq);
xhr.send();