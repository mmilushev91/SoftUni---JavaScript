function solution() {
  const breakfastRobot = {
    recipies: {
      apple: {
        carbohydrate: 1,
        flavour: 2,
      },
      lemonade: {
        carbohydrate: 10,
        flavour: 20,
      },
      burger: {
        carbohydrate: 5,
        fat: 7,
        flavour: 3,
      },
      eggs: {
        protein: 5,
        fat: 1,
        flavour: 1,
      },
      turkey: {
        protein: 10,
        carbohydrate: 10,
        fat: 10,
        flavour: 10,
      },
      
    },
    stock: {
      protein: 0,
      carbohydrate: 0,
      fat: 0,
      flavour: 0,
    },
    restock(microelement, quantity) {
      this.stock[microelement] += quantity;
      return "Success";
    },
    prepare(recipe, quantity) {
      const ingredients = this.recipies[recipe];
      const stockCopy = {...this.stock};
      
      for (const ingredient in ingredients) {
        
        if (ingredients[ingredient] * quantity > stockCopy[ingredient]) {
          return `Error: not enough ${ingredient} in stock`
        }
        
        stockCopy[ingredient] -= ingredients[ingredient] * quantity;
      }
      
      this.stock = stockCopy;
      
      return "Success"
    },
    report() {
      const infoArr = [];
      
      for (const key in this.stock) {
        infoArr.push(`${key}=${this.stock[key]}`)
      }
      
      return infoArr.join(" ");
    }
    
  }
  
  return function manager(line) {
    const args = line.split(" ");
    const command = args[0];
    let result;
    
    if (args.length === 1) {
      result = breakfastRobot[command]();
      
    } else {
      const quantity = Number(args[2]);
      result = breakfastRobot[command](args[1], quantity);
    }
    
    return result;
  }
}
