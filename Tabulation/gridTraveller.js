//Say that you are a traveller on a 2D grid.
//You begin in the top - left corner and your goal is to travel to the bottom-right corner
//You may only move down or right

//In how many ways can you travel to the goal on a grid with dimensions m * n?
// Write a fn gridTraveller(m, n) that calculates this
// gridTraveller(2, 3) -> 3
// gridTraveller(0, 1) -> 0
// gridTraveller(0, 8) -> 0
// gridTraveller(1,1) -> base case


const gridTraveller = (m, n) => {
    const table = Array(m + 1).fill().map(() => Array(n + 1).fill(0))
    table[1][1] = 1

    for (let i = 0; i < table.length ; i++) {

        for (let j = 0; j <= table[i].length; j++) {

            let curr = table[i][j]
            let right = table[i][j + 1]
            let down;
            if (table[i + 1] !== undefined) {
                down = table[i + 1][j] //should not be out of bound \/
            }

            if (right !== undefined) {
                right = right + curr
                table[i][j + 1] = right
            }

            if (down !== undefined) {
                down = down + curr
                table[i + 1][j] = down
            }
            
            //console.log(down);
        }
    }
    console.log(   table[m ][n ]);

} 

gridTraveller(3, 2)
gridTraveller(2, 3)
gridTraveller(3, 3)
gridTraveller(1, 1)
gridTraveller(18, 18)
gridTraveller(20, 20)
