// zadanie 1
var a = [1,2,3,"four","five",6];

// zadanie 2

console.log(a[0],a[1]);
console.log(a[a.length-1]);
console.log(a);
console.log(a.filter((x,i) => i%2))
console.log(a.filter((x,i) =>{
  return typeof(x)=="string"
}))
console.log(a.filter((x,i) => {
  return typeof(x)=="number"
}))

// zadanie 3
var a = [1,2,3,4,5,10,20,22,34];
let sum=0;
for (let i = 0; i<a.length; i++) {
  sum += a[i];
}
console.log(sum);

let min=0;
for (let i = 0; i<a.length; i++) {
  min -= a[i];
}
console.log(min);

let sum=0;
for (let i = 0; i<a.length; i++) {
  sum += a[i];
}
let sr = sum/a.length;
console.log(sr);

for (let i = 0; i<a.length; i++) {
  if (a[i] %2==0) console.log(a[i]);
}

for (let i = 0; i<a.length; i++) {
  if (a[i] %2!=0) console.log(a[i]);
}

let temp= Number.MIN_VALUE;
for (let i = 0; i<a.length; i++) {
 if(a[i] > temp) temp=a[i]; 
}
console.log(temp);

var a = [1,2,3,4,5,10,20,34,22];
let temp= Number.MAX_VALUE;
for (let i = 0; i<a.length; i++) {
 if(a[i] < temp) temp=a[i]; 
}
console.log(temp);


console.log(a.reverse());

