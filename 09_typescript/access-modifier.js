class Taxi {
    location;
    color;
    constructor(location, color) {
        this.location = location;
        this.color = color;
    }
    travelTo(point) {
        console.log(`Traveling from ${this.location?.x}, ${this.location?.y} to ${point.x}, ${point.y}`);
    }
}
let taxi_1 = new Taxi({ x: 3, y: 4 });
taxi_1.travelTo({ x: 1, y: 2 });
export {};
