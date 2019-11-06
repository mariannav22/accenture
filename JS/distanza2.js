function distance( x1, y1, x2, y2){
if (typeof x1!=="number" || typeof y1!=="number"|| typeof x2!=="number" || typeof y2!=="number"){
    return undefined;
}
else{
    let result1=x2-x1
    let result2=y2-y1
    let result= Math.sqrt(result1**2+result2**2)
    return result;
}
}

console.log(distance(5,2,5,2));
console.log(distance(3,8,2,6));