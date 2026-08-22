class Taxi {
    // Taxi'ye özel özellikler eklenebilir. Örneğin, taksi plaka numarası, sürücü adı gibi özellikler eklenebilir.
    currentLocation;
    travelTo(point) {
        console.log(`Traveling to ${point.x}, ${point.y}`);
        this.currentLocation = point;
    }
}
class Bus {
    // Otobüs'e özel özellikler eklenebilir. Örneğin, otobüs numarası, şoför adı gibi özellikler eklenebilir.
    currentLocation;
    travelTo(point) {
        console.log(`Traveling to ${point.x}, ${point.y}`);
        this.currentLocation = point;
    }
}
export {};
