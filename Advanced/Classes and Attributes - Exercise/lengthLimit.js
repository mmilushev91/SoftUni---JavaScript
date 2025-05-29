class Stringer {
  constructor(innerString, innerLength) {
    this.innerString = innerString;
    this.innerLength = innerLength;
  }
  
  increase(length) {
    this.innerLength += length;
  }
  
  decrease(length) {
    this.innerLength -= length;
    if (this.innerLength < 0) {
      this.innerLength = 0;
    }
  }
  
  toString() {
    let result = this.innerString 
    
    if (!this.innerLength) {
      result = "...";
    } else if (this.innerString.length > this.innerLength) {
      result = this.innerString.slice(0, this.innerString.length - this.innerLength) + "...";
    } 
    
    return result;
  }
}
