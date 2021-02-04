// zadanie 1
document.addEventListener('DOMContentLoaded', () => {
    
    console.log(document.querySelector('#buz').parentElement);
    console.log(document.querySelector('#baz').previousElementSibling);
    console.log(document.querySelector('#foo').children);
    console.log(document.querySelector('#foo').parentElement);
    console.log(document.querySelector('#foo').children[0]);
    console.log((function() {
        let foo = document.querySelector('#foo');
        let number = foo.children.length-1;
        let midChild = Math.round(number / 2);
        return foo.children[midChild];
 }));
});

// zadanie2
    let downloadTxt = function(elementId) {
        let el = document.querySelector(`#${elementId}`);
        el.addEventListener('click', function(event) {
            console.log(event.target.textContent.trim());
        });
    }
    downloadTxt('ex2');
    
//zadanie 3
  document.querySelector('#ex3').querySelectorAll('button').forEach((element) => {
        element.addEventListener('click', (event) => {
            event.target.nextElementSibling.style.display = event.target.nextElementSibling.style.display == 'none' ? 'block' : 'none';
        });
    });

//zadanie 4
const buttons = document.querySelectorAll("#ex3 div button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        button.parentElement.style.backgroundColor = randomColor;
    });
})

//zadanie 5
    let ex5 = document.querySelector('#ex5');
    let divs = ex5.querySelectorAll('div');
    let list = ex5.querySelectorAll('ul>li');

    function first(e) {
    list[0].style.backgroundColor = e.srcElement.style.backgroundColor;
    }
    function second(e) {
    list[list.length-1].style.backgroundColor = e.srcElement.style.backgroundColor;
    }
    function third(e) {
    Array.from(list)
        .filter((value) => value.innerHTML % 2 === 0)
        .forEach((li) => li.style.backgroundColor = e.srcElement.style.backgroundColor)
    }
    function fourth(e) {
    list.forEach((li) => li.style.backgroundColor = e.srcElement.style.backgroundColor)
    }
    function fifth(e) {
    ex5.querySelector('ul').style.backgroundColor = e.srcElement.style.backgroundColor;
    }

    divs.forEach((div) => {
    div.addEventListener('mouseover', third)});

//zadanie 6
const mainDiv = document.getElementById('ex6');

let one = mainDiv.firstElementChild.firstElementChild.firstElementChild;

let two = mainDiv.firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;

let three = mainDiv.parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;


console.log(one);
console.log(two);
console.log(three);
