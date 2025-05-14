function jsonToHtmlTable(json) {
  let arr = JSON.parse(json);
  let outputArr = ["<table>"];

  outputArr.push(makeKeyRow(arr));
  arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
  
  outputArr.push("</table>");
  
  function makeKeyRow(arr) { 
    const keys = Object.keys(arr[0]);
    let line = `    <tr>`
    keys.forEach((key, i) => {
      line += `<th>${key}</th>`
      if (i === keys.length - 1) {
        line += "</tr>"
      }
    })
    
    return line;
  }
  function makeValueRow(obj) {
     const values = Object.values(obj);
    let line = `    <tr>`
    values.forEach((value, i) => {
      line += `<td>${value}</td>`
      if (i === values.length - 1) {
        line += "</tr>"
      }
    })
    return line;
  }
  function escapeHtml(value) { };
  console.log(outputArr.join('\n'));
}
