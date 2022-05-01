# Queue JS

## What is Queue JS?

This library has a Queue with the following methods: enqueue and dequeue. Enqueue adds item(s) to end of the Queue. Dequeue removes and returns the first item from the beginning of the queue.

## Why?

Many algorithms use FIFO queues. Although javascript has build in methods for FIFO, the terms seem somewhat cryptic to me. Whenever I needed to add a queue, I found myself seraching MDN for the correct array methods. As a result, I decided to write a very simple library / adapter to cimply the process. Now when I want to use a queue, I can simple install this package.

## How to install

Import the package from npm

```
npm install <packge>
```

Import the package into your project.

## Use the Queue

### To make a new, empty queue:

```
const queue = new Queue();
```

### To create a new queue with multiple items:

```
const queue = new Queue(["item", "item", "more items]);
```

### Dequeue item:

```
queue.dequeu();
```

### Dequeue item and get it's value:

```
const lastItem = queue.dequeu();
```

### Enqueue single item:

```
queue.enqueue("item")
```

### Enqueue multiple items:

```
queue.enqueue(["item", "item"])
```

### Get items in the queue

```
queue.getItems()
```

Also:

```
queue.items
```
