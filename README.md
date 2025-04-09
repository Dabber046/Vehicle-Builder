# 🚗 Vehicle Builder CLI App

A command-line application that allows users to create, manage, and interact with various types of vehicles — including **Cars**, **Trucks**, and **Motorbikes**.

This project demonstrates understanding of object-oriented principles, CLI input handling, dynamic object instantiation, and modular TypeScript development.

## ✅ Features

- Create new **Cars**, **Trucks**, and **Motorbikes**
- Prompted for custom details for each vehicle
- Unique actions like:
  - `drive()`, `accelerate()`, `decelerate()`, `stop()`, `turn()`, `reverse()`
  - `tow()` available exclusively for `Truck`
- VIN-based selection of existing vehicles
- Easy CLI-based interaction using `Inquirer`

---

## 🧠 Tech Stack

- Node.js
- TypeScript
- Inquirer.js
- Object-Oriented Programming (OOP)

---

## 📁 Folder Structure

Develop/ ├── src/ │ ├── index.ts # Entry point │ ├── classes/ │ │ ├── Vehicle.ts # Base vehicle class │ │ ├── Car.ts # Car class │ │ ├── Truck.ts # Truck class (towing logic) │ │ ├── Motorbike.ts # Motorbike class │ │ ├── Wheel.ts # Wheel class │ │ └── Cli.ts # Main CLI interaction handler │ └── interfaces/ │ ├── Driveable.ts │ └── AbleToTow.ts ├── dist/ # Auto-generated JS output (after build) ├── tsconfig.json # TypeScript compiler config ├── package.json # Project scripts & dependencies

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1. 📦 Install dependencies

```bash
npm install
2. 🏗 Build the app
bash
Copy
Edit
npm run build
3. ▶️ Start the CLI
bash
Copy
Edit
npm start
💡 Optional: Suppress warnings during video:

Linux/macOS: NODE_NO_WARNINGS=1 npm start

Windows PowerShell: $env:NODE_NO_WARNINGS=1; npm start

🧪 Example CLI Flow
vbnet
Copy
Edit
? What would you like to do?
❯ Create new vehicle
  Select existing vehicle
  Perform action with selected vehicle
  Exit

? Which type of vehicle would you like to create?
❯ Car | Truck | Motorbike

... (prompt for details like make, model, year, etc.)
👤 Author
Jared Mindock
📧 jjmin94@gmail.com

