// Template for linked list node class
class LinkedListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// Template for the linked list
class LinkedList {
    constructor() {
        this.head = null;

        // insertNodeAtHead method will insert a LinkedListNode at head
        // of a linked list.
        this.insertNodeAtHead = function (node) {
            if (this.head != null) {
                node.next = this.head;
                this.head = node;
            } else this.head = node;
        };

        // createLinkedList method will create the linked list using the
        // given integer array with the help of InsertAthead method.
        this.createLinkedList = function (list) {
            list.reverse().forEach((element) => {
                let newNode = new LinkedListNode(element);
                this.insertNodeAtHead(newNode);
            });
        };

        // This method will display the elements of the linked list.
        this.display = function () {
            let result = "",
                temp = this.head;
            while (temp != null) {
                result += temp.data;
                temp = temp.next;
                if (temp != null) {
                    result += ", ";
                }
            }
            result += "";
            return result;
        };
    }
}


function removeNthLastNode(head, n) {

    // Point two pointers, right and left, at head.
    let right = head;
    let left = head;

    // Move right pointer n elements away from the left pointer.
    for (let i = 0; i < n; i++) {
        right = right.next;
    }

    // Removal of the head node.
    if (!right) {
        return head.next;
    }

    // Move both pointers until right pointer reaches the last node.
    while (right.next != null) {
        right = right.next;
        left = left.next;
    }

    // At this point, left pointer points to (n-1)th element.
    // So link it to next to next element of left.
    left.next = left.next.next;

    return head;
}


// Template for printing the linked list with forward arrows
function printListWithForwardArrow(linkedListNode) {
    let temp = linkedListNode;
    let result = "";
    while (temp != null) {
        result += temp.data;
        temp = temp.next;
        if (temp != null) result += " → ";
        // if this is the last node, print null at the end
        else result += " → null";
    }
    return result;
}

// Driver Code
function main() {
    const inputs = [
        [23, 89, 10, 5, 67, 39, 70, 28],
        [34, 53, 6, 95, 38, 28, 17, 63, 16, 76],
        [288, 224, 275, 390, 4, 383, 330, 60, 193],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [69, 8, 49, 106, 116, 112, 104, 129, 39, 14, 27, 12]
    ];

    const n = [4, 1, 6, 9, 11];

    for (let i = 0; i < inputs.length; i++) {
        const inputLinkedList = new LinkedList();
        inputLinkedList.createLinkedList(inputs[i]);
        console.log((i + 1) + ".\tLinked List:\t\t", printListWithForwardArrow(inputLinkedList.head));
        console.log("\tn = " + n[i]);
        let result = removeNthLastNode(inputLinkedList.head, n[i]);
        console.log("\tUpdated Linked List:\t", printListWithForwardArrow(result));
        console.log("-".repeat(100));
    }
}


main();