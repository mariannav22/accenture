function sort(array){
    let inverti= array.sort((left, right) => {
         if (left == right){ 
            return 0;
        } 
        else if (left < right ){
            return 1;
        } 
        else{
            return -1;
        }
         
    }
})
console.log(sort[4,3,5,1,7,12])
let sliced = array.slice[4,3,5,1,7,12]