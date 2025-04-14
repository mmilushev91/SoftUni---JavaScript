function solve(data) {
  const getCarNumberDigits = (carNumber) =>
    Number(carNumber.split("").slice(2, 6).join(""));
  const carNumbers = [];
  const operations = {
    IN(carNumber) {
      carNumbers.push(carNumber);
    },
    OUT(carNumber) {
      const carNumberIndex = carNumbers.indexOf(carNumber);
      carNumbers.splice(carNumberIndex, 1);
    },
  };

  for (const line of data) {
    const [command, carNumber] = line.split(", ");
    operations[command](carNumber);
  }

  if (!carNumbers.length) {
    console.log("Parking Lot is Empty");
    return;
  }

  const sortedCarNumbers = carNumbers.sort(
    (a, b) => getCarNumberDigits(a) - getCarNumberDigits(b)
  );

  console.log(sortedCarNumbers.join("\n"));
}

solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);

solve(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
