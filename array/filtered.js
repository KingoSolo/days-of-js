var filter = function(arr, fn) {
    let filteredArr = []

    for(let i = 0; i <= arr.length-1; i++ ){
        if(fn(arr[i],i))
            filteredArr.push(arr[i])
    }
    return filteredArr
 };