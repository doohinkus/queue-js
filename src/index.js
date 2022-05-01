export class Queue {
  constructor(_array = []) {
    this._array = _array;
  }
  enqueue(item) {
    let end = 0;
    if (item instanceof Array) {
      end = item.length;
      this._array.unshift(...item);
    } else {
      this._array.unshift(item);
    }
    return this._array.slice(0, end);
  }
  dequeue() {
    return this._array.shift();
  }
  getItems() {
    return this.items;
  }
}
