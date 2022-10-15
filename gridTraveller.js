//Say that you are a traveller on a 2D grid.
//You begin in the top - left corner and your goal is to travel to the bottom-right corner
//You may only move down or right

//In how many ways can you travel to the goal on a grid with dimensions m * n?
// Write a fn gridTraveller(m, n) that calculates this
// gridTeraveller(2, 3) -> 3
// gridTraveller(0, 1) -> 0
// gridTraveller(0, 8) -> 0
// gridTraveller(1,1) -> base case


function gridTraveller(m, n, memo = {}) {
    if (`'${m}, ${n}'` in memo) return memo[`'${m}, ${n}'`]
    if (m == 1 && n == 1) return 1
    if (m < 1 || n < 1) return 0

    memo[`'${m}, ${n}'`] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo)
    return memo[`'${m}, ${n}'`]
}

// console.log(gridTraveller(2, 3));
// console.log(gridTraveller(3, 3));
// console.log(gridTraveller(20, 20))
// console.log(gridTraveller(100, 100))