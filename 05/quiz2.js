var wrap = document.querySelector('.wrap');
var str = '';
var className = '';
var isWhite = false;
var selectedDom = null;

for(var i=0; i < 16; i++){

    if(isWhite) {
      className = 'white';
    }
    else {
      className = 'black';
    }
  
    str += '<div class="'+ className +'"></div>';
  
    if(i % 4 === 3 ){
        isWhite = !isWhite;
      }
    //한번씩 변경
    isWhite = !isWhite;
  
  }
  
  wrap.innerHTML = str;

var boards = document.querySelectorAll('.wrap > div');

function selectBoard(event) {

  var click = event.Curr
  if(selectedDom){
   selectBoard.classlist.remove('red')
  }
  click.classlist.add('red');
  selectedDom = click;
}

for(var i=0; i<boards.length; i++){

  boards[i].addEventListener('click', selectBoard);
}