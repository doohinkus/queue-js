export default class Queue {
  constructor(items = []) {
    this.items = items;
  }
  enqueue(item) {
    let end = 0;
    if (item instanceof Array) {
      end = item.length;
      this.items.push(...item);
    } else {
      this.items.push(item);
    }
    return this.items.slice(0, end);
  }
  dequeue() {
    if (this.items.length > 0) {
      return this.items.shift();
    }
    return this.items;
  }
  peek() {
    return this.items[0] || "queue is empty";
  }
  getItems() {
    return this.items;
  }
}
