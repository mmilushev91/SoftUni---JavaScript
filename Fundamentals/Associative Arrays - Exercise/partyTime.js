function solve(data) {
  function isDigit(digit) {
    return /^\d+$/.test(digit);
  }
  
  const guestLists = {
    VIP: [],
    regular: [],
  }
  
  let index = 0;
  let command = data[index];
  const dataLength = data.length;
  
  while (command !== "PARTY") {
    
    const ticket = command
    
    if (isDigit(ticket[0])) {
      guestLists.VIP.push(ticket);
    } else {
      guestLists.regular.push(ticket)
    }
    
    index++
    command = data[index];  
  }

  index++;
  
  while (index < dataLength) {
    const ticket = data[index];
    const vipIndex = guestLists.VIP.indexOf(ticket);
    const regularIndex = guestLists.regular.indexOf(ticket);
    let type;
    
    if (vipIndex > -1) {
      type = "VIP";
      
    } else if (regularIndex > -1) {
      type = "regular";
    } else {
      continue;
    }
    
    guestLists[type].splice(guestLists[type].indexOf(ticket), 1);
    
    index++;
  }
  
  const noShowUpGuests = guestLists.VIP.length + guestLists.regular.length;
  console.log(noShowUpGuests);
  console.log(guestLists.VIP.join("\n"));
  console.log(guestLists.regular.join("\n"));
}
