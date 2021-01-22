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
