{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<V> = {
    readonly value: V;
    readonly next?: StackNode<V>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;

    constructor(private capacity: number) {}

    get size() {
      return this._size;
    }

    push(value: T): void {
      if (this.size == this.capacity) {
        throw new Error("Stack is full!");
      }

      const node = { value, next: this.head };
      this.head = node;
      this._size++;
    }

    pop(): T {
      if (this.head == null) {
        throw new Error("Empty stack error");
      }
      const lastItem = this.head?.value;
      this.head = this.head.next;

      this._size--;
      return lastItem;
    }
  }

  const stack = new StackImpl<string>(10);

  stack.push("hello");
  stack.push("world");

  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>(10);

  stack2.push(1);
  stack2.push(2);

  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
}
