// zadanie 1
class Person {
  constructor(imie,nazwisko,wiek,kraj,miasto) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wiek = wiek;
    this.kraj = kraj;
    this.miasto = miasto;
  }
    info() {
    for (const [key, value] of Object.entries(this)) {
      console.log(`${key}: ${value}`);
    }
  }
  addYear() {
    this.wiek++;
  }
}
const person = new Person('Patryk','Wojtaszek',28,'Polska','Kraków');
const person2 = new Person('Wojtek','Patryszek',82,'Niemcy','Berlin');
person.info();
person.addYear();
person.info();
person.addYear();
person.addYear();
person.info();

// zadanie 2
person.dishes= ['Schabowy','Pierogi'];
person2.dishes = ['Ogórki','Mizieria'];
function printDishes() {
  console.log(this.dishes);
}

function addDish(dish) {
  this.dishes.push(dish)
}
person.printDishes = printDishes;
person2.printDishes = printDishes;
person.addDish = addDish;
person2.addDish = addDish;
person.printDishes();
person.addDish('bigos');
person.printDishes();
