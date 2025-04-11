function solve(array) {

  let guests = [];
  
  for (let item of array) {
    let itemData = item.split(" ");
    
    if (itemData.length == 3) {
      
      if (guests.includes(itemData[0])) {
        console.log(`${itemData[0]} is already in the list!`)
        
      } else {
        guests.push(itemData[0])
      }
    } else {
      
       if (guests.includes(itemData[0])) {
         
         let indexToRemove = guests.indexOf(itemData[0]);
         guests.splice(indexToRemove, 1);
        
        
      } else {
        console.log(`${itemData[0]} is not in the list!`)
    }
  }
  }
  
  console.log(guests.join("\n"));
  

}
