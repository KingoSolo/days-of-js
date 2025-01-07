//a function createCounter. It should accept an initial integer init. It should return an object with three functions.

var createCounter = function(init){
    let initial = init;
    return {
        increment: function(){
            return init++;
        },
        decrement: function(){
            return init--;
        },
        reset: function(){
            init = initial
            return init;
        }
    }
}

createCounter(5).increment() // 6