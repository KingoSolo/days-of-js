//a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.


const  expect = function(val){
    
   return {
    toBe : function(expected){
        if (val === expected){
            return true
        }else {throw new Error("Not Equal")}
    },
    notToBe : function(expected){
        if (val !== expected){
        return true
        }else {throw new Error("Equal")}
    }
}
};
//test case
 expect(5).toBe(5) // true