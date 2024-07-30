// Day 17: Data Structure


// activity 1: Linked list

// task 1: implement a node list class to represent in a linkedin list with properties value and next.

class Node {
   constructor(value, next) {
      this.value = value
      this.next = null
   }
}


// task 2: implement a linkedlist class with methods to add a node to the end, remove a  node from the end, and display all nodes.


class LinkedList {
   constructor() {
      this.head = null;
   }

   add(value) {
      const newNode = new Node(value);
      if (this.head === null) {
         this.head = newNode;
      } else {
         let current = this.head;
         while (current.next !== null) {
            current = current.next;
         }
         current.next = newNode;
      }
   }

   remove() {
      if (this.head === null) {
         console.log("The list is empty.");
         return;
      }

      if (this.head.next === null) {
         this.head = null;
         return;
      }

      // Traverse to the second-to-last node
      let current = this.head;
      while (current.next.next !== null) {
         current = current.next;
      }

      // Remove the last node
      current.next = null;
   }

   // Method to display all nodes in the list
   display() {
      if (this.head === null) {
         console.log("The list is empty.");
         return;
      }

      let current = this.head;
      let result = "";
      while (current !== null) {
         result += current.value + " -> ";
         current = current.next;
      }
      result += "null";
      console.log(result);
   }
}

const list = new LinkedList();
list.add(20);
list.add(30);
list.add(40);
list.display(); // Output: 20 -> 30 -> 40 -> null
list.remove();
list.display(); // Output: 20 -> 30 -> null


// activity 2: Stack

// task 3: implement a stack class with methods push (add element) , pop (remove element) and peek (view the top element)

class Stack {
   constructor() {
      this.items = [];
   }

   // Method to add an element to the stack
   push(element) {
      this.items.push(element);
   }

   // Method to remove and return the top element of the stack
   pop() {
      if (this.isEmpty()) {
         console.log("Stack is empty.");
         return;
      }
      return this.items.pop();
   }

   // Method to view the top element of the stack without removing it
   peek() {
      if (this.isEmpty()) {
         console.log("Stack is empty.");
         return;
      }
      return this.items[this.items.length - 1];
   }

   // Method to check if the stack is empty
   isEmpty() {
      return this.items.length === 0;
   }

   // Method to display all elements in the stack
   display() {
      if (this.isEmpty()) {
         console.log("Stack is empty.");
         return;
      }
      console.log(this.items.join(" -> "));
   }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.display(); // Output: 10 -> 20 -> 30
console.log(stack.peek()); // Output: 30
stack.pop();
stack.display(); // Output: 10 -> 20
console.log(stack.peek()); // Output: 20




// task 4: use the stack class to reverse a string by pushing all characters into the stack and then popping them off.

class Stack {
   constructor() {
      this.items = [];
   }

   // Method to add an element to the stack
   push(element) {
      this.items.push(element);
   }

   // Method to remove and return the top element of the stack
   pop() {
      if (this.isEmpty()) {
         console.log("Stack is empty.");
         return;
      }
      return this.items.pop();
   }

   // Method to view the top element of the stack without removing it
   peek() {
      if (this.isEmpty()) {
         console.log("Stack is empty.");
         return;
      }
      return this.items[this.items.length - 1];
   }

   // Method to check if the stack is empty
   isEmpty() {
      return this.items.length === 0;
   }

   // Method to display all elements in the stack
   display() {
      if (this.isEmpty()) {
         console.log("Stack is empty.");
         return;
      }
      console.log(this.items.join(" -> "));
   }
}

// Function to reverse a string using the Stack class
function reverseString(str) {
   const stack = new Stack();

   // Push all characters of the string onto the stack
   for (let i = 0; i < str.length; i++) {
      stack.push(str[i]);
   }

   // Pop all characters from the stack to form the reversed string
   let reversedStr = "";
   while (!stack.isEmpty()) {
      reversedStr += stack.pop();
   }

   return reversedStr;
}

const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log("Original String: " + originalString);
console.log("Reversed String: " + reversedString);


// activity 3: Queue

// task 5: implement a queue class with methods enqueue (add element), dequeue (remove element), and peek (view the first element)

class Queue {
   constructor() {
      this.items = [];
   }

   // Method to add an element to the end of the queue
   enqueue(element) {
      this.items.push(element);
   }

   // Method to remove and return the first element of the queue
   dequeue() {
      if (this.isEmpty()) {
         console.log("Queue is empty.");
         return;
      }
      return this.items.shift(); // Removes the first element from the array
   }

   // Method to view the first element of the queue without removing it
   peek() {
      if (this.isEmpty()) {
         console.log("Queue is empty.");
         return;
      }
      return this.items[0]; // Returns the first element in the array
   }

