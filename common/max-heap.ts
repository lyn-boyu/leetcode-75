// implements maxHeap 
export class MaxHeap {
    // array
    heap: number[] = []
    // pIdx
    getParentIdx = (i: number) => Math.floor((i - 1) / 2)
    // left child idx
    getLeftChildIdx = (i: number) => i * 2 + 1
    // rightChild idx
    getRightChildIdx = (i: number) => i * 2 + 2
    // get value
    getParent = (i: number) => this.heap[this.getParentIdx(i)]
    // get left value
    getLeftChild = (i: number) => this.heap[this.getLeftChildIdx(i)]
    // get right value
    getRightChild = (i: number) => this.heap[this.getRightChildIdx(i)]
    // swap
    swap = (i: number, j: number) => {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }
    // insert 
    insert = (value: number) => {
        this.heap.push(value)
        this.heapifyUp()
    }
    // heapifyUP
    heapifyUp = () => {
        let idx = this.heap.length
        while (idx > 0 && this.getParent(idx) < this.heap[idx]) {
            this.swap(idx, this.getParentIdx(idx))
            idx = this.getParentIdx(idx)
        }
    }
    // heapifyDown
    heapifyDown = () => {
        let idx = 0
        while (this.getLeftChildIdx(idx) < this.heap.length) {
            let largerChildIndex = this.getLeftChildIdx(idx)
            // find larger idx
            if (this.getRightChildIdx(idx) < this.heap.length &&
                this.getRightChild(idx) > this.getLeftChild(idx)
            ) {
                largerChildIndex = this.getRightChildIdx(idx)
            }
            // breake 
            if (this.heap[idx] >= this.heap[largerChildIndex]) {
                break;
            }
            // swap
            this.swap(largerChildIndex, idx)
            idx = largerChildIndex
        }
    }
    // extractMax
    extractMax = () => {
        if (this.heap.length === 0) return null
        if (this.heap.length === 1) return this.heap.pop()

        const max = this.heap[0]
        this.heap[0] = this.heap.pop()!;
        this.heapifyDown()
        return max

    }
    // peek the max value 
    peek = () => {
        return this.heap[0]
    }
    // return the size of the heap
    size = () => {
        return this.heap.length
    }
}
