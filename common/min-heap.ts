export class MinHeap {
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

