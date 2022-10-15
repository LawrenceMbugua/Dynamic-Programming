// Write a function `canSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

// The function needs to return a bool indicating whether or not it's possible to generate the targetSum using numbers from the array

// You may use an element of the array as many times as needed.
// You may assume that all input numbers are non-negatives

//canSum(7, [5, 3, 4, 7]) -> true


const canSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false)
    table[0] = true

    for (let i = 0; i <= table.length; i++) {
        for (let num of numbers) {
            if (table[i] === true) {

                if (table[i + num] !== undefined) {
                    table[i + num] = true
                }
            }
        }
    }
    console.log(table);
    return table[targetSum]
}


console.log(canSum(7, [5, 3, 4, 7])); 