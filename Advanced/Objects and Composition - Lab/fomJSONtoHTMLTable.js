function jsonToHtmlTable(json) {
  let arr = JSON.parse(json);
  let outputArr = ["<table>"];

  outputArr.push(makeKeyRow(arr));
  arr.forEach((obj) => outputArr.push(makeValueRow(obj)));

  outputArr.push("</table>");

  function makeKeyRow(arr) {
    const keys = Object.keys(arr[0]);
    let line = `    <tr>`;
    keys.forEach((key, i) => {
      line += `<th>${escapeHtml(key)}</th>`;
      if (i === keys.length - 1) {
        line += "</tr>";
      }
    });

    return line;
  }
  function makeValueRow(obj) {
    const values = Object.values(obj);
    let line = `    <tr>`;
    values.forEach((value, i) => {
      line += `<td>${escapeHtml(value)}</td>`;
      if (i === values.length - 1) {
        line += "</tr>";
      }
    });
    return line;
  }
  function escapeHtml(str) {
    let entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
    };
    return str.replace(/[&<>"'\/]/g, (s) => entityMap[s]);
  }
  console.log(outputArr.join("\n"));
}
solve('[{"Name":"Stamat",

    "Score":5.5},

   {"Name":"Rumen",

    "Score":6}]')
