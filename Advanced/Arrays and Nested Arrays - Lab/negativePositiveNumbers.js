function solve(arr) {
  // const newArray = [];

  // for (const item of arr) {
  //   if (item < 0) {
  //     newArray.unshift(item);
  //   } else {
  //     newArray.push(item);
  //   }
  // }
  // newArray.forEach(num => console.log(num));

  const newArray = arr.reduce((acc, el) => {
    el < 0 ? acc.unshift(el) : acc.push(el);
    return acc;
  }, []);

  console.log(newArray.join("\n"));
}

solve([7, -2, 8, 9]);
