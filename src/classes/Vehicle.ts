
import Wheel from './Wheel';
import Driveable from '../interfaces/Driveable';

class Vehicle implements Driveable {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  mileage: number;
  topSpeed: number;
  wheels: Wheel[];
  currentSpeed: number;

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
    this.currentSpeed = 0;
  }

  drive(): void {
    console.log(`${this.make} ${this.model} is driving at ${this.currentSpeed} km/h.`);
  }

  printDetails(): void {
    console.log(`--- Vehicle Details ---`);
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Color: ${this.color}`);
    console.log(`Mileage: ${this.mileage}`);
    console.log(`Top Speed: ${this.topSpeed} km/h`);
    console.log(`Wheels: ${this.wheels.map(w => `${w.brand} ${w.size}in`).join(', ')}`);
    console.log(`Current Speed: ${this.currentSpeed} km/h`);
  }

  start(): void {
    this.currentSpeed = 10;
    console.log(`${this.make} ${this.model} started and is moving at ${this.currentSpeed} km/h.`);
  }

  accelerate(amount: number): void {
    this.currentSpeed = Math.min(this.currentSpeed + amount, this.topSpeed);
    console.log(`${this.make} ${this.model} accelerated to ${this.currentSpeed} km/h.`);
  }

  decelerate(amount: number): void {
    this.currentSpeed = Math.max(this.currentSpeed - amount, 0);
    console.log(`${this.make} ${this.model} decelerated to ${this.currentSpeed} km/h.`);
  }

  stop(): void {
    this.currentSpeed = 0;
    console.log(`${this.make} ${this.model} has stopped.`);
  }

  turn(direction: 'left' | 'right'): void {
    console.log(`${this.make} ${this.model} is turning ${direction}.`);
  }

  reverse(): void {
    console.log(`${this.make} ${this.model} is reversing.`);
  }
}

export default Vehicle;
