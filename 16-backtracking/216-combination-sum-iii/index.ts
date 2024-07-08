/**
216. Combination Sum III - Medium

https://leetcode.com/problems/combination-sum-iii/description/

Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
Only numbers 1 through 9 are used.
Each number is used at most once.
Return a list of all possible valid combinations.
The list must not contain the same combination twice, and the combinations may be returned in any order.

 
Example 1:
Input: k = 3, n = 7
Output: [[1,2,4]]
Explanation:
1 + 2 + 4 = 7
There are no other valid combinations.

Example 2:
Input: k = 3, n = 9
Output: [[1,2,6],[1,3,5],[2,3,4]]
Explanation:
1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9
There are no other valid combinations.

Example 3:
Input: k = 4, n = 1
Output: []
Explanation: There are no valid combinations.
Using 4 different numbers in the range [1,9], the smallest sum we can get is 1+2+3+4 = 10 and since 10 > 1, there are no valid combination.
 

Constraints:
2 <= k <= 9
1 <= n <= 60

*/

function combinationSum3(k: number, n: number): number[][] {
    const result: number[][] = []
    const tempStack: number[] = []
    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const backtrack = (startIdx: number, acc: number) => {

        if (tempStack.length === k) {
            if (acc === n) {
                result.push([...tempStack])
            }
            return
        }

        // always proceed with numbers in increasing order
        for (let i = startIdx; i < options.length; i++) {
            const option = options[i]
            //  break out of the loop early since further options will also exceed n.
            if (acc + option > n) break

            tempStack.push(option)
            backtrack(i + 1, acc + option)
            tempStack.pop()
        }

    }

    backtrack(0, 0)

    return result
};

export { combinationSum3 as solution }


/**
 
# Time Complexity:
The worst-case time complexity remains O(9^k) due to the nature of generating combinations. However, early termination reduces the practical complexity.
The combinatorial nature (C(9, k)) also affects the practical performance.

# Space Complexity:
The space complexity remains O(k) for the recursion stack and temporary stack.
The result array will store all valid combinations, with a worst-case space complexity of O(C(9, k)).

*/