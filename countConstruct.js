//Write a fn `countConstruct(target, wordBank)` that accepts a target string and an array of strings.

//The function should return the number of ways that the `target` can be constructed by concatenating elements of the `wordBank` array.



//You may reuse elements of the `wordBank` as many times as needed.
let count = 0
function countConstruct( target, wordBank ) {
    if (target === "" ) return 1
    let total = 0
    for (let word of wordBank) {

        if (target.search(word) == 0) {
            
            console.log(target, "-", word);
            
            total += countConstruct( target.slice(word.length), wordBank )
                   
        }


  
    }
    return total
}

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", ])); // 1
console.log(countConstruct("skateboard", [ "bo", "rd", "ate", "t", "ska", "sk", "boar"])); // 0

