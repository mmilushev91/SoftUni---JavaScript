function solve(arr) {
  console.log([arr[0] , arr[arr.length - 1]].map(el => Number(el)).reduce((sum, num) => sum + num))
}
