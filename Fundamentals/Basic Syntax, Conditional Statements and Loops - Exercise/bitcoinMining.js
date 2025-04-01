function solve(arr) {
  const bitcoinPrice = 11949.16;
  const goldGrPrice = 67.51;
  
  let money = 0;
  let firstBoughtBitcoinDay = 0;
  let boughtBitcoins = 0;
  const arrLenght = arr.length;
  
  for (let i = 1; i <= arrLenght; i++) {
    let dailyMoney = arr[i - 1] * goldGrPrice;
    
    if (i % 3 === 0) {
      dailyMoney *= 0.7;
    }
    
    money += dailyMoney;
    
    while (money >= bitcoinPrice) {
      money -= bitcoinPrice;
      boughtBitcoins++;
      
      if (!firstBoughtBitcoinDay) {
        firstBoughtBitcoinDay = i;
      }
    }
  }
  console.log(`Bought bitcoins: ${boughtBitcoins}`);
  if (firstBoughtBitcoinDay) console.log(`Day of the first purchased bitcoin: ${firstBoughtBitcoinDay}`);
  console.log(`Left money: ${money.toFixed(2)} lv.`)
}
