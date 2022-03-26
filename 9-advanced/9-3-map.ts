{
  type Video = {
    title: string;
    author: string;
    description: string;
  };
  // [1, 2].map(item => item * item); // [1, 4]

  type Optional<T> = {
    [P in keyof T]?: T[P];
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: "dog",
  };
  animal.name = "ted";

  const video: ReadOnly<Video> = {
    title: "MadMax",
    author: "ted",
    description: "hello",
  };

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // };

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };
  const video2: Nullable<Video> = {
    title: "Moneyball",
    author: null,
    description: "The story of Oakland A's",
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
