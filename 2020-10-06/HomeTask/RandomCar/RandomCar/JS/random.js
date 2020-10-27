let alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'];

export function nextInt(bound){
    return ~~(bound*Math.random());
}

export function nextIntInRange(min, max){
    return min +(~~((max - min)*Math.random()));
}

export function nextFloatInRange(min, max){
    return min + (max-min)*Math.random();
}

export function nextBoolean(trueProbability=0.5){
    return Math.random() < trueProbability;
}

export function nextStringOfArray(arr){
    return arr[nextInt(arr.length)];
}

export function nextString(length){
    let result = '';
    for (let i=0; i<length; i++) result = result+alphabet[nextInt(62)];
    return result;
}

export function shuffle(arr){
    for (let bound = arr.length; bound > 1;){
        let index = nextInt(bound);
        [arr[index], arr[bound]] = [arr[bound], arr[index]];
    }
}





