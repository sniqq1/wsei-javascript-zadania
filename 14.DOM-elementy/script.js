//zadanie 1
function zadanie1(parametr){
  let arr = [];
  parametr.forEach((i) => {
    arr.push(i.tagName);
  })
return arr;
}
console.log(zadanie1(document.querySelectorAll('.more-divs')));

//zadanie 2
function zadanie2(parametr){
  
    console.log(parametr.innerHTML);
 
    console.log(parametr.outerHTML);
    
    console.log(parametr.className);
   
    console.log([parametr.classList]);
   
    console.log(parametr.dataset);

}

zadanie2(document.querySelector(".short-list"))

//zadanie 3
const numbers = document.getElementById('datasetCheck');
const zadanie3 = takeNumbers => {
    const liczba1 = parseInt(takeNumbers.dataset.numberone)
    const liczba2 = parseInt(takeNumbers.dataset.numbertwo)
    const liczba3 = parseInt(takeNumbers.dataset.numberThree)
    let dodawanie = liczba1 + liczba2 + liczba3;
    let odejmowanie = liczba1 -liczba2 - liczba3;
    return [dodawanie, odejmowanie];
  
}
console.log(zadanie3(numbers));

//zadanie 4 i 5
document.getElementById("spanText").innerText =  "dowolny";
document.getElementById("spanText").className =  "dowolna";

//zadanie 6

function zadanie6 (classes) {
  classes.forEach(i => console.log(i));
  console.log([...classes].join('+'));
  document.getElementsByClassName(classes.value).classList=[];
  console.log('Usunięto wszytskie klasy');
}
zadanie6(document.getElementById('classes').classList);

//zadanie7 
  var zadanie7 = document.querySelector('#longList').querySelectorAll('li');
  zadanie7.forEach((c) => {
    if(c.dataset.text == null) c.setAttribute("data-text", "text");
  });

//zadanie8
function saveString(string_z_parametru){
    const obj = {
        newClass: string_z_parametru
    }
    return obj;
}

function loadString(obj) {
    var x = obj.newClass;
    document.getElementById('myDiv').classList.add(x);
}
loadString(saveString('string_z_parametru'));

//zadanie 9
function addClass (number) {
    var newClass = number%2==0 ? 'even' : 'odd';
    console.log(number, newClass);
    document.getElementById('numbers').classList.add(newClass);
}
var random = Math.round(Math.random()*10);
addClass(random);

//zadanie 10
    var listValues = document.querySelector('#longList');
    
    function showTab(listValues) {
        var li = [];
        listValues.querySelectorAll('li').forEach((d) => {
            li.push(d.innerHTML);
        });
        return li;
    }

    console.log(showTab(listValues));

//zadanie 11
function changeValues(el) {
  [...el.children].forEach(v => {
    v.setAttribute('old-value', v.innerText);
    v.innerText = Math.floor(Math.random() * 10);
  });
}

changeValues(document.getElementById('longList'));
