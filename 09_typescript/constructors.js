class Taxi {
    color;
    constructor(location, color) {
        this.currentLocation = location;
        this.color = color;
    }
    currentLocation;
    travelTo(point) {
        console.log(`Traveling to ${point.x}, ${point.y}`);
    }
}
let taxi_1 = new Taxi({ x: 3, y: 4 }, "red");
taxi_1.travelTo({ x: 1, y: 2 });
let taxi_2 = new Taxi({ x: 5, y: 6 });
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
console.log(taxi_1.color);
console.log(taxi_2.currentLocation.x);
console.log(taxi_2.currentLocation.y);
console.log(taxi_2.color);
export {};
