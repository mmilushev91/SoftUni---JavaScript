function solve(data, criteria) {
  const dataArr = JSON.parse(data);
  let printArr = dataArr;
  
  if (criteria !== "all") {
    const [prop, value] = criteria.split("-");
    const filteredArr = printArr.filter(obj => obj[prop] === value);
    sortedDataArr = filteredArr.sort((a, b) => a[prop].localeCompare(b[prop]));
    printArr = sortedDataArr;
  }
  
  printEmployees(printArr)
  
  function printEmployees(arr) {
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
      const obj = arr[i];
      console.log(`${i}. ${obj.first_name} ${obj.last_name} - ${obj.email}`)
    }
  }
}
