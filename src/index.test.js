import { Queue } from "./index";

test("creates a queue with one item", () => {
  const queue = new Queue();
  const item = 0;
  queue.enqueue(item);
  expect(queue.items).toEqual([item]);
});
test("creates a queue with multiple items", () => {
  const queue = new Queue();
  const items = [0, 1, 2, 3];
  queue.enqueue(items);
  expect(queue.items).toEqual(items);
});

test("dequeues item correctly", () => {
  const queue = new Queue();
  const items = [0, 1, 2, 3];
  queue.enqueue(items);
  const firstItem = queue.dequeue();
  expect(firstItem).toEqual(0);
  expect(queue.items).toEqual([1, 2, 3]);
  queue.dequeue();
  expect(queue.items).toEqual([2, 3]);
  queue.dequeue();
  expect(queue.items).toEqual([3]);
  queue.dequeue();
  expect(queue.items).toEqual([]);
  queue.dequeue();
  expect(queue.items).toEqual([]);
});

test("gets multiple items from queue", () => {
  const queue = new Queue();
  const items = [0, 1, 2, 3];
  queue.enqueue(items);
  const fetchedItems = queue.getItems();
  expect(fetchedItems).toEqual(items);
});
test("gets single item from queue", () => {
  const queue = new Queue();
  queue.enqueue(0);
  const fetchedItems = queue.getItems();
  expect(fetchedItems).toEqual([0]);
  queue.dequeue();
  expect(queue.getItems()).toEqual([]);
  queue.dequeue();
  expect(queue.getItems()).toEqual([]);
});
