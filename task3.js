/***
 * Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

function avgNmber(numbers, size){
    // console.log(numbers);
    // console.log(size);
    let sum = 0;
    for(const number of numbers){
        // console.log(number);
        sum = sum + number;
    }
    console.log("Total sum value is: ",sum);
    let average = sum / size;
    console.log(average);

    return average;
}
const numbers = [12, 34, 54, 65, 87, 23];
const size = numbers.length;
const result = avgNmber(numbers, size)
console.log("Your avarage value is: ", result.toFixed(2));