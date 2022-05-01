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
    if (this.items.length > 0) {
      return this.items.shift();
    }
    return this.items;
  }
  getItems() {
    return this.items;
  }
}
