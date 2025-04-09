
import Wheel from './Wheel.js';
import Driveable from '../interfaces/Driveable.js';

class Vehicle implements Driveable {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  mileage: number;
  topSpeed: number;
  wheels: Wheel[];

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
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
  }

  drive(): void {
    console.log(`${this.make} ${this.model} is driving at ${this.topSpeed} km/h.`);
  }
}

export default Vehicle;
