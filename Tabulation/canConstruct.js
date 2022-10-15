// Write a fn `canConstruct(target, wordBank)` that accepts a target string and an array of strings.

// The fn should return a boolean indicating whether or not the `target` can be constructed by concatenating elements of the `wordBank` array.

// You may resuse elements of `wordBank` as many time as needed.

// canConstruct(abcdef, [ab, abc, cd, def, abcd]) -> true
// canConstruct(skateboard, [ bo, rd, ate, t, ska, sk, boar]) -> false


const canConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false)
    table[0] = true

    for (let i = 0; i < target.length; i++) {
        
        if (table[i] === true) {
            
            for (let word of wordBank) {

                if (target.slice(i).indexOf(word) == 0) {
                    table[i + word.length] = true
                }
            }
        }
        
    }
    console.log(table);
    return table[target.length]
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))

console.log(canConstruct("skateboard", [ "bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false
























