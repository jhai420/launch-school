// 1. If we have a Car class and a Truck class, how can you use the Speed object as a mix-in to make them goFast? 
// How can you check whether your Car or Truck can now go fast?

const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  }
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}
Object.assign(Car.prototype, Speed);

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}

Object.assign(Truck.prototype, Truck);

// 2. In the last question, we used a mix-in named Speed that contained a goFast method. 
// We included the mix-in in the Car class and then called the goFast method from an instance of the Car class. 
// You may have noticed that the string printed when we call goFast includes the name of the type 
// of vehicle we are using. How is that done?

// The goFast calls the type of the vehicle by looking in the execution context (this) in which it is called.
// It then looks at the prototype property for the constructor property, which is the name of the class as a string.

// 3. Ben and Alyssa are working on a vehicle management system. 
// Thus far, they have created classes named Auto and Motorcycle to represent automobiles and motorcycles. 
// After they noticed that the information and calculations performed was common to both vehicle types, 
// they decided to break out the commonality into a separate class named WheeledVehicle. 
// Their code, thus far, looks like this:

class Vehicle {
  constructor(kmTravelledPerLiter, fuelCapInLiter) {
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  range() {
    return this.fuelCap *  this.fuelEfficiency;
  }
}

const WheeledVehicle = {

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  },

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  },
};

class Auto extends Vehicle {
  constructor(kmTravelledPerLiter, fuelCapInLiter, tires) {
    super(kmTravelledPerLiter, fuelCapInLiter);
    this.tires = tires;
  }
}

Object.assign(Auto.prototype, WheeledVehicle);

class Motorcycle extends Vehicle {
  constructor(kmTravelledPerLiter, fuelCapInLiter, tires) {
    super(kmTravelledPerLiter, fuelCapInLiter);
    this.tires = tires;
  }
}

Object.assign(Motorcycle.prototype, WheeledVehicle);

// Their boss now wants them to incorporate a new type of vehicle: a Catamaran.

class Catamaran extends Vehicle{
  constructor(kmTravelledPerLiter, fuelCapInLiter, propellerCount, hullCount) {
    // catamaran specific logic
    super(kmTravelledPerLiter, fuelCapInLiter);
    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
  }
}

// This new class doesn't fit well with our existing class hierarchy: 
// Catamarans don't have tires, and aren't wheeled vehicles. 
// However, we still want to share the code for tracking fuel efficiency and range. 
// Modify the class definitions and move code into a mix-in, as needed, 
// to share code between the Catamaran and the wheeled vehicle classes.

