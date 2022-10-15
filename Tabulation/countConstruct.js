//Write a fn `countConstruct(target, wordBank)` that accepts a target string and an array of strings.

//The function should return the number of ways that the `target` can be constructed by concatenating elements of the `wordBank` array.



//You may reuse elements of the `wordBank` as many times as needed.


const countConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0)
    table[0] = 1

    for (let i = 0; i <= target.length; i++) {

        if (table[i] !== 0) {
            
            for (let word of wordBank) {

                if (target.slice(i).indexOf(word) == 0) {
                    table[i + word.length] = table[i] + table[i + word.length]
                }
            }
        }
    }




    // console.log(table);
    return table[target.length]
}


console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))

console.log(countConstruct("skateboard", [ "bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false