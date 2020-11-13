const url = "https://open.exchangerate-api.com/v6/latest";
let getRequest = (url)=>{
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', ()=>{
            if (xhr.readyState !=4) return;
            if (xhr.status == 200) resolve(JSON.parse(xhr.responseText));
            else reject(xhr);
        })
        xhr.open('GET', url);
        xhr.send();
    })
};

getRequest(url)
.then(res => console.log(res.rates), err=>console.log(err));