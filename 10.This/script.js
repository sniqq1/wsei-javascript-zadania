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
