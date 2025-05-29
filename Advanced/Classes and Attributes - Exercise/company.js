class Company {
  constructor() {
     this.departments = {};
  }
   
   addEmployee(...args) {
     args.forEach(el => {
       if (!el) {
         throw new Error("Invalid input!");
       }
     });
     
     const [name, salary, position, department] = args;
     
     if (salary < 0) {
       throw new Error("Invalid input!");
     }
     
     if (!this.departments.hasOwnProperty(department)) {
       this.departments[department] = {};
       this.departments[department].totalSalary = 0;
       this.departments[department].workers = 0;
     }
     
     this.departments[department][name] = {salary, position};
     this.departments[department].totalSalary += salary;
     this.departments[department].workers++;
     
     return `New employee is hired. Name: ${name}. Position: ${position}`
   }

   
  bestDepartment() {
    let bestAvgSalary = 0;
    let bestDepartObj = null;
    let bestDepartName = "";
     
    for (const department in this.departments) {
      const currentDepartment = this.departments[department];
       
      const currentAvgSalary = currentDepartment.totalSalary / currentDepartment.workers;
      
      if (currentAvgSalary > bestAvgSalary) {
        bestAvgSalary = currentAvgSalary;
        bestDepartObj = this.departments[department]; 
        bestDepartName = department;
      }
    }
    const output = [`Best Department is: ${bestDepartName}`, `Average salary: ${bestAvgSalary.toFixed(2)}`]
    const objectArr = Object.entries(bestDepartObj).slice(2);
    const sortedObjectArr = objectArr.sort(
      (a, b) => {
        if (a[1].salary === b[1].salary){
          return a[0].localeCompare(b[0]);
        }
        
        return b[1].salary - a[1].salary;
      })
    
    for (const arr of sortedObjectArr) {
      const [name, {salary, position}] = arr;
      output.push(`${name} ${salary} ${position}`)
      
    }
    return output.join("\n");
     
  }
}
