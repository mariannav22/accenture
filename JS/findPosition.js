function findPosition(data, value) {
    for( let i=0; i<data.lenght; i++){
        if(data[i]===value){
            return i;
        }
    }
    return-1
}


console.log(findPosition(1,1)===0);