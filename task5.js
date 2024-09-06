/***
 * Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 */

function binarySerchZero(str){
    let count = 0;
    for(let i = 0; i <= str.length; i++){
        if(str[i] === '0'){
            count++;
        }
    }
    return count;
}

const str = '1000110110000000';
const result = binarySerchZero(str);
console.log(result);