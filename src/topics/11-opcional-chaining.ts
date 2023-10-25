export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Fernando",
};

const passenger2: Passenger = {
  name: "Melissa",
  children: ["Maria", "Juan"],
};

const printChildren = (passenger: Passenger): number => {
  const howManyChildren = passenger.children?.length || 0;

  console.log(passenger.name, howManyChildren);

  return howManyChildren;
};

printChildren(passenger1);
printChildren(passenger2);
