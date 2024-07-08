/**
17. Letter Combinations of a Phone Number - Medium

https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

Given a string containing digits from 2-9 inclusive,
return all possible letter combinations that the number could represent. 
Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below.
Note that 1 does not map to any letters.

1: null 2: abc  3: def
4: ghi  5: jkl  6: mno
7: pqrs 8: tuv  9: wxyz

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []

Example 3:
Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:
0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].

*/

// A mapping of digits to letters (just like on the telephone buttons) is given below.
const mapping = new Map()
mapping.set(2, 'abc')
mapping.set(3, 'def')
mapping.set(4, 'ghi')
mapping.set(5, 'jkl')
mapping.set(6, 'mno')
mapping.set(7, 'pqrs')
mapping.set(8, 'tuv')
mapping.set(9, 'wxyz')

function letterCombinations(digits: string): string[] {
    // handle empty digits
    if (digits.length === 0) return []

    const n = digits.length
    const temp: string[] = []
    const result: string[] = [];

    function backtrack(idx: number) {
        if (temp.length === n) {
            result.push(temp.join(''));
            return;
        }

        const number = Number.parseInt(digits[idx])
        const letters = mapping.get(number)

        if (letters) {
            for (const letter of letters) {
                temp.push(letter);
                backtrack(idx + 1);
                temp.pop();
            }
        }
    }

    backtrack(0);

    return result;
};

export { letterCombinations as solution }


/**
 
# Complexity Analysis

## Time Complexity:
Each digit corresponds to 3 or 4 letters (e.g., '2' -> 'abc', '7' -> 'pqrs').
For a digit string of length n, there are 3^n to 4^n possible combinations.
Therefore, the time complexity is O(4^n), where n is the length of the input digit string.

## Space Complexity:
The space complexity consists of the recursive call stack and the temporary array temp.
The depth of the recursive call stack can be up to n, and each call uses O(1) space.
The temporary array temp has a length of n.
The result array result will store up to O(4^n) combinations.
Therefore, the total space complexity is O(n + 4^n).
*/