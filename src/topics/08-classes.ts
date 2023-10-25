export class Person {
  constructor(public name: string, private address: string) {}
}

// export class Hero extends Person {
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string
//   ) {
//     super(realName, "tower of the avengers");
//   }
// }

export class Hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {
    this.person = new Person(realName, "tower of the avengers");
  }
}

const person = new Person("Tony Start", "New York");
const ironman = new Hero("Ironman", 45, "Tony", person);

console.log(ironman);
