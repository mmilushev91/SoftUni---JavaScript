function solve(data) {
  const heroes = [];
  for (const line of data) {
    let [name, level, items] = line.split(" / ");
    if (!name) {
      continue;
    }
    level = Number(level);
    items = items ? items.split(", ") : [];
    heroes.push({name, level, items})
  }
  console.log(JSON.stringify(heroes))
}
