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

//zadanie4
const car = {
  name: 'Ford',
  color: 'black',
  wheels: 4,
}

for (var key in car) {
    console.log(`${key}: ${car[key]}`)
};

//zadanie 5
const car = {
  name: 'Ford',
  color: 'black',
  wheels: 4,
  owner: {
    name: 'Patryk',
    surname: 'Wojtaszek'
  }
}

for (let key in car.owner) {
    console.log(`${key}: ${key.value}`)
};

//zadanie6
const car = {
  name: 'Ford',
  color: 'black',
  wheels: 4,
  owner: {
    name: 'Patryk',
    surname: 'Wojtaszek'
  }
}

car.model = 'Fiesta';
car.hello = () => {
  console.log("Hello");
}
car.hello();
