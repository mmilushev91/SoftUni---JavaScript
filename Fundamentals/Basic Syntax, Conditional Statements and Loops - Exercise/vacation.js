function solve(groupCount, groupType, day) {
  let price;
  
  switch (groupType) {
    case 'Students':
      
      switch (day) {
        case 'Friday':
          price = 8.45;
          break;
          
        case 'Saturday':
          price = 9.80;
          break;
        
        default:
          price = 10.46;
      }
      
    if (groupCount >= 30) {
      price *= 0.85;
    }      
    break;
    
    case 'Business':
      if (groupCount >= 100) {
        groupCount -= 10;
      }
      
      switch (day) {
        case 'Friday':
          price = 10.90;
          break;
          
        case 'Saturday':
          price = 15.60;
          break;
        
        default:
          price = 16;
      }
      break;
      
    
    default:

      switch (day) {
        case 'Friday':
          price = 15;
          break;
          
        case 'Saturday':
          price = 20;
          break;
        
        default:
          price = 22.50;
      }
      
      if (groupCount >= 10 && groupCount <= 20) {
        price *= 0.95;
      }
  }
  
  const totalPrice = groupCount * price;

  console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
