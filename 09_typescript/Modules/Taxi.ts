import { Point } from "./Point";
import { Vehicle } from "./Vehicle";

export class Taxi implements Vehicle {

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
