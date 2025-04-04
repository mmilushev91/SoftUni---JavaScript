function solve(arr) {
  const rooms = arr.split("|")
  const roomsCount = rooms.length;
  
  let health = 100;
  let coins = 0;
  let gameOver = false;
  
  for (let i = 0; i < roomsCount; i++) {
    let [encounter, value] = rooms[i].split(" ");
    value = Number(value);
    
    switch (encounter) {
      case 'potion':
        let healedAmount = value;
        
        if (value + health > 100) {
          healedAmount = 100 - health;
        }
        
        health += healedAmount;
        console.log(`You healed for ${healedAmount} hp.`);
        console.log(`Current health: ${health} hp.`);
        break;
      
      case 'chest': 
        coins += value;
        console.log(`You found ${value} coins.`);
        break
        
      default:
        health -= value;
        
        if (health <= 0) {
          gameOver = true;
          console.log(`You died! Killed by ${encounter}.`);
          console.log(`Best room: ${i+1}`);
          return;
        }
        
        console.log(`You slayed ${encounter}.`);
    }
  }
  
  console.log("You've made it!");
  console.log(`Coins: ${coins}`);
  console.log(`Health: ${health}`);
  
}
