class Storage {
    constructor(capacity) {
      this.capacity = capacity;
      this.storage = [];
      this.totalCost = this.sumStorage();
    }
    
    sumStorage() {
      const cost = this.storage.reduce((sum, obj) =>  {
        return sum + (obj.price * obj.quantity);
        
      }, 0);
      return cost;
    }
    
    addProduct(product) {
      
      this.storage.push(product);
      this.capacity -= product.quantity;
      this.totalCost = this.sumStorage();
    }
    
    getProducts() {
      const output = [];
      
      for (const obj of this.storage) {
        const jsonObj = JSON.stringify(obj);
        output.push(jsonObj);
      }
      
      return output.join("\n");
    }
}
