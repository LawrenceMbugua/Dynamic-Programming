// Write a function fib(n) that takes in a number as an argument.
//The fn should return the n-th number of the Fibonacci sequence.
// O(n) time
// O(n) space


const { range } = require("express/lib/request")

function fib(n, memo = {}) {
    if (n in memo) return memo[n]

    if (n == 2) return 1
    if (n == 1) return 1
    //Store it first in the memo before proceeding
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    //Then return the stored value
    return memo[n]

}


for (let i = 3; i <= 100; i++) { console.log(`'${i}':`, fib(i)) }