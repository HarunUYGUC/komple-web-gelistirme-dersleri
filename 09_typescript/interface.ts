// JavaScript'de interface kavramı yoktur. TypeScript'de interface kavramı vardır. Interface, bir nesnenin yapısını tanımlamak için kullanılır. Interface, bir nesnenin sahip olması gereken özellikleri ve metodları tanımlar. Interface, bir nesnenin tipini belirlemek için kullanılır.

interface Point {
    x: number;
    y: number;
}

interface Passenger {
    name: string;
    phone: string;
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
    getDistance(pointA: Point, pointB: Point): number;
    addPassenger(passenger: Passenger): void;
    removePassenger(passenger: Passenger): void;
}

// let travelTo = (point: Point) => {
//     console.log(`Traveling to ${point.x}, ${point.y}`);
// }

// let getDistance = (pointA: Point, pointB: Point) => {
//     return Math.sqrt((pointB.x - pointA.x) ** 2 + (pointB.y - pointA.y) ** 2);
// }

// travelTo({
//     x: 1,
//     y: 2
// });
