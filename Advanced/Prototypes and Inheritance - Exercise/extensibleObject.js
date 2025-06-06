function extensibleObject() { 
  
  return {
    extend(obj) {
      const objPrototype = Object.getPrototypeOf(obj);
      for (const key in obj) {
        if (typeof obj[key] === 'function') {
         objPrototype[key] = obj[key];
        } else {
          this[key] = obj[key]
        }
        
      }
    }
  }
} 