   // Method to check if the queue is empty
   isEmpty() {
      return this.items.length === 0;
   }

   // Method to display all elements in the queue
   display() {
      if (this.isEmpty()) {
         console.log("Queue is empty.");
         return;
      }
      console.log(this.items.join(" <- "));
   }
}

// Example usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display(); // Output: 10 <- 20 <- 30
console.log(queue.peek()); // Output: 10
queue.dequeue();
queue.display(); // Output: 20 <- 30
console.log(queue.peek()); // Output: 20


// task 6: use the queue class to simulate a simple printer queue where print jobs arre added to the queue and processed in order.

class Queue {
   constructor() {
      this.items = [];
   }

   // Method to add an element to the end of the queue
   enqueue(element) {
      this.items.push(element);
   }

   // Method to remove and return the first element of the queue
   dequeue() {
      if (this.isEmpty()) {
         console.log("Queue is empty.");
         return;
      }
      return this.items.shift(); // Removes the first element from the array
   }

   // Method to view the first element of the queue without removing it
   peek() {
      if (this.isEmpty()) {
         console.log("Queue is empty.");
         return;
      }
      return this.items[0]; // Returns the first element in the array
   }

   // Method to check if the queue is empty
   isEmpty() {
      return this.items.length === 0;
   }

   // Method to display all elements in the queue
   display() {
      if (this.isEmpty()) {
         console.log("Queue is empty.");
         return;
      }
      console.log(this.items.join(" <- "));
   }
}

// Simulate a simple printer queue
class PrinterQueue {
   constructor() {
      this.queue = new Queue();
   }

   // Add a print job to the queue
   addPrintJob(job) {
      this.queue.enqueue(job);
      console.log(`Print job "${job}" added to the queue.`);
   }

   // Process the next print job in the queue
   processPrintJob() {
      if (this.queue.isEmpty()) {
         console.log("No print jobs to process.");
         return;
      }
      const job = this.queue.dequeue();
      console.log(`Processing print job: "${job}"`);
   }

   // Display the current state of the printer queue
   displayQueue() {
      console.log("Current printer queue:");
      this.queue.display();
   }
}

// Example usage
const printerQueue = new PrinterQueue();

printerQueue.addPrintJob("Document1.pdf");
printerQueue.addPrintJob("Photo2.jpg");
printerQueue.addPrintJob("Report3.docx");

printerQueue.displayQueue(); // Output: Document1.pdf <- Photo2.jpg <- Report3.docx

printerQueue.processPrintJob(); // Output: Processing print job: "Document1.pdf"
printerQueue.processPrintJob(); // Output: Processing print job: "Photo2.jpg"

printerQueue.displayQueue(); // Output: Report3.docx

printerQueue.processPrintJob(); // Output: Processing print job: "Report3.docx"
printerQueue.processPrintJob(); // Output: No print jobs to process.

// activity 4:Binary tree

// task 7: implement a treeNode class to represent a node in a binary tree with properties value,left,and right.

class TreeNode {
   constructor(value) {
      this.value = value; // The value of the node
      this.left = null;  // Pointer to the left child node
      this.right = null; // Pointer to the right child node
   }
}

// Example usage
const rootNode = new TreeNode(10);
rootNode.left = new TreeNode(5);
rootNode.right = new TreeNode(15);

rootNode.left.left = new TreeNode(3);
rootNode.left.right = new TreeNode(7);

rootNode.right.left = new TreeNode(12);
rootNode.right.right = new TreeNode(18);

// Function to display the tree in a pre-order traversal (root, left, right)
function displayTree(node) {
   if (node === null) {
      return;
   }
   console.log(node.value);
   displayTree(node.left);
   displayTree(node.right);
}

// Example usage
console.log("Tree nodes in pre-order:");
displayTree(rootNode);

// task 8 : implement a binarytree class with methods for inserting values and performing in-order traversal to display nodes.

class TreeNode {
   constructor(value) {
      this.value = value; // The value of the node
      this.left = null;  // Pointer to the left child node
      this.right = null; // Pointer to the right child node
   }
}

class BinaryTree {
   constructor() {
      this.root = null; // The root node of the binary tree
   }

