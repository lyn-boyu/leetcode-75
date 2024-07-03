/**

2336. Smallest Number in Infinite Set - Medium

https://leetcode.com/problems/smallest-number-in-infinite-set/description/

You have a set which contains all positive integers [1, 2, 3, 4, 5, ...].
Implement the SmallestInfiniteSet class:

- SmallestInfiniteSet() Initializes the SmallestInfiniteSet object to contain all positive integers.
- int popSmallest() Removes and returns the smallest integer contained in the infinite set.
- void addBack(int num) Adds a positive integer num back into the infinite set, if it is not already in the infinite set.
 

Example 1
 - Input:
["SmallestInfiniteSet", "addBack", "popSmallest", "popSmallest", "popSmallest", "addBack", "popSmallest", "popSmallest", "popSmallest"]
[[], [2], [], [], [], [1], [], [], []]
- Output
[null, null, 1, 2, 3, null, 1, 4, 5]

Explanation
SmallestInfiniteSet smallestInfiniteSet = new SmallestInfiniteSet();
smallestInfiniteSet.addBack(2);    // 2 is already in the set, so no change is made.
smallestInfiniteSet.popSmallest(); // return 1, since 1 is the smallest number, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 2, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 3, and remove it from the set.
smallestInfiniteSet.addBack(1);    // 1 is added back to the set.
smallestInfiniteSet.popSmallest(); // return 1, since 1 was added back to the set and
                                   // is the smallest number, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 4, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 5, and remove it from the set.
 

Constraints:
1 <= num <= 1000
At most 1000 calls will be made in total to popSmallest and addBack.

*/


/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
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

export class SmallestInfiniteSet {
    // Min-heap to store the current smallest positive numbers
    private minHeap = new MinHeap();

    // Set to keep track of numbers that have been popped
    private poppedNumbers = new Set<number>();

    // Array to keep track of the current range of positive numbers [currentMin, +Infinity]
    private currentRange = [1, Number.POSITIVE_INFINITY];

    // Pop the smallest number from the set
    popSmallest(): number {
        // Check if the heap is empty and insert the next positive number if needed
        if (this.minHeap.size() === 0) {
            const next = this.getNextPositiveNum();
            this.minHeap.insert(next);
        }

        // Extract the smallest number from the heap
        const min = this.minHeap.extractMin();
        this.poppedNumbers.add(min!);
        return min!;
    }

    // Get the next positive number from the current range
    private getNextPositiveNum(): number {
        const [min] = this.currentRange;
        this.currentRange[0] += 1;
        return min;
    }

    // Add back a previously popped number to the set
    addBack(num: number): void {
        // Ignore if the number is bigger than or equal to the current smallest positive number
        if (num >= this.currentRange[0]) {
            return;
        }
        // Add the number back to the heap if it was previously popped
        if (this.poppedNumbers.has(num)) {
            this.minHeap.insert(num);
            this.poppedNumbers.delete(num);
        }
    }
}
