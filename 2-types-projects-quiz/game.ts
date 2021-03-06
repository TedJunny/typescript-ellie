/**
 * Let's make a game 🕹
 */

type Direction = "up" | "down" | "left" | "right";
const position = { x: 0, y: 0 };

function move(direction: Direction) {
  switch (direction) {
    case "up":
      position.y += 1;
      return;
    case "down":
      position.y -= 1;
      return;
    case "left":
      position.x -= 1;
      return;
    case "right":
      position.x += 1;
      return;
    default:
      const invalid: never = direction;
      throw new Error(`Incorrect direction: ${invalid}`);
  }
}

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
