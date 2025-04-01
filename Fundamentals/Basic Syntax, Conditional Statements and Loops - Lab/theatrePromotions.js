function solve(dayType, age) {
  
  if (age < 0 || age > 122) {
    console.log("Error!");
    return;
  }
  
  let price;
  
  switch (dayType) {
    case 'Weekday':
      
      if (age <= 18 || age > 64) {
        price = 12;
      }
      
      else {
        price = 18;
      }
      
      break;
      
    case 'Weekend':
      
      if ( age <= 18 || age > 64) {
        price = 15;
        
      }
      
      else {
        price = 20;
      }
      
      break;
    
    default:
    
      if (age <= 18) {
        price = 5;
      }
      
      else if (age <= 64) {
        price = 12;
      }
      
      else {
        price = 10;
      }
  }
  
  console.log(`${price}$`)
}
