function isOdd(value) {
    if (!Number.isInteger(value)) {
        return undefined;
    }
if (value %2==0){
    return true;

}
else{
    return false;
}
}
 console.log(isOdd("ciao"));
 console.log(isOdd(3.6));
 console.log(isOdd(12));
 console.log(isOdd(3));
 console.log(isOdd("12"));
