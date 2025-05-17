function colorize() {
  const rows = document.getElementsByTagName("tr");
  const rowsLength = rows.length;

  for (let i = 1; i < rowsLength; i += 2) {
    rows[i].style.backgroundColor = "teal";
  }
}
