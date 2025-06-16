class BikeRentalService {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.availableBikes = [];
  }
  
  addBikes(bikes) {
    const brands = new Set();
    
    for (const bike of bikes) {
      const [brand, quantity, price] = bike.split("-").map(el => {
        if ( Number.isFinite(Number(el))) {
          return Number(el);
        }
        
        return el;
      });
      
      const founBrand = this.availableBikes.find(obj => obj.brand === brand);
     
      brands.add(brand)
      if (!founBrand) {
        this.availableBikes.push({brand, quantity, price});
        
      }
      
      else {
        founBrand.quantity += quantity;
        
        if (founBrand.price < price) {
          founBrand.price = price;
        }
      }
      
    }
    
    return `Successfully added ${[...brands].join(", ")}`
  }
  
  rentBikes(selectedBikes) {
    let totalPrice = 0;
    for (const bike of selectedBikes) {
      let [brand, quantity] = bike.split("-");
      quantity = Number(quantity);
      
      const bikeObj = this.availableBikes.find(obj => obj.brand === brand);
     
      if (!bikeObj || bikeObj.quantity < quantity) {
        return `Some of the bikes are unavailable or low on quantity in the bike rental service.`;
      }
      
      bikeObj.quantity -= quantity;
      const price = quantity * bikeObj.price;
      totalPrice += price;
    }
    
    return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`
  }
  
  returnBikes (returnedBikes) {
    for (const bike of returnedBikes) {
      let [brand, quantity] = bike.split("-");
      
      const bikeObj = this.availableBikes.find(obj => obj.brand === brand);
      
      if (!bikeObj) {
        return "Some of the returned bikes are not from our selection.";
      }
    }
    
    for (const bike of returnedBikes) {
      let [brand, quantity] = bike.split("-");
      
      const bikeObj = this.availableBikes.find(obj => obj.brand === brand);
      
      bikeObj.quantity += Number(quantity);
    }
    
    return "Thank you for returning!";
  
  }
  
  revision () {
    const output = ["Available bikes:"];
    
    const sortedAvailableBikes = this.availableBikes.sort((a, b) => a.price - b.price);
    
    sortedAvailableBikes.forEach(bike => {
      const {brand, quantity, price} = bike;
      output.push(`${brand} quantity:${quantity} price:$${price}`);
    })
    
    output.push(`The name of the bike rental service is ${this.name}, and the location is ${this.location}.`);
    
    return output.join("\n");
  }
}




