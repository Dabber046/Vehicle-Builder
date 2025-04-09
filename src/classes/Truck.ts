
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';
import Car from './Car.js';
import Motorbike from './Motorbike.js';

class Truck extends Vehicle implements AbleToTow {
  towCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    mileage: number,
    topSpeed: number,
    wheels: Wheel[],
    towCapacity: number
  ) {
    super(vin, color, make, model, year, mileage, topSpeed, wheels);
    this.towCapacity = towCapacity;
  }

  tow(vehicle: Truck | Motorbike | Car): void {
    console.log(
      `${this.make} ${this.model} is towing ${vehicle.make} ${vehicle.model}...`
    );
  }
}

export default Truck;
