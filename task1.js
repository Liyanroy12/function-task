/***
 * Take four parameters. Multiply the four numbers and then return the result 
 */

function multiplyNumber(num1, num2, num3, num4){
    const mul = (num1*num2*num3*num4);

    return mul;
}

const result = multiplyNumber(4, 2, 4, 5);
console.log("Your result is: ", result);