
/** Definition for singly-linked list. */
export class ListNode {
    /** val is the value of the node */
    val: number;

    /** next is a reference to the next node in the list */
    next: ListNode | null;

    /** constructor initializes the node with a value and a reference to the next node */
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }

    //get length of the linked list
    static length(head: ListNode | null): number {
        let length = 0;
        let current = head;
        while (current) {
            length++;
            current = current.next;
        }
        return length;
    }

    /**  createFromArray creates a linked list from an array of numbers */
    static createFromArray(arr: number[]): ListNode | null {
        if (arr.length === 0) return null;

        const head = new ListNode(arr[0]);
        let current = head;
        for (let i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
        return head;
    }

    /**  convert a linked list to an array of numbers */
    static toArray(head: ListNode | null): number[] {
        const result: number[] = [];
        let current = head;
        while (current) {
            result.push(current.val);
            current = current.next;
        }
        return result;
    }
}


