// Write a fn `canConstruct(target, wordBank)` that accepts a target string and an array of strings.

// The fn should return a boolean indicating whether or not the `target` can be constructed by concatenating elements of the `wordBank` array.

// You may resuse elements of `wordBank` as many time as needed.

// canConstruct(abcdef, [ab, abc, cd, def, abcd]) -> true
// canConstruct(skateboard, [ bo, rd, ate, t, ska, sk, boar]) -> false


function canConstruct(target, wordBank, memo = {}) {
    if (target in memo) return memo[target]
    if (target === "" ) return true

    for (let word of wordBank) {

        let newTarget = false
       
        if (target.search(word) == 0) {
            let startPos = word.length
            newTarget = target.slice(startPos)
            console.log(target, "-", word, "=",newTarget);
        }



        if (newTarget !== false) {
            if (canConstruct(newTarget, wordBank, memo) == true) {
                memo[target] = true
                return true
            }
        } 
    }
    memo[target] = false
    return false
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]) ); // true
console.log(canConstruct("skateboard", [ "bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false
