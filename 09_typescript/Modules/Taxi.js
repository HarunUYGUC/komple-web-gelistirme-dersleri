export class Taxi {
    _location;
    _color;
    constructor(_location, _color) {
        this._location = _location;
        this._color = _color;
    }
    travelTo(point) {
        console.log(`Traveling from ${this._location?.x}, ${this._location?.y} to ${point.x}, ${point.y}`);
    }
    get location() {
        return this._location;
    }
    set location(value) {
        if (value.x < 0 || value.y < 0) {
            throw new Error("Location coordinates must be non-negative.");
        }
        this._location = value;
    }
}
