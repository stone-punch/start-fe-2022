/*
console.log(window.outerWidth);
console.log(window.name);
console.log('http://www.daum.net');

history.back();
history.go(1);

screen.availWidth;



//console.log(document.getElementById('debug'));

var div = document.createElement('div');
//console.log(div);
div.style.border = '1px solid #000';
div.innerHTML = 'hello!';

document.body.appendChild(div);

const span = document.createElement('span');
const textNode = document.createTextNode('hello!'); 
span.appendChild(textNode);
document.querySelector('#debug').appendChild(span);


const el = document.getElementById('div1');
el.remove();
*/

var clickCount = 0;
function popup(event){
    console.log(++clickCount);
    console.log(arguments,event ,event.type,event.currentTarget);
}
document.body.addEventListener('click', popup);

document.body.addEventListener('click', function(){
    console.log("click");
});