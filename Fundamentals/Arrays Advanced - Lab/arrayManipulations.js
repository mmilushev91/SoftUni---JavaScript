function solve(array) {
  
  let [numbers, ...commands] = array;
  
  operations = {
    "Add": (arr, el) => {
      arr.push(Number(...el));
      return arr;
    },
    
    "Remove": (arr, element) => {
      element = Number(...element);
      const filteredArray = arr.filter(el=> el !== element);
      return filteredArray;
      
      },
    "RemoveAt": (arr, idx) => {
      arr.splice(Number(...idx), 1);
      return arr;
    },
    "Insert": (arr, nums) => {
      const [num, idx] = nums.map(el => Number(el));
      const arrCoppy = [...arr];
      arrCoppy.splice(idx, 0, num);
      
      return arrCoppy;
    },
  }
  numbers = numbers.split(" ").map(el => Number(el));
  
  for (const line of commands) {
    const [command, ...num] = line.split(" ");
    numbers = operations[command](numbers, num);
  }
  console.log(numbers.join(" "));
