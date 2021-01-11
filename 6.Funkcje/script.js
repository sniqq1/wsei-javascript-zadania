function f1 () {
  console.log("Udało się");
};
f1();

function f2() {
  let i = 1;
  console.log(i);
};
f2();

function f3() {
  const arr = [1,2,3,4,6,7];
  console.log(arr);
};
f3();

function f4(string) {
  let i = 0;
  let licznik = setInterval(function () {
    if (i<5){
      console.log(string);
      i++;
    }
    else{
      clearInterval(licznik);
      console.log("Koniec");
    }
  },3000)
}
f4("hejka");
