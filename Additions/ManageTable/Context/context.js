export let data = [];
export const setData = arr => {data = arr; setHeaders(arr)};

export let headers = [];
export const setHeaders = arr => headers = [...Object.keys(arr[0])];

export let carCurrent = {};
export const setCarCurrent = current => carCurrent = current;

export let markedCars = [];
export const setMarkedCars = arr => markedCars = arr;

export let mode = '';
export const setMode = current => mode = current;