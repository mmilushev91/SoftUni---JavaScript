function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    //   TODO:
    //target elements
    const inputEl = document.getElementsByTagName("textarea")[0];
    const paragraphsEl = document.getElementsByTagName("p");

    //take field array input
    const inputArr = JSON.parse(inputEl.value);

    const restaurantObjects = createRestaurantsObject(inputArr);
    const highestAvgSalaryObj = findAvgRestaurantObj(restaurantObjects);
    const bestRestaurantSalariesMessage =
      createSalariesMessage(highestAvgSalaryObj);
    const bestRestaurantWorkersMessage =
      createWorkersMessage(highestAvgSalaryObj);
    paragraphsEl[0].textContent = bestRestaurantSalariesMessage;
    paragraphsEl[1].textContent = bestRestaurantWorkersMessage;
    //loop through array and create array of neste objects
    //loop thourgh through restaurant object and find one
    // with best average salary and best salary
    //sorted best restaurant object workers by salary in descending order
    //display best restaurant name with the best salary and avg salary,
    //display workers
  }

  function createRestaurantsObject(arr) {
    const outputObj = {};
    for (const item of arr) {
      const [restaurantName, workers] = item.split(" - ");

      if (!outputObj.hasOwnProperty(restaurantName)) {
        outputObj[restaurantName] = {};
        outputObj[restaurantName].workers = [];
        outputObj[restaurantName].bestSalary = 0;
        outputObj[restaurantName].totalSalary = 0;
        outputObj[restaurantName].workersCount = 0;
      }
      for (const workerInfo of workers.split(", ")) {
        const [name, salary] = workerInfo.split(" ");
        const numSalary = Number(salary);
        const worker = {};
        worker[name] = numSalary;
        outputObj[restaurantName].workers.push(worker);

        if (numSalary > outputObj[restaurantName].bestSalary) {
          outputObj[restaurantName].bestSalary = numSalary;
        }

        outputObj[restaurantName].totalSalary += numSalary;
        outputObj[restaurantName].workersCount++;
      }
    }
    return outputObj;
  }
  function findAvgRestaurantObj(nestedObj) {
    let highestAvgSalary = 0;
    let highestAvgSalaryObj;

    for (const key in nestedObj) {
      const avgSalary =
        nestedObj[key].workers.reduce(
          (acc, obj) => acc + Object.values(obj)[0],
          0
        ) / nestedObj[key].workersCount;

      if (avgSalary > highestAvgSalary) {
        highestAvgSalaryObj = {};
        highestAvgSalary = avgSalary;
        highestAvgSalaryObj[key] = nestedObj[key];
        highestAvgSalaryObj[key].avgSalary = highestAvgSalary;
      }
    }

    return highestAvgSalaryObj;
  }

  function createSalariesMessage(obj) {
    const name = Object.keys(obj)[0];
    const avgSalary = obj[name].avgSalary.toFixed(2);
    const bestSalary = obj[name].bestSalary.toFixed(2);
    const message = `Name: ${name} Average Salary: ${avgSalary} Best Salary: ${bestSalary}`;
    return message;
  }

  function createWorkersMessage(object) {
    const objArr = object[Object.keys(object)[0]].workers.map((obj) =>
      Object.entries(obj)
    );

    const sortedObjArr = objArr.sort((a, b) => a[1] - b[1]);
    const message = [];

    for (const worker of sortedObjArr) {
      const [name, salary] = worker[0];
      const part = `Name: ${name} With Salary: ${salary}`;
      message.push(part);
    }
    return message.join(" ");
  }
}

function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    //Tasks:
    //1. input comes as stringed array
    //2. createRestaurantsAssArr
    //2. find the best restaurant - the one with
    //highest avg salary 
    //3. display workers of the best restaurant with their salaries
    //workers should be sorted in descending order by salaries
    
    //solution
    
    //set variables
    const textAreaEl = document.querySelector("textArea");
    const [paragraph1, paragraph2] = document.getElementsByTagName("p");
    
    const restaurantsObjects = createRestaurantsObject(textAreaEl);
    const bestRestaurant = findBestRestaurant(restaurantsObjects);
    const bestRestaurantMessage = createBestRestaurantMessage(bestRestaurant);
    const bestRestaurantWorkersMessage = createBestRestaurantWorkersMessage(bestRestaurant.workers);
    paragraph1.textContent = bestRestaurantMessage;
    paragraph2.textContent = bestRestaurantWorkersMessage;
    
    
    //functions
    function createRestaurantsObject(inputEl){
      const arr = JSON.parse(inputEl.value);
      const obj = {};
      //{ restaurantName = {
          // workers = {
              // worker: salary
          // },
            // workersCount: 0,
            // totalSalary:
            // bestSalary
      //},
      
      for (const item of arr) {
        const [restName, workers] = item.split(" - ");
          if (!obj.hasOwnProperty(restName)) {
            obj[restName] = {};
            obj[restName].workers = {};
            obj[restName].workersCount = 0;
            obj[restName].totalSalary = 0;
            obj[restName].bestSalary = 0;
          }
        const currentRestaurant = obj[restName];
        
        for (const worker of workers.split(", ")) {
          let [name, salary] = worker.split(" ");
          salary = Number(salary);
          
          currentRestaurant.workers[name] = salary;
          currentRestaurant.workersCount++;
          currentRestaurant.totalSalary += salary;
          
          if (currentRestaurant.bestSalary < salary) {
            currentRestaurant.bestSalary = salary;
          }
          
        }
      } 
      
      return obj;
    }
    function findBestRestaurant(obj) {
      let highestAvgSalary = 0;
      let bestRestaurant;
      
      for (const key in obj) {
        const currentObj = obj[key];
        const avgSalary = currentObj.totalSalary / currentObj.workersCount;
        currentObj.avgSalary = avgSalary;
        currentObj.name = key;
        
        if (avgSalary > highestAvgSalary) {
          highestAvgSalary = avgSalary;
          bestRestaurant = currentObj;
        }
        
      }
      return bestRestaurant;
    }
    function createBestRestaurantMessage(obj) {
      return `Name: ${obj.name} Average Salary: ${obj.avgSalary.toFixed(2)} Best Salary: ${obj.bestSalary.toFixed(2)}`
    }
    //obj = {worker: name, ...}
    function createBestRestaurantWorkersMessage(obj) {
      const sortedWorkers = Object.entries(obj).sort((a, b) => b[1] - a[1]);
      const output = sortedWorkers.reduce((acc, el) => {
          acc.push(`Name: ${el[0]} With Salary: ${el[1]}`);
          return acc;
        }
        , []);
      return output.join(" ");
    }
  }
}

