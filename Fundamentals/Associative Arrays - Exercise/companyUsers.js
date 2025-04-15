function solve(data) {
  const companies = {};
  
  for (const line of data) {
    const [company, empId] = line.split(" -> ");
    
    if (!companies.hasOwnProperty(company)) {
      companies[company] = new Set();
    }
    
    companies[company].add(empId);
  }
  
  const sortedCompanies = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));
  
  for (const line of sortedCompanies) {
    const [company, employes] = line;
    console.log(company)
   
    console.log(`-- ${[...employes].join("\n-- ")}`);
  }
  
}
