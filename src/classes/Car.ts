
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Car extends Vehicle {
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    mileage: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    super(vin, color, make, model, year, mileage, topSpeed, wheels);
  }
}

export default Car;
