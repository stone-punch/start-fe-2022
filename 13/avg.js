function avg(...arr){
    let sum = 0;
    let arr_length = arr.length;

    for(let i = 0; i < arr.length; i++){

        if (typeof arr[i] == "object") {
            arr = [...arr[i]];
          }

        if(isNaN(arr[i])){
            arr[i] = 0;
            arr_length --;
        }

        sum += arr[i];
    }

    let sum_avg = sum/arr_length;

    return sum_avg;
}

export default avg;






