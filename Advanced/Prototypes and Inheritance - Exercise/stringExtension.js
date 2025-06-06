(function solve() {
  
  String.prototype.ensureStart = function(str){
    if (!this.valueOf().startsWith(str)) {
      return str + this.valueOf();
    }
    
    return this.valueOf()
  }
  
  String.prototype.ensureEnd = function(str){
    if (!this.valueOf().endsWith(str)) {
      return this.valueOf() + str;
    }
    
    return this.valueOf()
  }
  String.prototype.isEmpty = function() {
    return !this.valueOf(); // Directly returning the result
  }
  
  String.prototype.truncate = function(n) {
    const stringValue = this.valueOf();
    
    if (stringValue.length <= n) {
      return stringValue;
    }
    
    if (stringValue.includes(" ")) {
      let truncated = stringValue.slice(0, n - 3);
      if (truncated.lastIndexOf(" ") > -1) {
        truncated = truncated.slice(0, truncated.lastIndexOf(" "));
      }
      return truncated + "...";
    }
    
    if (n < 4) {
      return ".".repeat(n);
    }
    
    return stringValue.slice(0, n - 3) + "...";
  }
  
  String.format = function(template, ...params) {
      return template.replace(/{([0-9]+)}/g, (match, number) => {
          return typeof params[number] !== 'undefined' ? params[number] : match;
      });
  };

})();
