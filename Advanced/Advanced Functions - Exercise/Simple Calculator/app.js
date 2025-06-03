function calculator() {
    const operations = {
      init (selector1, selector2, resultSelector) {
        const selectedEl1 = document.querySelector(selector1);
        const selectedEl2 = document.querySelector(selector2);
        const selectedEl3 = document.querySelector(resultSelector);
        
        this.el1 = selectedEl1;
        this.el2 = selectedEl2;
        this.el3 = selectedEl3;
      },
      
      add() {
        const result = Number(this.el1.value) + Number(this.el2.value);
        this.el3.value = result;
      },
      
      subtract() {
        const result = Number(this.el1.value) - Number(this.el2.value);
        this.el3.value = result;
      }
    };
    
    return operations;
}
