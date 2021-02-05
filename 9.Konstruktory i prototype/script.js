// zadanie 1
class Person {
  constructor(imie, nazwisko, wiek, kraj, miasto, jezyk) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wiek = wiek;
    this.kraj = kraj;
    this.miasto = miasto;
    this.jezyk = jezyk;
  } 
  zmienWiek(wiek) {
    this.wiek = wiek;f
  }
  zmienMiasto(miasto) {
    this.miasto = miasto;
  }
}
  const a = new Person('Patryk','Wojtaszek',28,'Polska','Kraków','polski');
const b = new Person('Adam','Małysz',60,'Polska','Wisła','polski');
const c = new Person('Donald','Trump',80,'USA','Waszyngton','angielski');
const d = new Person('Jacek','Sasin',50,'Polska','Warszawa','polski');
const e = new Person('Natalia','Oreiro',18,'Kolumbia','Montevideo','hiszpański');

e.zmienWiek(50);
c.zmienMiasto('sybir');
d.zmienMiasto('Tarnów');
console.log(c);
console.log(d);
console.log(e);

//zadanie 2
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a,b){
    if(b == 0){
        console.log("Cannot divide by zero!");
        return;
    }    
    return a / b;
}

function Calculator(){
    this.memory = [];
    this.showMemory = () => console.log(this.memory);
    this.resetMemory = () => this.memory = [];
    this.calculate = (a,b,operation) => {
        this.memory.push(operation(a,b));
        return operation(a,b);
    }
}

let calc = new Calculator();
let kalk = new Calculator();

console.log(calc.calculate(5, 10, add));
console.log(calc.calculate(5, 23, divide));
console.log(calc.memory);

console.log(kalk.calculate(5.3, 10, multiply));
console.log(kalk.calculate(15, 23, subtract));
console.log(kalk.memory);

calc.showMemory();
kalk.resetMemory();
console.log(kalk.showMemory());
