function solve() {
  return {
    numbers: [],
    add(num) {
      this.numbers.push(num);
      this.numbers.sort((a, b) => a - b);
      },
    
    remove(idx) {
      if (idx >= 0 && idx < this.numbers.length) {
        this.numbers.splice(idx, 1);
      }
    },
    
    get(idx) {
      if (idx >= 0 && idx < this.numbers.length) {
        return this.numbers[idx];
      }
    },
    
    get size() {
      return this.numbers.length;
    }
    
  }
} 
