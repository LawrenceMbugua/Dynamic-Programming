// Write a function `canSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

// The function needs to return a bool indicating whether or not it's possible to generate the targetSum using numbers from the array

// You may use an element of the array as many times as needed.
// You may assume that all input numbers are non-negatives

//canSum(7, [5, 3, 4, 7]) -> true






// function canSum(targetSum, numbers) {
//     let len = numbers.length - 1
//     return helper(targetSum, numbers, len, memo = {})
    
// }

// function helper(targetSum, numbers, len, memo) {
//     if (len < 0) return false

//     if (numbers[len] == targetSum) return true
//     if (targetSum % numbers[len] == 0 ) return true

//     let k = targetSum - numbers[len]
//     let v = `${numbers[len]}`
//     if (v in memo) return true

//     memo[k] = v
//     console.log(memo);
//     return helper(targetSum, numbers, len - 1, memo )


// }

// console.log((canSum(8, [5, 1, 6, 4])));













//canSum(7, [5, 3, 4, 7]) -> true


function canSum(targetSum, numbers, memo = {}) {
    if (targetSum in memo ) return memo[targetSum]
    if (targetSum === 0) { memo[targetSum] = true; return true}
    if (targetSum < 0) { memo[targetSum] = false; return true; return false}

    for (let num of numbers) {
        const remainder = targetSum - num
        if (canSum(remainder, numbers, memo) === true) return true
    }
    return false

}

console.log(canSum(7, [5, 3, 4, 7]));
//console.log();



