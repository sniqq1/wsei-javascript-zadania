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
