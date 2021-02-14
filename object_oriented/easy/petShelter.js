class Pet {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }

  printInfo() {
    console.log(`a ${this.type} named ${this.name}`);
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  addPet(pet) {
    this.pets.push(pet);
  }

  printPets() {
    console.log(`${this.name} has adopted the following pets:`);
    this.pets.forEach(pet => {
      pet.printInfo();
    });
    console.log();
  }

  numberOfPets() {
    return this.pets.length;
  }
}

class Shelter {
  constructor() {
    this.petOwners = [];
    this.pets = [];
  }

  adopt(owner, pet) {
    owner.addPet(pet);
    this.addOwner(owner);
  }

  addPet(pet) {
    if (!this.pets.includes(pet)) this.pets.push(pet);
  }

  numberOfPets() {
    return this.pets.length;
  }

  addOwner(owner) {
    if (!this.petOwners.includes(owner)) this.petOwners.push(owner);
  }

  printUnadoptedPets() {
    console.log(`The Animal Shelter has the following unadopted pets:`);
    this.pets.forEach(pet => pet.printInfo());
  }

  printAdoptions() {
    this.petOwners.forEach(owner => {
      owner.printPets();
    });
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');
let asta         = new Pet('dog', 'Asta');
let laddie       = new Pet('dog', 'Laddie');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.addPet(asta);
shelter.addPet(laddie);
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);
shelter.printUnadoptedPets();

// logs:

// P Hanson has adopted the following pets:
// a cat named Butterscotch
// a cat named Pudding
// a bearded dragon named Darwin

// B Holmes has adopted the following pets:
// a dog named Molly
// a parakeet named Sweetie Pie
// a dog named Kennedy
// a fish named Chester

// P Hanson has 3 adopted pets.
// B Holmes has 4 adopted pets.
