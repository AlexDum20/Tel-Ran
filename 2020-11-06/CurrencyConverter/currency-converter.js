const url = "https://open.exchangerate-api.com/v6/latest";
const xhr = new XMLHttpRequest();
let data;

/*
1 - created
2 - sent
3 - response begins to come
4 - response completely received
----------------------------------------------------------------------------
0 -	UNSENT	Client has been created. open() not called yet.
1 -	OPENED	open() has been called.
2 -	HEADERS_RECEIVED	send() has been called, and headers and status are available.
3 -	LOADING	Downloading; responseText holds partial data.
4 -	DONE	The operation is complete.
*/
xhr.addEventListener('readystatechange', ()=>{
    if (xhr.readyState !=4) return;
    // console.log(xhr.responseText);
    // console.log(JSON.parse(xhr.responseText));
    // console.log(JSON.parse(xhr.responseText).rates);
    data = Object.entries(JSON.parse(xhr.responseText).rates);

})
xhr.open("GET", url);
xhr.send();
console.log(data);
