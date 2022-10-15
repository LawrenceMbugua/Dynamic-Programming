//Write a function `howSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments

// The function should return an array containing any combinations of elements that add up to exactly the targetSum. If there is no combination that adds up to the targetSum, then return null.

//If there are multiple combinations you may return any single one
//howSum(7, [5, 3, 4, 7]) -> [3, 4] or [7]
//howSum(8, [2, 3, 5]) ->
//howSum(7, [2, 4]) -> null
//howSum(0, [1,2,3,]) -> []



function howSum(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum == 0) { return [] }
    if (targetSum < 0) return null

    for (let num of numbers) {
        let newTargetSum = targetSum - num
        const remainderResult = howSum(newTargetSum, numbers, memo)
        if (remainderResult !== null) {
            memo[targetSum] = [ ...remainderResult, num ]
            return memo[targetSum]
        }

    }
    memo[targetSum] = null
    return null
}


console.log(howSum(300, [7, 14, 10]));
console.log(howSum(7, [5, 3, 4, 7]));