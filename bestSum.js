//Write a fn `bestSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments

//The fn should return an array containing the shortest combination of numbers that add up to exactly the targetSum.

//If there is a tie for the shortest combination, you may return any one of the shortest.

//bestSum(7, [5, 3, 4, 7])  -> 7
//bestSum(8, [2, 3, 5])     -> [3, 5]



// function bestSum(targetSum, numbers) {

// }

// bestSum(8, [2, 3, 5])

function bestSum(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return []
    if (targetSum < 0) return null

    let shortestCombination = null

    for (let num of numbers) {
        let remainder = targetSum - num
        const remainderCombination = bestSum(remainder, numbers, memo)

        if (remainderCombination !== null) {
         
            const combination = [num, ...remainderCombination]
            
            if ( shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination
            }

        }
    } 
    memo[targetSum] = shortestCombination
    return shortestCombination 

}


console.log(bestSum(300, [7, 14, 10]));
//console.log(bestSum(7, [5, 3, 4, 7]));