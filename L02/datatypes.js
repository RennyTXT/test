const people = ["Aaron","mel","John"];
const one = 1;
const str = "Hello Wrld";
const b = true;
const employee = {
    fristName: "Thanakorn",
    lastName: "Thanabawonpon",
};
function sayHello(person){
    console.log("Hello "+ person.fristName);
}

console.log(typeof people);
console.log(typeof sayHello)
console.log(employee instanceof Array);
sayHello(employee);