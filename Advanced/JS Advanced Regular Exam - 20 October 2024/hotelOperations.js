class Hotel {
  constructor(initialBudget) {
    this.initialBudget = initialBudget;
    this.roomAvailability = {};
    this.supplyStock = {};
  }
  
  restockSupplies(supplies) {
    const splitSupply = (supp) => supp.split(" ").map(el => {
      
        if (Number.isNaN(Number(el))) {
          return el;
        }
        
        return Number(el);
      });
    const message = [];
    
    
    for (const supply of supplies) {
      
      const [supplyName, supplyQuantity, supplyTotalPrice] = splitSupply(supply);
      let currentMessage;
      
      if (supplyTotalPrice > this.initialBudget) {
        currentMessage = `There was not enough money to restock ${supplyQuantity} ${supplyName}`;
      }
      
      else {
      
        if (!this.supplyStock.hasOwnProperty(supplyName)) {
          this.supplyStock[supplyName] = 0;
        }
        this.supplyStock[supplyName] += supplyQuantity;
        this.initialBudget -= supplyTotalPrice;
        
        currentMessage = `Successfully stocked ${supplyQuantity} ${supplyName}`;
      }
      
      message.push(currentMessage);
      
    }
    
    return message.join("\n");
  }
  
  addRoomType(roomType, neededSupplies, pricePerNight) {
    
    if (this.roomAvailability.hasOwnProperty(roomType)) {
      return `The ${roomType} is already available in our hotel, try something different.`;
    }
    
    this.roomAvailability[roomType] = {};
    this.roomAvailability[roomType]['neededSupplies'] = {}
    
    for (const supply of neededSupplies) {
      const [name, quantity] = supply.split(" ");
      this.roomAvailability[roomType]['neededSupplies'][name] = Number(quantity);
    }
    
    this.roomAvailability[roomType]['pricePerNight'] = pricePerNight;
    let roomsCounter = 0;
    
    for (const key in this.roomAvailability) {
      roomsCounter++;
    }
    
    
    return `Great idea! Now with the ${roomType}, we have ${roomsCounter} types of rooms available, any other ideas?`;
    
  }
  
  showAvailableRooms() {
    const message = [];
    
    for (const key in this.roomAvailability) {
      message.push(`${key} - $ ${this.roomAvailability[key].pricePerNight}`)
    }
    
    if (!message.length) {
      return "Our rooms are not ready yet, please come back later...";
    }
    
    return message.join("\n");
  }
  
  bookRoom(roomType) {
    if (!this.roomAvailability.hasOwnProperty(roomType)) {
      return `There is no ${roomType} available, would you like to book another room?`;
    }
    
    const roomObj = this.roomAvailability[roomType];
    
    for (const key in roomObj.neededSupplies) {
      
      if (!this.supplyStock.hasOwnProperty(key) || this.supplyStock[key] < roomObj.neededSupplies[key]) {
        return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`
      }
    }
    
    return `Your booking for ${roomType} has been confirmed! The price is $${roomObj.pricePerNight} per night.`
  }
}
