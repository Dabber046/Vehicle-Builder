
import inquirer from "inquirer";
import Truck from "./Truck";
import Car from "./Car";
import Motorbike from "./Motorbike";
import Wheel from "./Wheel";

class Cli {
  vehicles: (Car | Truck | Motorbike)[];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  constructor(vehicles: (Car | Truck | Motorbike)[]) {
    this.vehicles = vehicles;
  }

  static generateVin(): string {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  async startCli(): Promise<void> {
    while (!this.exit) {
      const { action } = await inquirer.prompt([
        {
          type: "list",
          name: "action",
          message: "What would you like to do?",
          choices: [
            "Create new vehicle",
            "Select existing vehicle",
            "Perform action with selected vehicle",
            "Exit",
          ],
        },
      ]);

      switch (action) {
        case "Create new vehicle":
          await this.createVehicle();
          break;
        case "Select existing vehicle":
          await this.selectVehicle();
          break;
        case "Perform action with selected vehicle":
          await this.performVehicleAction();
          break;
        case "Exit":
          this.exit = true;
          break;
      }
    }
  }

  async createVehicle() {
    const { vehicleType } = await inquirer.prompt([
      {
        type: "list",
        name: "vehicleType",
        message: "Which type of vehicle would you like to create?",
        choices: ["Car", "Truck", "Motorbike"],
      },
    ]);

    if (vehicleType === "Car") {
      await this.createCar();
    } else if (vehicleType === "Truck") {
      await this.createTruck();
    } else {
      await this.createMotorbike();
    }
  }

  async createCar() {
    const details = await this.getCommonDetails();
    const wheels = [new Wheel(18, "Generic"), new Wheel(18, "Generic"), new Wheel(18, "Generic"), new Wheel(18, "Generic")];
    const car = new Car(Cli.generateVin(), details.color, details.make, details.model, details.year, details.mileage, details.topSpeed, wheels);
    this.vehicles.push(car);
    this.selectedVehicleVin = car.vin;
    console.log(`Created and selected new Car with VIN: ${car.vin}`);
  }

  async createTruck() {
    const details = await this.getCommonDetails();
    const { towCapacity } = await inquirer.prompt([{ type: "number", name: "towCapacity", message: "Enter tow capacity:" }]);
    const wheels = [new Wheel(20, "Goodyear"), new Wheel(20, "Goodyear"), new Wheel(20, "Goodyear"), new Wheel(20, "Goodyear")];
    const truck = new Truck(Cli.generateVin(), details.color, details.make, details.model, details.year, details.mileage, details.topSpeed, wheels, towCapacity);
    this.vehicles.push(truck);
    this.selectedVehicleVin = truck.vin;
    console.log(`Created and selected new Truck with VIN: ${truck.vin}`);
  }

  async createMotorbike() {
    const details = await this.getCommonDetails();
    const { wheelSize, brand } = await inquirer.prompt([
      { type: "number", name: "wheelSize", message: "Enter wheel size:" },
      { type: "input", name: "brand", message: "Enter wheel brand:" },
    ]);
    const wheels = [new Wheel(wheelSize, brand), new Wheel(wheelSize, brand)];
    const bike = new Motorbike(Cli.generateVin(), details.color, details.make, details.model, details.year, details.mileage, details.topSpeed, wheels);
    this.vehicles.push(bike);
    this.selectedVehicleVin = bike.vin;
    console.log(`Created and selected new Motorbike with VIN: ${bike.vin}`);
  }

  async getCommonDetails() {
    return await inquirer.prompt([
      { type: "input", name: "color", message: "Enter color:" },
      { type: "input", name: "make", message: "Enter make:" },
      { type: "input", name: "model", message: "Enter model:" },
      { type: "number", name: "year", message: "Enter year:" },
      { type: "number", name: "mileage", message: "Enter mileage:" },
      { type: "number", name: "topSpeed", message: "Enter top speed:" },
    ]);
  }

  async selectVehicle() {
    if (this.vehicles.length === 0) {
      console.log("No vehicles available.");
      return;
    }

    const { vin } = await inquirer.prompt([
      {
        type: "list",
        name: "vin",
        message: "Select a vehicle:",
        choices: this.vehicles.map(v => ({ name: `${v.make} ${v.model} (${v.year})`, value: v.vin })),
      },
    ]);

    this.selectedVehicleVin = vin;
    console.log(`Selected vehicle with VIN: ${vin}`);
  }

  async performVehicleAction() {
    const vehicle = this.vehicles.find(v => v.vin === this.selectedVehicleVin);
    if (!vehicle) {
      console.log("No vehicle selected.");
      return;
    }

    const { action } = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: "Choose an action:",
        choices: [
          "Print details",
          "Start vehicle",
          "Accelerate 5 MPH",
          "Decelerate 5 MPH",
          "Stop vehicle",
          "Turn right",
          "Turn left",
          "Reverse",
          ...(vehicle instanceof Truck ? ["Tow"] : []),
        ],
      },
    ]);

    if (action === "Print details") vehicle.printDetails();
    else if (action === "Start vehicle") vehicle.start();
    else if (action === "Accelerate 5 MPH") vehicle.accelerate(5);
    else if (action === "Decelerate 5 MPH") vehicle.decelerate(5);
    else if (action === "Stop vehicle") vehicle.stop();
    else if (action === "Turn right") vehicle.turn("right");
    else if (action === "Turn left") vehicle.turn("left");
    else if (action === "Reverse") vehicle.reverse();
    else if (action === "Tow" && vehicle instanceof Truck) vehicle.tow(vehicle);
  }
}

export default Cli;
