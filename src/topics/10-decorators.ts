function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
export class superClass {
  myProperty: string = "Abc123";

  print() {
    console.log("Hola mundo");
  }
}

console.log(superClass);

const myClass = new superClass();

console.log(myClass);
