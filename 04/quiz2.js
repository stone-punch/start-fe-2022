var $select = null;

function print_board(){
    var $board = document.getElementById('board');
    var board_count = 16;
    var is_white = false;
    var class_name = '';
    var board_line_count = 4;

    var str = '';


    for(var i=0; i < board_count; i++){
        class_name = is_white ? 'white' : 'black';
    
        str += '<span class="' + class_name + '"></span>';
    
        is_white = !is_white;
    
        if(i % board_line_count == board_line_count - 1){
            is_white = !is_white;
        }
    }
    
    $board.innerHTML = str;
}


function add_event(){
    var $boards = document.querySelectorAll('span');
    var boards_length = $boards.length;
    

    for(var i = 0; i < boards_length; i++){
        $boards[i].addEventListener('click', select);
    }
}


function select(event){
    if($select){
        $select.className = $select.className.replace('select', '');
    }
    
    var el = event.currentTarget;
    el.className += ' select'
    $select = el
}

print_board();
add_event();