import { Queue } from "./index";

test("creates a queue with one item", () => {
  const queue = new Queue();
  const item = 0;
  queue.enqueue(item);
  expect(queue.items).toEqual([item]);
});
test("creates a queue with multiple items", () => {
  //   const queue = new Queue();
  //   const items = [0, 1, 2, 3];
  //   queue.enqueue(items);
  //   console.log(queue);
  //   expect(queue.items).toBe(items);
});
