let container = document.getElementById('container');

document.addEventListener('DOMContentLoaded', function() {
let btn = document.createElement('button');
btn.innerText = "Click me for a NICE message!!";
btn.addEventListener('click', function() {
    alert("Conquer all obstacles in your way... today shall be an amazing day!!");

});

container.appendChild(btn);

let newBtn = document.getElementById('newBtn');
let textBox = document.getElementById('textBox');
newBtn.addEventListener('click', function() {
    let text = document.getElementById('textBox').value;
    alert(text);
});



});

