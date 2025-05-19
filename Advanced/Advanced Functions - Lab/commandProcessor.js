function solution() {
  let innerString = "";
 return {
   append(string) {
     innerString += string;
   },
   
  removeStart(n) {
    let result = innerString.slice(n);
    innerString = result;
  },
   
  removeEnd(n) {
    let result = innerString.slice(0, innerString.length - n)
    innerString = result;
  },
   
  print() {
    console.log(innerString)
  }
 }
}
