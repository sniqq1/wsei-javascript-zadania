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
