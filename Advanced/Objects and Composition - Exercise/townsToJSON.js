function solve(data) {
  
  //1. format data to new Array
  convertedData = convertDataToArr(data).slice(1);
  //2. loop through values array, create new object for each town, convert 
  //numbers to number with fixed 2 dec places and push it to outputArr
  const outputArr = createOutputArr(convertedData);
  //3. print result in JSON format
  console.log(JSON.stringify(outputArr))

  function convertDataToArr(arr) {
    const returnArr = [];
    for (const line of data) {
      returnArr.push(line.split("|").filter(el=> el).map(el => el.trim()));
    }
    
    return returnArr;
  }
  
  function createOutputArr(arr) {
    const outputArr = [];
    for (const item of arr) {
      
      const [city, lat, long] = item;
      
      outputArr.push({
        Town: city,
        Latitude: convertNumber(lat),
        Longitude: convertNumber(long),
      })
    }
    
    return outputArr
  }
  function convertNumber(num) {
    return Number(Number(num).toFixed(2));
  }

} 
