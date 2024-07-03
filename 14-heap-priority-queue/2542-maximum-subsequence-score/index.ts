/**

2542. Maximum Subsequence Score - Medium

https://leetcode.com/problems/maximum-subsequence-score/description/

You are given two 0-indexed integer arrays nums1 and nums2 of equal length n and a positive integer k.
You must choose a subsequence of indices from nums1 of length k.
For chosen indices i0, i1, ..., ik - 1, your score is defined as:
The sum of the selected elements from nums1 multiplied with the minimum of the selected elements from nums2.
It can defined simply as: (nums1[i0] + nums1[i1] +...+ nums1[ik - 1]) * min(nums2[i0] , nums2[i1], ... ,nums2[ik - 1]).
Return the maximum possible score.
A subsequence of indices of an array is a set that can be derived from the set {0, 1, ..., n-1} by deleting some or no elements.


Example 1:
Input: nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3
Output: 12
Explanation: 
The four possible subsequence scores are:
- We choose the indices 0, 1, and 2 with score = (1+3+3) * min(2,1,3) = 7.
- We choose the indices 0, 1, and 3 with score = (1+3+2) * min(2,1,4) = 6. 
- We choose the indices 0, 2, and 3 with score = (1+3+2) * min(2,3,4) = 12. 
- We choose the indices 1, 2, and 3 with score = (3+3+2) * min(1,3,4) = 8.
Therefore, we return the max score, which is 12.

Example 2:
Input: nums1 = [4,2,3,1,1], nums2 = [7,5,10,9,6], k = 1
Output: 30
Explanation: 
Choosing index 2 is optimal: nums1[2] * nums2[2] = 3 * 10 = 30 is the maximum possible score.
 

Constraints:
n == nums1.length == nums2.length
1 <= n <= 105
0 <= nums1[i], nums2[j] <= 105
1 <= k <= n

*/


class MinHeap {
    // store data
    heap: number[] = []
    // calc Parent Idx
    getParentIdx = (idx: number) => Math.floor((idx - 1) / 2)
    // calc child Idx
    getLeftChildIdx = (idx: number) => idx * 2 + 1
    // calc child Idx
    getRightChildIdx = (idx: number) => idx * 2 + 2
    // calc Parent value
    getParent = (idx: number) => this.heap[this.getParentIdx(idx)]
    // get left child value
    getLeftChild = (idx: number) => this.heap[this.getLeftChildIdx(idx)]
    // get right child value
    getRightChild = (idx: number) => this.heap[this.getRightChildIdx(idx)]
    // swap
    swap = (idx1: number, idx2: number) => {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]
    }
    // move the newly added element up to maintain the heap property
    heapifyUp = () => {
        let idx = this.heap.length - 1
        while (idx > 0 && this.getParent(idx) > this.heap[idx]) {
            this.swap(this.getParentIdx(idx), idx)
            idx = this.getParentIdx(idx)
        }
    }
    // move the top element down to maintain the heap property
    heapifyDown = () => {
        let idx = 0
        while (this.getLeftChildIdx(idx) < this.heap.length) {
            //  find smaller child in child nodes
            let smallerChildIdx = this.getLeftChildIdx(idx)
            if (this.getRightChildIdx(idx) < this.heap.length
                && this.getRightChild(idx) < this.getLeftChild(idx)
            ) {
                smallerChildIdx = this.getRightChildIdx(idx)
            }

            // break condition: upper element is no bigger than the child
            if (this.heap[idx] <= this.heap[smallerChildIdx]) {
                break;
            }

            // swap the current element with the smaller child
            this.swap(idx, smallerChildIdx)
            idx = smallerChildIdx
        }
    }
    // insert and maintain the heap
    insert = (ele: number) => {
        this.heap.push(ele)
        this.heapifyUp()
    }
    // remove and return the minimun number 
    extractMin = (): number | null => {
        if (this.heap.length === 0) {
            return null
        }
        if (this.heap.length === 1) {
            return this.heap.pop()!
        }
        // remove th
        const min = this.heap[0]
        this.heap[0] = this.heap.pop()!
        this.heapifyDown()
        return min
    }
    // return the size
    size() {
        return this.heap.length
    }
    // peek the value
    peek() {
        return this.heap[0] ?? null
    }
}


export function maxScore(nums1: number[], nums2: number[], k: number): number {
    // Create pairs of elements from nums1 and nums2
    const pairs = nums1.map((num1, idx) => {
        return [num1, nums2[idx]]
    })

    // Sort pairs by the second element (num2 value) in descending order
    pairs.sort((a, b) => b[1] - a[1])

    // Initialize a MinHeap to maintain the smallest elements
    let minHeap = new MinHeap()
    let maxResult = 0
    let currentSum = 0

    // Iterate over the sorted pairs
    for (let [num1, num2] of pairs) {

        // Add num1 to the current sum
        currentSum += num1
        minHeap.insert(num1)

        // If the heap size exceeds k, remove the smallest element from the heap and update the current sum
        if (minHeap.size() > k) {
            const min = minHeap.extractMin()
            currentSum -= min!
        }

        // If the heap size is less than k, skip the current iteration
        if (minHeap.size() < k) continue

        // update score
        const currentResult = num2 * currentSum
        maxResult = Math.max(maxResult, currentResult)
    }

    return maxResult
};


/**

# Complexity Analysis

- **Time Complexity**: \(O(n \log n)\)
- **Space Complexity**: \(O(n)\)

# Time Complexity

1. **Pairing and Mapping**:
   - The function first maps the `nums1` and `nums2` arrays to create pairs. This operation takes \(O(n)\) time, where \(n\) is the length of the arrays.
   - ```typescript
     const pairs = nums1.map((num1, idx) => [num1, nums2[idx]]);
     ```

2. **Sorting**:
   - The function sorts the pairs based on the second element (the `nums2` value) in descending order. Sorting takes \(O(n \log n)\) time.
   - ```typescript
     pairs.sort((a, b) => b[1] - a[1]);
     ```

3. **Iterating and Heap Operations**:
   - The function iterates over the sorted pairs. Each insertion into the heap takes \(O(\log k)\) time, where \(k\) is the size of the heap.
   - The heap size is maintained to be at most \(k\), so removing the minimum element also takes \(O(\log k)\) time.
   - The overall iteration over all pairs combined with heap operations takes \(O(n \log k)\) time.
   - ```typescript
     for (let [num1, num2] of pairs) {
        
     }
     ```

4. **Total Time Complexity**:
   - Combining all the steps, the overall time complexity of the function is \(O(n \log n) + O(n \log k)\).
   - Since \(O(n \log n)\) dominates \(O(n \log k)\) when \(k \leq n\), the total time complexity is \(O(n \log n)\).


# Space Complexity

1. **Auxiliary Space for Pairs**:
   - The function creates an array of pairs from `nums1` and `nums2`, which takes \(O(n)\) space.
   - ```typescript
     const pairs = nums1.map((num1, idx) => [num1, nums2[idx]]);
     ```

2. **Heap Space**:
   - The function uses a min-heap to store at most \(k\) elements, which takes \(O(k)\) space.
   - ```typescript
     let minHeap = new MinHeap();
     ```

3. **Additional Variables**:
   - The function uses a few additional variables (`maxResult`, `currentSum`, etc.) which take \(O(1)\) space.

4. **Total Space Complexity**:
   - Combining all the space used, the overall space complexity is \(O(n + k)\).
   - Since \(k \leq n\), the total space complexity is \(O(n)\).


*/