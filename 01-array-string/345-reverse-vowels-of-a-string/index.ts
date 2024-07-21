/*

345. Reverse Vowels of a String - Easy

https://leetcode.com/problems/reverse-vowels-of-a-string/description/

Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, 
more than once.
 

Example 1:
Input: s = "hello"
Output: "holle"

Example 2:
Input: s = "leetcode"
Output: "leotcede"
 

Constraints:
1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
 

*/



export function reverseVowels(s: string): string {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const isVowel = (c: string) => vowels.has(c.toLowerCase())

    // Convert string to array of characters for in-place modification
    const chars = s.split('')

    let left = 0 // Initialize left pointer
    let right = chars.length - 1 // Initialize right pointer

    // Use two pointers to swap vowels in place
    while (left < right) {
        // Move left pointer to the next vowel
        while (left < right && !isVowel(chars[left])) {
            left++
        }
        // Move right pointer to the previous vowel
        while (left < right && !isVowel(chars[right])) {
            right--
        }
        // If both pointers are at vowels, swap them
        if (left < right) {
            [chars[left], chars[right]] = [chars[right], chars[left]]
            left++
            right--
        }
    }
    // Convert array of characters back to string
    return chars.join('')
};


export function solution(s: string): string {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const isVowel = (c: string) => vowels.has(c.toLowerCase())

    const vowelIndex: number[] = []

    for (let i = 0; i < s.length; i++) {
        if (isVowel(s[i])) {
            vowelIndex.push(i)
        }
    }

    const chars = s.split('')

    while (vowelIndex.length > 1) {
        const head = vowelIndex.shift()!;
        const tail = vowelIndex.pop()!;
        // exchange the value
        [chars[tail], chars[head]] = [chars[head], chars[tail]]
    }

    return chars.join('')
};

/**
 
# Time Complexity
Overall, the time complexity of the function is O(n).

## Initialization and Finding Vowel Indices:
Traversing the chars array once to find vowels using two pointers has a time complexity of O(n), where n is the length of the string s.

## Swapping Vowel Characters:
Each pointer (left and right) traverses part of the array, and each character is processed at most once. Therefore, the time complexity for swapping is also O(n).
Overall, the time complexity of the function is O(n).


# Space Complexity

Overall, the space complexity of the function is O(n).
The chars array used to store the characters of the string has a space complexity of O(n).

 */