// zadanie 1
const z1 = document.createElement("div");
z1.innerText = "To jest nowy element";
document.body.appendChild(z1);

// zadanie 2
const fruits = ['banan', 'mango', 'truskawka', 'poziomka', 'śliwka', 'borówka'];
const list = document.createElement("ul");
fruits.forEach(v => {
    const li = document.createElement("li");
    li.innerText = v;
    list.appendChild(li);
});
document.body.appendChild(list);

//zadanie3
document.body.addEventListener('click', () => {
    const qwqw = document.querySelectorAll('ul li');
    qwqw.forEach((child, i) => {
        if (i % 2 === 1) child.remove();
    });
});

//zadanie4
var button = document.createElement('button');
button.innerText = 'Click and look';
button.addEventListener('click', (e) => {
  e.target.remove();
})

document.body.appendChild(button);

// zadanie5
let divNumb = Math.round(Math.random() * 10);
for (let i=0; i<divNumb; i++) {
  const rand = document.createElement('div');
  rand.innerText = `div number ${i}`;
  document.body.appendChild(rand);
}


//zadanie6
const obj = {
  div1: 'to jest div', span1: 'to jest span', div2: { div3: 'to jest div', }, span2: 'to jest span',
}

const firstDiv = document.createElement('div');
firstDiv.innerText = obj.div1;
const firstSpan = document.createElement('span');
firstSpan.innerText = obj.span1;

firstDiv.append(firstSpan); 
document.body.append(firstDiv, document.getElementById('root'));

const secondDiv = document.createElement('div');
const thirdDiv = document.createElement('div');
thirdDiv.innerText = obj.div2.div3;

const secondSpan = document.createElement('span');
secondSpan.innerText = obj.span2;

secondDiv.append(thirdDiv);
secondDiv.append(secondSpan);

document.body.append(secondDiv, document.getElementById('root'));


// zadanie 7
var firstList = document.createElement('ol');
firstList.id = 'firstList';
var firstButton = document.createElement('button');
firstButton.id = 'firstButton';
firstButton.innerText =' list nr 1';

  var q = document.createElement('li');
  q.innerText = "Q";
  var w = document.createElement('li');
  w.innerText = "W";
  var e = document.createElement('li');
  e.innerText = "E";
  var r = document.createElement('li');
  r.innerText = "R";
  var t = document.createElement('li');
  t.innerText = "T";
  var y = document.createElement('li');
  y.innerText = "Y";

  firstList.appendChild(q);
  firstList.appendChild(w);
  firstList.appendChild(e);
  firstList.appendChild(r);
  firstList.appendChild(t);
  firstList.appendChild(y);
var secondList = document.createElement('ol');
secondList.id = 'secondList';
var secondButton = document.createElement('button');
secondButton.id = 'secondButton';
secondButton.innerText =' list nr 2';

root.appendChild(firstList);
root.appendChild(secondList);
root.appendChild(firstButton);
root.appendChild(secondButton); 

  function oneToTwo(){
    var listOne =document.querySelector("#firstList");
    var listTwo =document.querySelector("#secondList");
    var listOfElements1 = listOne.getElementsByTagName("li");
    var listOfElements2 = listTwo.getElementsByTagName("li");
    var last = listOfElements1[listOfElements1.length-1];
    var lastText = last.innerText;
    var newLi = document.createElement('li'); 
    newLi.innerText = lastText;
    listTwo.appendChild(newLi);
    listOne.removeChild(last);
        if( listOfElements1.length < 1){
      document.querySelector("#firstButton").disabled = true;
    }
    if(listOfElements2.length >= 1){
      document.querySelector("#secondButton").disabled = false;
    }
  }
  document.querySelector('#firstButton').addEventListener('click',oneToTwo);

function twoToOne() {
  var listOne =document.querySelector("#firstList");
    var listTwo =document.querySelector("#secondList");
    var listOfElements1 = listOne.getElementsByTagName("li");
    var listOfElements2 = listTwo.getElementsByTagName("li");
    var last = listOfElements2[listOfElements2.length-1];
    var lastText = last.innerText;
    var newLi = document.createElement('li'); 
    newLi.innerText = lastText;
    listOne.appendChild(newLi);
    listTwo.removeChild(last);
        if( listOfElements2.length < 1){
      document.querySelector("#firstButton").disabled = true;
    }
    if(listOfElements1.length >= 1){
      document.querySelector("#secondButton").disabled = false;
    }  
}
 document.querySelector('#secondButton').addEventListener('click', twoToOne);
