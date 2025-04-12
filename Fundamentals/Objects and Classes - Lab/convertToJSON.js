function solve(firstName, lastName, hairColor) {
  const person = {
    name: firstName,
    lastName: lastName,
    hairColor: hairColor,
  };

  const personJSON = JSON.stringify(person);
  console.log(personJSON);
}

solve("George", "Jones", "Brown");
