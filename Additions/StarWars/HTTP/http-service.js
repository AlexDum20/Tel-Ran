const url = "https://swapi.dev/api/people/";

export const getResultsFetch = (done,url) =>{
    fetch(url)
        .then(result => result.json())
        .then(json=> done(json));
}

export const getResultAsync = async (done) => {
    done((await (await fetch(url)).json()));
};