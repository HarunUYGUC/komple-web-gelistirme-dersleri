import { Point } from "./Point";
import { Vehicle } from "./Vehicle";

export class Bus implements Vehicle {
    travelTo(point: Point): void {
        throw new Error("Method not implemented.");
    }
}
