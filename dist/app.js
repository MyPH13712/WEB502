"use strict";
const person = {
    id: 1,
    name: "Dat",
    age: 20
};
const persons = [
    { id: 1, name: "Dat", age: 20, status: true },
    { id: 2, name: "Kien", age: 22, status: false },
];
const show = () => {
    console.log();
};
const arrString = ["1", "2", "3"];
const arrNumber = [1, 2, 3];
console.log(person.name);
const DemoApp = (props) => {
    console.log(props);
};
DemoApp({ message: "Hello" });
