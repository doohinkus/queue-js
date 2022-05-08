# Queue You JS

[![Build Status](https://app.travis-ci.com/doohinkus/queue-js.svg?branch=master)](https://app.travis-ci.com/doohinkus/queue-js)

## What is Queue JS?

This library has a Queue with the following methods: enqueue and dequeue. Enqueue adds item(s) to end of the Queue. Dequeue removes and returns the first item from the beginning of the queue.

## Why?

Many algorithms use FIFO queues. Although javascript has build in methods for FIFO, the terms seem somewhat cryptic to me. Whenever I needed to add a queue, I found myself searching MDN for the correct array methods. As a result, I decided to write a very simple library / adapter to make working with queues a little easier. Now when I want to use a queue, I can simple install this package.

## How to install

Import the package from npm

```
npm install queue-you-js
```

Import the package into your project.

## Use the Queue

```
var {Queue} = require('queue-you-js');
```

OR

```
import { Queue } from 'queue-you-js';
```

### To make a new, empty queue:

```
const queue = new Queue();
```

### To create a new queue with multiple items:

```
const queue = new Queue(["item", "item", "more items"]);
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
