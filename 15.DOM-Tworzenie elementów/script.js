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
