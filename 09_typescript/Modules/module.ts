import {Taxi} from "./Taxi";

let taxi_1: Taxi = new Taxi({x: 3, y: 4});
taxi_1.travelTo({x: 1, y: 2});

let currentLocation = taxi_1.location;
taxi_1.location = {x: 5, y: 6};

export {};
