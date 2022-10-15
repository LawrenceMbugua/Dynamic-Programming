//howSum(7, [5, 3, 4])
// TABULATION

const howSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null)
    table[0] = []
    
    for (let i = 0; i <= table.length; i++) {
        //console.log(table);
        if (table[i] !== null) {
            for (let num of numbers) {

                if (table[i + num] !== undefined) {

                    table[i + num] = [...table[i], num]
                }
                    
            }
        }
    }
    console.log(table);
    return table[targetSum]
}


console.log(howSum(7, [5, 3, 4]));
console.log(howSum(8, [2, 3, 5]));
// let arr = [1, 2, 3]
// console.log(arr[3]);