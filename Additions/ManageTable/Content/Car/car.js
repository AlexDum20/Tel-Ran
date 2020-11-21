const randomInRange = (min, max) => min + (~~(Math.random()*(max-min)));
const randomCapital = () => String.fromCharCode(65+randomInRange(0,26))
export const randomRegNumber = () => randomInRange(10,100) + "-" + randomInRange(100,1000) + "-" + randomInRange(10,100)+ " " +
                              randomCapital()+randomCapital();


export const MODELS = ["Ford", "Toyota", "Kia", "Hundai", "Audi"];
const MIN_YEAR = 2000;
const MAX_YEAR = 2021;
const MIN_ENGINE = 1.3;
const MAX_ENGINE = 2.5;
const AC_PROBABILITY = 0.7;

export function Car(regNumber, model, year, engine, ac){
    this.reg_number = regNumber;
    this.model = model;
    this.year = year;
    this.engine = engine;
    this.ac = ac;
}

export const randomCar = () => {
    const regNumber = randomRegNumber();
    const model = MODELS[randomInRange(0, MODELS.length)];
    const year = randomInRange(MIN_YEAR, MAX_YEAR);
    const engine = parseFloat((MIN_ENGINE + Math.random()*(MAX_ENGINE - MIN_ENGINE)).toFixed(2));
    const ac = Math.random() < AC_PROBABILITY;

    return new Car(regNumber, model, year, engine, ac);
};

export const garage = (n) => {
    const result = [];
    for (let i = 0; i < n; i++)result.push(randomCar());
    return result;
}

