function solution() {
  class Employee {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.salary = 0;
      this.tasks = [];
      this.index = 0;  // Add index as a property to persist its value
    }

    work() {
      const currentTask = this.tasks[this.index];
      this.index = (this.index + 1) % this.tasks.length;  // Loop back to 0 when exceeding task length
      console.log(currentTask);
    }

    collectSalary() {
      console.log(`${this.name} received ${this.salary} this month.`);
    }
  }

  class Junior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks = [`${this.name} is working on a simple task.`];
    }
  }

  class Senior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks = [
        `${this.name} is working on a complicated task.`,
        `${this.name} is taking time off work.`,
        `${this.name} is supervising junior workers.`
      ];
    }
  }

  class Manager extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks = [`${this.name} scheduled a meeting.`, `${this.name} is preparing a quarterly report.`];
      this.dividend = 0;
    }

    collectSalary() {
      console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
    }
  }

  return {
    Employee,
    Junior,
    Senior,
    Manager,
  };
}
