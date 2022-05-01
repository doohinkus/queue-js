export class Queue {
  constructor(items = []) {
    this.items = items;
  }
  enqueue(item) {
    let end = 0;
    if (item instanceof Array) {
      end = item.length;
      this.items.unshift(...item);
    } else {
      this.items.unshift(item);
    }
    return this.items.slice(0, end);
  }
  dequeue() {
    return this.items.shift();
  }
  getItems() {
    return this.items;
  }
}
