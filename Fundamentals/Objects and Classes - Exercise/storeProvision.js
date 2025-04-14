function solve(invetory, delivery) {
  const localStore = {};
  const invetoryInterval = invetory.length - 1;
  const deliveryInterval = delivery.length - 1;
  
  for (let i = 0; i < invetoryInterval; i+= 2) {
    localStore[invetory[i]] = Number(invetory[i + 1]);
  }

  for (let i = 0; i < deliveryInterval; i+= 2) {
    const currentItem = delivery[i];
    const currentItemQuantity = Number(delivery[i + 1]);
    
    if (localStore.hasOwnProperty(currentItem)) {
      localStore[currentItem] += currentItemQuantity;
    } else {
      localStore[currentItem] = currentItemQuantity;
    }
  }
  
  for (const key in localStore) {
    console.log(`${key} -> ${localStore[key]}`);
  }
  
}
