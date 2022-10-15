//bestSum(7, [5, 3, 4])
// TABULATION

const bestSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null)
    table[0] = []
    for (let i = 0; i <= table.length; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                if (table[i + num] !== undefined) {

                    if (table[i + num] !== null) {
                        let prev = table[i + num]
                        let curr = [...table[i], num]

                        if (curr.length < prev.length) {
                            table[i + num] = curr
                        }

                    } else {
                        table[i + num] = [...table[i], num]
                    }
                    
                }
                    
            }
        }
    }
    //console.log(table);
    return table[targetSum]
}


console.log(bestSum(100, [25,5, 3, 4, 2]));
console.log(bestSum(8, [2, 3, 5]));
// let arr = [1, 2, 3]
// console.log(arr[3]);