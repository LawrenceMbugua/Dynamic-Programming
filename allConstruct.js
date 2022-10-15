//Write a fn `allConstruct(target, wordBank)` that accepts a target string and an array of strings.

//The fn should return a 2D array containing all the ways that the  `target` can constructed by concatenating elements of the `wordBank` array.

//Each element of the 2D array should represent one combination that constructs the `target`.

//allConstruct(purple, [purp, p, ur, le, purp]) -> [[purp, le], [p, ur, p, le]]




const allConstruct = (target, wordBank) => {
    if (target == "") return [[]]

    const result = []

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            const suffixWays = allConstruct(suffix, wordBank)
            const targetWays = suffixWays.map(  way => [word, ...way]  )
            result.push(...targetWays)
        }
    }

    return result
}


console.log(allConstruct("purple", ['purp', 'p', 'ur', 'le', 'purp']));















//  let arr = [['a'], ['b']]
// // let arr2 = [['x'], ['y', 'z']]

// arr.forEach((elem) => {return elem.push('x')})
// console.log(arr);
// console.log(arr.concat(arr2));