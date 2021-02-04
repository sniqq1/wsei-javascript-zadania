//zadanie1

document.addEventListener('DOMContentLoaded', () => {

document.querySelector('#test-event').addEventListener('click', (event) => console.log(event));
  
document.addEventListener('mousemove', (event) => console.log(event));
  
document.querySelector('#test-event').addEventListener('mouseover', (event) => console.log(event));
  
document.addEventListener('keypress', (event) => console.log(event));
  
document.addEventListener('scroll', (event) => console.log(event));
  
 document.querySelector('#input-test').addEventListener('change', (event) => console.log(event));
});


//zadanie2
document.getElementById('ex2').addEventListener('click', (e) => {
    document.getElementById('span-ex2').innerText = e.target.getAttribute('data-text');
});

//zadanie3
const div = document.getElementById('ex3');
div.addEventListener('mouseover', (e) => {
    div.style.backgroundColor = 'blue';
});

div.addEventListener('mouseout', (e) => {
    div.style.backgroundColor = 'red';
});

//zadanie4
const cyfry = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const error = document.getElementById('ex3-err');
document.getElementById('input-test').addEventListener('input', (e) => {
    error.innerText = cyfry.some(char => e.target.value.includes(char))
        ? 'nie można wpisywać cyfr'
        : null;
});

//zadanie 5
const button = document.getElementById('ex5-button');
const buttonCounter = document.getElementById('ex5');
let counter = 0;
function ex5 () {
  counter++;
  buttonCounter.innerText = counter;
  if(counter >= 10) {
    button.removeEventListener('click', ex5);
  }
}
button.addEventListener('click', ex5);


//zadanie 6
document.addEventListener('scroll', (e) => {
    document.body.style.backgroundColor = window.scrollY <= 200
        ? 'white'
        : 'red';
});
