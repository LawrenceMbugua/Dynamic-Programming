//Write a fn `allConstruct(target, wordBank)` that accepts a target string and an array of strings.

//The fn should return a 2D array containing all the ways that the  `target` can constructed by concatenating elements of the `wordBank` array.

//Each element of the 2D array should represent one combination that constructs the `target`.

//allConstruct(purple, [purp, p, ur, le, purp]) -> [[purp, le], [p, ur, p, le]]




const allConstruct = (target, wordBank) => {

    const table = Array(target.length + 1)
        .fill()
        .map(() => []);
    
    
    table[0] = [[]]


    for (let i = 0; i <= target.length; i++) {


        for (let word of wordBank) {
            if (target.slice(i).indexOf(word) === 0) {
                const newCombinations = table[i].map(subArray => [...subArray, word])
                table[i + word.length].push(...newCombinations)
            }
        }
    }

    return table[target.length]

    
}




console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]))
console.log(allConstruct("purple", ['purp', 'p', 'ur', 'le', 'purpl']));

