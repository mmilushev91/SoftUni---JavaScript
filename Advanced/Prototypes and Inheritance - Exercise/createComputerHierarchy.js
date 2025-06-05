function createComputerHierarchy() {
  
  // Keyboard Class
  class Keyboard {
    constructor(manufacturer, responseTime) {
      this.manufacturer = manufacturer;
      this.responseTime = responseTime;
    }
  }
  
  // Monitor Class
  class Monitor {
    constructor(manufacturer, width, height) {
      this.manufacturer = manufacturer;
      this.width = width;
      this.height = height;
    }
  }
  
  // Battery Class
  class Battery {
    constructor(manufacturer, expectedLife) {
      this.manufacturer = manufacturer;
      this.expectedLife = expectedLife;
    }
  }
  
  // Abstract Computer Class
  class Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
      if (new.target === Computer) {
        throw new Error("Cannot instantiate abstract class 'Computer' directly.");
      }
      
      this.manufacturer = manufacturer;
      this.processorSpeed = processorSpeed;
      this.ram = ram;
      this.hardDiskSpace = hardDiskSpace;
    }
  }
  
  // Laptop Class extending Computer
  class Laptop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      
      this.weight = weight;
      this.color = color;
      
      // Validate battery
      this.battery = battery;  // This invokes the setter
    }
    
    // Getter and Setter for battery
    get battery() {
      return this._battery;
    }
    
    set battery(value) {
      if (value instanceof Battery) {
        this._battery = value;
      } else {
        throw new TypeError("Expected an instance of 'Battery' for the 'battery' property.");
      }
    }
  }
  
  // Desktop Class extending Computer
  class Desktop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor, weight = 0, color = "") {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      
      this._keyboard = keyboard;
      this._monitor = monitor;
      this.weight = weight;
      this.color = color;
    }

    // Getter and Setter for keyboard
    get keyboard() {
      return this._keyboard;
    }

    set keyboard(value) {
      if (value instanceof Keyboard) {
        this._keyboard = value;
      } else {
        throw new TypeError("Expected an instance of 'Keyboard' for the 'keyboard' property.");
      }
    }

    // Getter and Setter for monitor
    get monitor() {
      return this._monitor;
    }

    set monitor(value) {
      if (value instanceof Monitor) {
        this._monitor = value;
      } else {
        throw new TypeError("Expected an instance of 'Monitor' for the 'monitor' property.");
      }
    }
  }

  return {
    Battery,
    Keyboard,
    Monitor,
    Computer,
    Laptop,
    Desktop
  };
}
