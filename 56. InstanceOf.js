
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log('woof');
  }
}

class GermanShepherd extends Dog {
  constructor(name) {
    super(name);
  }

  bark() {
    console.log('woof woof');
  }
}

const dog = new GermanShepherd('Rex');

const isInstanceOf = (obj, cls) => {
  while (obj) {
    if (obj.__proto__ === cls.prototype) {
      return true;
    }
    obj = obj.__proto__;
  }
  return false;
}

console.log(isInstanceOf(dog,Dog));
