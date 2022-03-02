interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }

  push(value: string): void {
    if (this.size == this.capacity) {
      throw new Error("Stack is full!");
    }

    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): string {
    if (this.head == null) {
      throw new Error("Empty stack error");
    }
    const lastItem = this.head?.value;
    this.head = this.head.next;

    this._size--;
    return lastItem;
  }
}

const stack = new StackImpl(10);

stack.push("hello");
stack.push("world");

while (stack.size !== 0) {
  console.log(stack.pop());
}
