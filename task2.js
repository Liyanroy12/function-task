/***
 * Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

function showResult (number){
    // console.log(number);
    if(number % 2 === 1){
        return number*2;
    }else{
        return number+number;
    }

}
const result = showResult(5);
console.log("Your resuslt is: ",result);
