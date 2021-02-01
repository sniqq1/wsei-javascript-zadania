// zadanie 1
const car = {
  name: 'Ford',
  color: 'black',
  wheels: 4,
}
console.log(car.name);
console.log(car.color);
console.log(car.wheels);

// zadanie2
const car = {
  name: 'Ford',
  color: 'black',
  wheels: 4,

   rename: function(Name){
     this.name = Name;
   }
}
car.rename('Audi');
console.log(car.name);

// zadanie3
const obj ={
  sum: 0,
  tablica: function(arr) {
    let result = 0;
    arr.forEach((element) => {
      result += element;
  });
  this.sum = result;
}
}
obj.tablica([1,2,3,4,5]);
console.log(obj.sum);
