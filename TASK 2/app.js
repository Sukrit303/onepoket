// TAsk 2
function sumArrayIntegers(array) {
    if (!Array.isArray(array)) {
        throw new Error("Input must be an array");
    }

    let sumOfArray = 0;

    for (let i = 0; i < array.length; i++) {
        sumOfArray += array[i];
    }
    return sumOfArray;
}


var inputArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]
console.log(inputArray)
console.log("Sum of input arrays is " + sumArrayIntegers(inputArray))