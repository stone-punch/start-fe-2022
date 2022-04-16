const $box = document.querySelector('#box');
const $btn = document.querySelector('#btn');
const $min = document.querySelector('#min');
const $max = document.querySelector('#max');

$btn.addEventListener('click', function(){
    const min_value = $min.value;
    const max_value = $max.value;
    
    let random_value = Math.floor((Math.random() * (max_value - min_value) + min_value));

    console.log('최소 : ' + min_value);
    console.log('최대 : ' + max_value);
    console.log('랜덤 :  ' + random_value);
    $box.innerHTML = 0;
    $btn.disabled = true;
    const btn_interval = setInterval(function(){
        
        $box.innerHTML++;
        if($box.innerHTML == random_value){
            $btn.disabled = false;
            clearInterval(btn_interval);

        }
    },5)

});