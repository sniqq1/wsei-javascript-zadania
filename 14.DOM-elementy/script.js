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
