{
  // Array
  const fruits: string[] = ["🍅", "🍌"];
  const scores: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {}

  // Tuple -> Recommend to use interface, type alias, class
  let student: [string, number];
  student = ["name", 18];
  student[0];
  student[1];
  const [name, age] = student;
}
