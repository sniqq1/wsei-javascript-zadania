// zadanie 1 
let a = true;
let b = false;
console.log(a==b);

// zadanie 2
let a = 9;
let b= 4
let moduloResult = 0;
moduloResult = a%b;
console.log(moduloResult);

//zadanie 3
let a = 'alicja';
let b = 'banicja';
let stringsResult ='';
stringsResult = a +' '+ b;
console.log(stringsResult);

//zadanie 4
var someNumber = 425;
var someString = "425";
console.log(someNumber==someString); //true
console.log(someNumber===someString); // false

// przy == gdy jest inny typ js próbuje go przekształcić
// przy === muszą być tego samego typu

//zadanie5
var counter = 30;
console.log(++counter);
console.log(--counter);
// jest różnica między ++counter a counter++

//zadanie 6
let a = 5;
let b = 3;
let result = null;
result = a>b;
console.log(result);
