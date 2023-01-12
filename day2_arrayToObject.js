let arr = ["1", "Test ", "25", "Game"];
let arr1 = [
  ["id", "1"],
  ["name", "Anmol"],
  ["age", "20"],
  ["profession", "Web Developer"],
];

// Using Object.assign() method
console.log(Object.assign({}, arr));

// Using Spread operator
console.log({ ...arr });

// Using Object.fromEntries() method
console.log(Object.fromEntries(arr1));
