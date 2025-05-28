function solve(data, criteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  
  let sorting = criteria === "price" ? (a, b) => a.price - b.price : (a, b) => a[criteria].localeCompare(b[criteria]);
  
  const tickets = data.reduce((arr, line) => {
    let [destination, price, status] = line.split("|");
    price = Number(price);
    const ticket = new Ticket(destination, price, status);
    arr.push(ticket);
    return arr;
    
  }, []);
  
  tickets.sort(sorting);
  
  return tickets;
}
