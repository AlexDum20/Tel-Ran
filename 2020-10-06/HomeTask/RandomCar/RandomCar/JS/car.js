import {carConfig} from "./car-config.js";
import * as rnd from "./random.js"

export function Car(model, year, engine, ac){
    this.model = model;
    this.year = year;
    this.engine = engine;
    this.ac = ac;
}

export function randomCar(){
    return new Car(
        rnd.nextStringOfArray(carConfig.models),
        rnd.nextIntInRange(carConfig.minYear, carConfig.maxYear),
        rnd.nextFloatInRange(carConfig.minEngine, carConfig.maxEngine),
        rnd.nextBoolean(carConfig.acProbability)
    );
}


