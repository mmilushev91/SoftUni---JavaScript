function solve(funcLib, orders) {
  const products = orders.reduce((newObjects, obj) => {
    const productName = obj.template.name;
    const functions = obj.parts;
    const product = {
      name: productName,
    }
    for (const func of functions) {
      product[func] = funcLib[func];
    }
    newObjects.push(product);
    return newObjects;
  }, []);
  return products;
}
const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};
const orders = [
  {
    template: { name: 'ACME Printer'},
    parts: ['print']      
  },
  {
    template: { name: 'Initech Scanner'},
    parts: ['scan']      
  },
  {
    template: { name: 'ComTron Copier'},
    parts: ['scan', 'print']      
  },
  {
    template: { name: 'BoomBox Stereo'},
    parts: ['play']      
  }
];


solve(library, orders)
