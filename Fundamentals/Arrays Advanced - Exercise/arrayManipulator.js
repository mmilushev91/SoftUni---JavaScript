function solve(array, commands) {
  const operations = {
    add(nums, arr) {
      const [idx, el] = nums;
      arr.splice(idx, 0, el);
    },
    addMany(nums, arr) {
      const [idx, ...numElements] = nums;
      arr.splice(idx, 0, ...numElements);
    },
    contains(nums, arr) {
  
      const [el] = nums;
      const arrLength = arr.length;
      
      for (let i = 0; i < arrLength; i++) {
        
        if (arr[i] === el) {
          console.log(i);
          return;
        }
      }
      console.log(-1);
    },
    remove(nums, arr) {
      const [idx] = nums; 
      arr.splice(idx, 1);
    },
    shift(nums, arr) {
      const [positions] = nums;
      
      for (let i = 0; i < positions; i++) {
        arr.push(arr.shift())
      }
    },
    sumPairs(nums, arr) {
      const sumPairsArr = [];
      const arrLength = arr.length;
      
      for (let i = 0; i < arrLength; i+= 2) {
        
        const num1 = arr[i];
        let num2;
        
        if (i + 1 < arrLength) {
          num2 = arr[i + 1];
        }
        
        if (num2) {
          sumPairsArr.push(num1 + num2);
        }
        
        else {
          sumPairsArr.push(num1);
        }
      }
      arr.length = 0;
      arr.push(...sumPairsArr);
    },
    print(nums, arr) {
      endLoop = true;
      console.log(`[ ${arr.join(", ")} ]`)
    }
  }
  
  for (const line of commands) {
    const [command, ...rest] = line.split(" ");
    numbers = rest.map(num => Number(num));
    operations[command](numbers, array);
  }
}
