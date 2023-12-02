function removeDuplicates(arr) {
    
    const uniqueSet = new Set(arr);


    const uniqueArray = Array.from(uniqueSet);

    return uniqueArray;
}
const inputArray = [1, 2, 3, 4, 2, 5, 6, 1, 7, 8, 8, 9];
const result = removeDuplicates(inputArray);


console.log(result);
