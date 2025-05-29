class List {
  
  constructor() {
    this.numbers = [];
    this.size = 0;
  }
  
  add(num) {
    this.numbers.push(num);
    this.numbers.sort((a, b) => a - b);
    this.size = this.numbers.length;
    return this;
  }
  
  
  remove(index) {
    if (index < 0 || index >= this.numbers.length) {
      throw new Error("Error");
    }
    
    this.numbers.splice(index, 1);
    this.size = this.numbers.length;
    return this;
  }
  
  get(index) {
    if (index < 0 || index >= this.numbers.length) {
      throw new Error("Error");
    }
    
    return this.numbers[index];
  }
  
}
