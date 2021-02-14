class Vehicle {
  startEngine() {
    return 'Ready to go!';
  }
}

class Truck extends Vehicle {
  startEngine(speed) {
    console.log(`${super.startEngine()} Drive ${speed}, please!`);
  }
}

let truck = new Truck();
console.log(truck.startEngine('fast'));

// Expected output:

// Ready to go! Drive fast, please!
