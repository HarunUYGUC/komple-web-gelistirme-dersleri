interface Point {
    x: number;
    y: number;
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    // Taxi'ye özel özellikler eklenebilir. Örneğin, taksi plaka numarası, sürücü adı gibi özellikler eklenebilir.
    currentLocation!: Point;

    travelTo(point: Point): void {
        console.log(`Traveling to ${point.x}, ${point.y}`);
        this.currentLocation = point;
    }
}

class Bus implements Vehicle {
    // Otobüs'e özel özellikler eklenebilir. Örneğin, otobüs numarası, şoför adı gibi özellikler eklenebilir.
    currentLocation!: Point;

    travelTo(point: Point): void {
        console.log(`Traveling to ${point.x}, ${point.y}`);
        this.currentLocation = point;
    }
}

let taxi_1: Taxi = new Taxi();
taxi_1.travelTo({x: 1, y: 2});
taxi_1.currentLocation = {x: 3, y: 4};

console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);

export {};