   // Method to insert a new value into the binary tree
   insert(value) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
         this.root = newNode; // If the tree is empty, set the new node as the root
      } else {
         this._insertNode(this.root, newNode); // Otherwise, insert the node in the correct position
      }
   }

   // Helper method to insert a node into the binary tree
   _insertNode(node, newNode) {
      if (newNode.value < node.value) {
         // Insert into the left subtree
         if (node.left === null) {
            node.left = newNode;
         } else {
            this._insertNode(node.left, newNode);
         }
      } else {
         // Insert into the right subtree
         if (node.right === null) {
            node.right = newNode;
         } else {
            this._insertNode(node.right, newNode);
         }
      }
   }

   // Method to perform in-order traversal and display nodes
   inOrderTraversal() {
      this._inOrderTraversal(this.root);
      console.log(); // New line after traversal
   }

   // Helper method for in-order traversal
   _inOrderTraversal(node) {
      if (node !== null) {
         this._inOrderTraversal(node.left); // Visit left subtree
         process.stdout.write(node.value + " "); // Visit node
         this._inOrderTraversal(node.right); // Visit right subtree
      }
   }
}

// Example usage
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

console.log("In-order traversal of the binary tree:");
tree.inOrderTraversal(); // Output: 3 5 7 10 12 15 18

// activity 5: Graph

// task 9: implement a graph class with methods to add vertices , add edges, and perform a breadth-first search (BFS)

// class Graph {
//    constructor() {
//       this.adjacencyList = {}; // An object to store the adjacency list
//    }

//    // Method to add a vertex to the graph
//    addVertex(vertex) {
//       if (!this.adjacencyList[vertex]) {
//          this.adjacencyList[vertex] = [];
//       }
//    }

//    // Method to add an edge between two vertices
//    addEdge(vertex1, vertex2) {
//       // Ensure both vertices exist in the graph
//       if (!this.adjacencyList[vertex1]) {
//          this.addVertex(vertex1);
//       }
//       if (!this.adjacencyList[vertex2]) {
//          this.addVertex(vertex2);
//       }

//       // Add the edge in both directions (undirected graph)
//       this.adjacencyList[vertex1].push(vertex2);
//       this.adjacencyList[vertex2].push(vertex1);
//    }

//    // Method to perform breadth-first search (BFS)
//    bfs(startVertex) {
//       if (!this.adjacencyList[startVertex]) {
//          console.log("Start vertex does not exist in the graph.");
//          return;
//       }

//       const visited = new Set(); // Set to keep track of visited vertices
//       const queue = []; // Queue for BFS
//       const result = []; // To store the order of visited vertices

//       // Initialize the BFS
//       queue.push(startVertex);
//       visited.add(startVertex);

//       while (queue.length > 0) {
//          const vertex = queue.shift(); // Dequeue the first vertex
//          result.push(vertex); // Process the vertex

//          // Get all adjacent vertices
//          const neighbors = this.adjacencyList[vertex];
//          for (const neighbor of neighbors) {
//             if (!visited.has(neighbor)) {
//                visited.add(neighbor);
//                queue.push(neighbor);
//             }
//          }
//       }

//       console.log("BFS Order: " + result.join(" -> "));
//    }
// }

// // Example usage
// const graph = new Graph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("B", "D");
// graph.addEdge("C", "D");

// console.log("Graph BFS traversal starting from vertex A:");
// graph.bfs("A"); // Output: BFS Order: A -> B -> C -> D


// task 10: use the graph class to represent a simple network and perform BFS to find the shortest path between two nodes.

class Graph {
   constructor() {
      this.adjacencyList = {}; // An object to store the adjacency list
   }

   // Method to add a vertex to the graph
   addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
         this.adjacencyList[vertex] = [];
      }
   }

   // Method to add an edge between two vertices
   addEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1]) {
         this.addVertex(vertex1);
      }
      if (!this.adjacencyList[vertex2]) {
         this.addVertex(vertex2);
      }
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
   }

   // Method to perform BFS and find the shortest path between two nodes
   shortestPath(startVertex, endVertex) {
      if (!this.adjacencyList[startVertex] || !this.adjacencyList[endVertex]) {
         console.log("One or both of the vertices do not exist.");
         return;
      }

      const visited = new Set(); // Set to keep track of visited vertices
      const queue = [[startVertex]]; // Queue to hold paths, initialized with the start vertex path
      visited.add(startVertex);

      while (queue.length > 0) {
         const path = queue.shift(); // Dequeue the first path
         const vertex = path[path.length - 1]; // Get the last vertex in the path

         // Check if we reached the end vertex
         if (vertex === endVertex) {
            console.log("Shortest path: " + path.join(" -> "));
            return;
         }

         // Explore neighbors
         const neighbors = this.adjacencyList[vertex];
         for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
               visited.add(neighbor);
               queue.push([...path, neighbor]); // Add new path to the queue
            }
         }
      }

      console.log("No path found between " + startVertex + " and " + endVertex);
   }
}

// Example usage
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("D", "E");

console.log("Finding shortest path from A to E:");
graph.shortestPath("A", "E"); // Output: Shortest path: A -> C -> D -> E

console.log("Finding shortest path from A to D:");
graph.shortestPath("A", "D"); // Output: Shortest path: A -> C -> D



