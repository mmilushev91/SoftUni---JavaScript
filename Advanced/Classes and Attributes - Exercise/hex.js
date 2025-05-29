class Hex {
    constructor(value) {
      this.value = value;
    }
    
    valueOf() {
      return this.value;
    }
    
    toString() {
      return "0x"+ Number(this.value).toString(16).toUpperCase();
    }
    
    plus(param) {
      if (typeof param === "number") {
        return new Hex(this.value + param);
      }
      
      return new Hex(this.value + param.value);
    }
    minus(param) {
      if (typeof param === "number") {
        return new Hex(Math.abs(this.value - param));
      }
      
      return new Hex(Math.abs(this.value - param.value));
    }
    
    parse(hex) {
      return parseInt(hex, 16);
    }
}
