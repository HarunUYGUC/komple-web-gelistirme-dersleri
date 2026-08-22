interface Point {
    x: number;
    y: number;
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {

    color?: string;

    constructor(location: Point, color?: string) {
        this.currentLocation = location;
        this.color = color;
    }

    currentLocation!: Point;

    travelTo(point: Point): void {
        console.log(`Traveling to ${point.x}, ${point.y}`);
    }
}

let taxi_1: Taxi = new Taxi({x: 3, y: 4}, "red");
taxi_1.travelTo({x: 1, y: 2});

let taxi_2: Taxi = new Taxi({x: 5, y: 6});

console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
console.log(taxi_1.color);

console.log(taxi_2.currentLocation.x);
console.log(taxi_2.currentLocation.y);
console.log(taxi_2.color);

export {};
