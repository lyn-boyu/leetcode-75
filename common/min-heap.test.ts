import { expect, test, describe } from "bun:test";
import { MinHeap } from './min-heap'


describe("Min Heap", () => {

    test('minheap can call insert method', () => {
        const heap = new MinHeap()
        heap.insert(1)
        heap.insert(2)
        heap.insert(3)
        expect(heap.size()).toBe(3);
    });

    test('minheap can extractMin', () => {
        const heap = new MinHeap()
        heap.insert(3)
        heap.insert(2)
        heap.insert(1)
        expect(heap.extractMin()).toBe(1);
    });

    test('minheap can peek', () => {
        const heap = new MinHeap()
        heap.insert(3)
        heap.insert(2)
        heap.insert(1)
        expect(heap.peek()).toBe(1);
        expect(heap.size()).toBe(3);
    });

});