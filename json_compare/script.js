let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

// Convert objects to JSON strings
let obj1String = JSON.stringify(obj1);
let obj2String = JSON.stringify(obj2);

// Sort properties within strings
obj1String = JSON.stringify(JSON.parse(obj1String), Object.keys(obj1).sort());
obj2String = JSON.stringify(JSON.parse(obj2String), Object.keys(obj2).sort());

// Compare sorted strings
const isEqual = obj1String === obj2String;

console.log(isEqual); // Output: true
