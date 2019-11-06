function divisible(number){
    if (number %3==0 && number %5==0){
        let result1= "fizzBuzz"
        return result1;
    }
    else if(number %3==0){
        let result2="Fizz"
        return result2;
    }
    else{
        let result3="Buzz"
        return result3;
    }
}
console.log(divisible(18));
console.log(divisible(5));
console.log(divisible(15));