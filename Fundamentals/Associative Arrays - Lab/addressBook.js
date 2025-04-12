function solve(arr) {
  const addressBook = {};

  arr.forEach((line) => {
    const [name, address] = line.split(":");
    addressBook[name] = address;
  });

  const sortedAddressBook = Object.entries(addressBook).sort(
    ([nameA, addressA], [nameB, addressB]) => nameA.localeCompare(nameB)
  );

  for (const [name, address] of sortedAddressBook) {
    console.log(`${name} -> ${address}`);
  }
}

solve([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
