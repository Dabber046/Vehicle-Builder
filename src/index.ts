
// import classes
import Truck from "./classes/Truck";
import Car from "./classes/Car";
import Motorbike from "./classes/Motorbike";
import Wheel from "./classes/Wheel";
import Cli from "./classes/Cli";

// create an array of vehicles
const vehicles = [];

// Create a Truck
const truck1 = new Truck(
  Cli.generateVin(),
  "red",
  "Ford",
  "F-150",
  2021,
  5000,
  120,
  [new Wheel(20, "Goodyear"), new Wheel(20, "Goodyear"), new Wheel(20, "Goodyear"), new Wheel(20, "Goodyear")],
  10000
);

// Create a Car (default wheels)
const car1 = new Car(
  Cli.generateVin(),
  "blue",
  "Toyota",
  "Camry",
  2021,
  3000,
  130,
  [new Wheel(18, "Bridgestone"), new Wheel(18, "Bridgestone"), new Wheel(18, "Bridgestone"), new Wheel(18, "Bridgestone")]
);

// Create a Motorbike
const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
const motorbike1 = new Motorbike(
  Cli.generateVin(),
  "black",
  "Harley Davidson",
  "Sportster",
  2021,
  500,
  125,
  motorbike1Wheels
);

// push vehicles to array
vehicles.push(truck1);
vehicles.push(car1);
vehicles.push(motorbike1);

// create a new instance of the Cli class
const cli = new Cli(vehicles);

// start the cli
cli.startCli();
