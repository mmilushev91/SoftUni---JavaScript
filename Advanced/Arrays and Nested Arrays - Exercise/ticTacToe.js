function solve(moves) {
  const field = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  const playerMark = {
    0: "X",
    1: "O",
  };
  let currentPlayer = "0";

  for (const move of moves) {
    const [rol, col] = move.split(" ").map(Number);

    if (!field[rol][col]) {
      const mark = playerMark[currentPlayer];
      field[rol][col] = mark;
      //check roll for winner
      if (!checkWinner(field, mark)) {
        if (field.flat().every((cell) => cell !== false)) {
          console.log("The game ended! Nobody wins :(");
          break;
        }
        currentPlayer = currentPlayer === "0" ? "1" : "0";
      } else {
        console.log(`Player ${mark} wins!`);
        break;
      }
    } else {
      console.log("This place is already taken. Please choose another!");
    }
  }

  field.forEach((arr) => console.log(arr.join("\t")));

  function checkWinner(field, mark) {
    // Check rows
    for (let row of field) {
      if (row.every((cell) => cell === mark)) return true;
    }

    // Check columns
    for (let col = 0; col < 3; col++) {
      if (
        field[0][col] === mark &&
        field[1][col] === mark &&
        field[2][col] === mark
      ) {
        return true;
      }
    }

    // Check diagonals
    if (
      (field[0][0] === mark && field[1][1] === mark && field[2][2] === mark) ||
      (field[0][2] === mark && field[1][1] === mark && field[2][0] === mark)
    ) {
      return true;
    }

    return false;
  }
}

solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);
