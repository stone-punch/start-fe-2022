var $box = document.querySelector('.box');


let offset = { x: 0, y: 0 };
let isDown = false;
let drag_dom = null;

function start_drag(el){
    el.addEventListener('mousedown', (event) => {
        isDown = true;
        drag_dom = el;
        console.log('mousedown');
        offset.x = el.offsetLeft - event.clientX;
        offset.y = el.offsetTop - event.clientY;
      });
}

function add_event(){
    $box.addEventListener('mouseup', (event) => {
        isDown = false;
        console.log('mouseup');
      });
      
      document.addEventListener('mousemove', (event) => {
        console.log('mousemove');
        if (!isDown) return;
        console.log(event.clientX, event.clientY);
      
        drag_dom.style.left = event.clientX + offset.x + 'px';
        drag_dom.style.top = event.clientY + offset.y + 'px';
      });
}

start_drag($box);
add_event();

