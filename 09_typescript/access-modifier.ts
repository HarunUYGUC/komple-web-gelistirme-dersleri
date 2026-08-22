interface Point {
    x: number;
    y: number;
}

interface Vehicle {
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {

    constructor(private location?: Point, private color?: string) { }

    travelTo(point: Point): void {
        console.log(`Traveling from ${this.location?.x}, ${this.location?.y} to ${point.x}, ${point.y}`);
    }
}

let taxi_1: Taxi = new Taxi({x: 3, y: 4});
taxi_1.travelTo({x: 1, y: 2});

export {};
