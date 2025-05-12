function solve(studentInfo) {
  const studentInfoArr = JSON.parse(studentInfo);
  const studentInfoArrLength = studentInfoArr.length;
  const tableHeaders = Object.keys(studentInfoArr[0]);
  const tableHeadersLength = tableHeaders.length;
  const table = []

  for (let i = 0; i < studentInfoArrLength; i++) {
    let row = "    <tr>";
    if (i === 0) {
      let tableHeader = "    <tr>";
      table.push("<table>");
      
      tableHeaders.forEach(key => {
        tableHeader += `<th>${key}</th>`
      })
      
      tableHeader+="</tr>"
      table.push(tableHeader);
      
    }
    
    tableHeaders.forEach(key => {
      row += `<td>${studentInfoArr[i][key]}</td>`
      })
      
    row+="</tr>"
    table.push(row);

    if (i === studentInfoArrLength - 1) {
      table.push("</table>")
    }
    
  }
  
  console.log(table.join("\n"))
  
}
