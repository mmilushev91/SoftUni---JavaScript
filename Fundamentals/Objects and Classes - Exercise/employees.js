function solve(data) {
  const employeesInfo = {};
  data.forEach(person => employeesInfo[person] = person.length);
  
  for (const person in employeesInfo) {
    console.log(`Name: ${person} -- Personal Number: ${employeesInfo[person]}`)
  }
}
