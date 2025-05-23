function attachEventsListeners() {

    const buttons = document.querySelectorAll('[type="button"]');
    const inputs = document.querySelectorAll('[type="text"]');
    
    for (let i = 0; i < 4; i++) {
      const btn = buttons[i];
      const input = inputs[i];
      
      btn.addEventListener("click", function() {
        let days, hours, minutes, seconds;
        const value = input.value;
        const operations = {
          value,
          0() {
            days = this.value;
            hours = this.value * 24;
            minutes = hours * 60;
            seconds = minutes * 60;
          },
          1() {
            days = this.value / 24;
            hours = this.value;
            minutes = hours * 60;
            seconds = minutes * 60;
          },
          2() {
            minutes = this.value;
            hours = this.value / 60;
            days = hours / 24;
            seconds = minutes * 60;
          },
          3() {
            seconds = this.value;
            minutes = seconds / 60;
            hours = minutes / 60;
            days = hours / 24;
          },
          
        };
        
        if (value) {
          operations[`${i}`]();
          
          inputs[0].value = days;
          inputs[1].value = hours;
          inputs[2].value = minutes;
          inputs[3].value = seconds;
        }
      
        
      })
    }

}
