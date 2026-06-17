type Coord = {
  x: number;
  y: number;
};

// function display(coord: { x: number; y: number }) {
function display(coord: Coord) {
  console.log("x coordinate : " + coord.x);
  console.log("y coordinate : " + coord.y);
}

display({ x: 5, y: 6 });
