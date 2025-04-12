function solve(arr) {
  const productPrices = new Map();

  for (const line of arr) {
    const [product, quantity] = line.split(" ");

    if (productPrices.has(product)) {
      productPrices.set(product, productPrices.get(product) + Number(quantity));
    } else {
      productPrices.set(product, Number(quantity));
    }
  }

  for (const [product, quantity] of productPrices) {
    console.log(`${product} -> ${quantity}`);
  }
}

solve(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
solve(["apple 50", "apple 61", "coffee 115", "coffee 40"]);
