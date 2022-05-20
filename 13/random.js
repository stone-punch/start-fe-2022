function random(min = 0, max){
    
    if(isNaN(max)){

        max = -1;

    }
    
    return Math.floor(Math.random() * (max - min)) + min;
}


export default random;