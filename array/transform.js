var map = function (arr,fn){
     let transformed_arr = []

     for(i = 0; i <= arr.length-1; i++){
        transformed_arr.push(fn(arr[i],i))
     }
     return transformed_arr
}