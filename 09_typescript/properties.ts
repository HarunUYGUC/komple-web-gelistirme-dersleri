interface Point {
    x: number;
    y: number;
}

interface Vehicle {
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {

    constructor(private _location: Point, private _color?: string) { }

    travelTo(point: Point): void {
        console.log(`Traveling from ${this._location?.x}, ${this._location?.y} to ${point.x}, ${point.y}`);
    }

    get location() {
        return this._location;
    }

    set location(value: Point) {
        if (value.x < 0 || value.y < 0) {
            throw new Error("Location coordinates must be non-negative.");
        }

        this._location = value;
    }
}

let taxi_1: Taxi = new Taxi({x: 3, y: 4});
taxi_1.travelTo({x: 1, y: 2});

let currentLocation = taxi_1.location;
taxi_1.location = {x: 5, y: 6};

export {};
