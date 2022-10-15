//Write a function fib(n) that takes in a number as an argument.
//The fn should return the n-th number of the Fibonacci sequence.

//The 0th no. of the sequence is 0.
//The 1st no. of the sequence 1.

//To generate the next no. of the sequnce, we sum the prev two.

//n:     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, _
//fib(n) 0, 1, 1, 2, 3, 5

// fib(6) -> 8
// O(n) time
// O(n) space

const fib = (n) => {

    const table = Array(n + 1).fill(0)
    table[1] = 1

    for (let i = 0; i <= n; i++) {
        table[i + 1] += table[i]
        table[i + 2] += table[i]
    }

    return table[n]
}


console.log(fib(6));