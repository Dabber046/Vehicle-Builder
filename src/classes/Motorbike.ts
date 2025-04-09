
import Vehicle from './Vehicle';
import Wheel from './Wheel';

class Motorbike extends Vehicle {
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

  wheelie(): void {
    console.log(`${this.make} ${this.model} pops a wheelie!`);
  }
}

export default Motorbike;
