function solve(y, m, d) {
  const date = new Date(`${y}-${m}-${d}`);
  date.setDate(date.getDate() - 1)
  
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  
  console.log(`${year}-${month + 1}-${day}`)
}
