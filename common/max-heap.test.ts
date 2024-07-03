import { expect, test, describe } from "bun:test";
import { MaxHeap } from './max-heap'


describe("MaxHeap", () => {

    test('MaxHeap can call insert method', () => {
        const heap = new MaxHeap()
        heap.insert(1)
        heap.insert(2)
        heap.insert(3)
        expect(heap.size()).toBe(3);
    });

    test('MaxHeap can extractMax', () => {
        const heap = new MaxHeap()
        heap.insert(3)
        heap.insert(2)
        heap.insert(1)
        expect(heap.extractMax()).toBe(3);
        expect(heap.size()).toBe(2);
    });

    test('MaxHeap can peek', () => {
        const heap = new MaxHeap()
        heap.insert(3)
        heap.insert(2)
        heap.insert(1)
        expect(heap.peek()).toBe(3);
        expect(heap.size()).toBe(3);
    });

});