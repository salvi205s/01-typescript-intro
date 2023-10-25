import { Product, taxCalculation } from "./06-function-destructuring";

const shoppingCar: Product[] = [
  { description: "Nokia", price: 100 },
  { description: "IPad", price: 150 },
];

const [total, tax] = taxCalculation({ products: shoppingCar, tax: 0.15 });

console.log("total: ", total);
console.log("tax: ", tax);

export {};
