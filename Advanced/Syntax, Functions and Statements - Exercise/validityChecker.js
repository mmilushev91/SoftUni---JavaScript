function solve(x1, y1, x2, y2) {
  const cords = [[x1, y1, 0, 0], [x2, y2, 0, 0], [x1, y1, x2, y2] ];
  
  for (let i = 0; i < 3; i++) {
    const [p1, p2, p3, p4] = cords[i];
    const distance = calcDistance(p1, p2, p3, p4);
    const result = distance === Math.floor(distance) ? "valid" : "invalid";
    console.log(`{${p1}, ${p2}} to {${p3}, ${p4}} is ${result}`)
  }

  function calcDistance(p1, p2, p3, p4) {
    return Math.sqrt((p3 - p1) ** 2 + (p4 - p2) ** 2);
  }

}
