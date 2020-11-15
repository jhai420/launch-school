class Chef {
  prepare(wedding) {
    this.prepareFood(wedding.guests);
  }

  prepareFood(guests) {
    console.log("Prepared food for guests");
  }
}

class Decorator {
  prepare(wedding) {
    this.decoratePlace(wedding.flowers);
  }

  decoratePlace(flowers) {
    console.log("Decorated wedding venue");
  }
}

class Musician {
  prepare(wedding) {
    this.preparePerformance(wedding.songs);
  }

  preparePerformance(songs) {
    console.log("Prepared performance")
  }
}

class Wedding {
  constructor(guests, flowers, songs) {
    this.guests = guests;
    this.flowers = flowers;
    this.songs = songs;
  }

  prepare(preparers) {
    preparers.forEach(preparer => {
      preparer.prepare(this);
    });
  }
}

let wed = new Wedding();
let preparers = [new Chef(), new Decorator(), new Musician()];
wed.prepare(preparers);

function Animal() {}
function Cat() {}
Cat.prototype = new Animal();
let fluffy = new Cat();
console.log(fluffy instanceof Animal);