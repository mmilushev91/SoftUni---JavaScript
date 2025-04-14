function solve(data) {
  const heroes = [];
  
  for (const line of data) {
    const [name, lv, items] = line.split(" / ");
    
    const hero = {
      Hero: name,
      level: Number(lv),
      items: items,
    }
    heroes.push(hero);
  }
  const sortedHeroes = heroes.sort((a, b) => a.level - b.level)
  for (const hero of sortedHeroes) {
    for (const key in hero) {
      const delimeter = key === "Hero" ? ": " : " => "
      console.log(`${key}${delimeter}${hero[key]}`);
    }
  }
}
