
function getPersons() {
  class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }
    
    toString() {
      return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
  }
  const data = [['Anna',	'Simpson',	22,	'anna@yahoo.com'], ['SoftUni'], ['Stephan',	'Johnson',	25], ['Gabriel',	'Peterson',	24,	'g.p@gmail.com']]
  const persons = [];
  
  for (const arr of data) {
    const person = new Person(...arr);
    persons.push(person);
  }
  
  return persons
}
