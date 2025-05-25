function generateReport() {
  const output = document.getElementById("output");
  const headers = Array.from(document.querySelectorAll("thead tr th"));
  const rows = Array.from(document.querySelectorAll("tbody tr"));

  // Get the indexes and names of the checked columns
  const selectedColumns = headers
    .map((th, index) => {
      const checkbox = th.querySelector("input");
      return checkbox && checkbox.checked
        ? { name: checkbox.name, index }
        : null;
    })
    .filter((col) => col !== null);

  const result = [];

  for (const row of rows) {
    const cells = row.querySelectorAll("td");
    const obj = {};

    for (const col of selectedColumns) {
      obj[col.name] = cells[col.index].textContent.trim();
    }

    result.push(obj);
  }

  output.value = JSON.stringify(result, null, 2); // formatted JSON
}
