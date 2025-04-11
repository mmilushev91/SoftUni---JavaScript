function solve(array) {
  let gladiatorInvetory = array.splice(0, 1)[0].split(" ");
  
  for (item of array) {
    
    let commnadInfo = item.split(" ")
    
    let command = commnadInfo[0];
    let equipment = commnadInfo[1]
    let upgradeInfo;
    let equipmentIndex;
    switch (command) {
      
      case 'Buy':
        
        if (!gladiatorInvetory.includes(equipment)) {
          gladiatorInvetory.push(equipment);
        }
        break;
      
      case "Trash":
        if (gladiatorInvetory.includes(equipment)) {
          equipmentIndex = gladiatorInvetory.indexOf(equipment);
          gladiatorInvetory.splice(equipmentIndex, 1);
        }
        break;
      case "Repair":
        if (gladiatorInvetory.includes(equipment)) {
          equipmentIndex = gladiatorInvetory.indexOf(equipment);
          gladiatorInvetory.push(gladiatorInvetory.splice(equipmentIndex, 1)[0]);
        }
        break;
      case "Upgrade":
        upgradeInfo = equipment.split("-");
        if (gladiatorInvetory.includes(upgradeInfo[0])) {
          equipmentIndex = gladiatorInvetory.indexOf(upgradeInfo[0]);
          gladiatorInvetory.splice(equipmentIndex + 1, 0, `${upgradeInfo[0]}:${upgradeInfo[1]}`);
        }
    }
  }
  console.log(gladiatorInvetory.join(" "))  
}
