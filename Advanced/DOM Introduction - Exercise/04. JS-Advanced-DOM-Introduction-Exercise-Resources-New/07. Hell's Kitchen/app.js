function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    const inputEl = document.querySelector("textarea"); // ✅ fixed casing
    const [bestRestaurantP, bestWorkersP] = document.querySelectorAll(
      "#bestRestaurant p, #workers p"
    );

    const inputArr = JSON.parse(inputEl.value);
    const restaurants = {};

    for (const line of inputArr) {
      const [restaurantName, workersStr] = line.split(" - ");
      const workersData = workersStr.split(", ");

      if (!restaurants[restaurantName]) {
        restaurants[restaurantName] = {
          workers: [],
          avgSalary: 0,
          bestSalary: 0,
        };
      }

      const currentRestaurant = restaurants[restaurantName];

      for (const workerEntry of workersData) {
        const [name, salaryStr] = workerEntry.split(" ");
        const salary = Number(salaryStr);
        currentRestaurant.workers.push({ name, salary });
      }

      // Recalculate avg and best salary after all additions
      const totalSalary = currentRestaurant.workers.reduce(
        (sum, w) => sum + w.salary,
        0
      );
      currentRestaurant.avgSalary =
        totalSalary / currentRestaurant.workers.length;
      currentRestaurant.bestSalary = Math.max(
        ...currentRestaurant.workers.map((w) => w.salary)
      );
    }

    // Find best restaurant by avg salary
    let bestRestaurant = Object.entries(restaurants).sort(
      (a, b) => b[1].avgSalary - a[1].avgSalary
    )[0];

    const [bestName, bestData] = bestRestaurant;

    // Sort workers by salary descending
    bestData.workers.sort((a, b) => b.salary - a.salary);

    // Output formatting
    bestRestaurantP.textContent = `Name: ${bestName} Average Salary: ${bestData.avgSalary.toFixed(
      2
    )} Best Salary: ${bestData.bestSalary.toFixed(2)}`;
    bestWorkersP.textContent = bestData.workers
      .map((w) => `Name: ${w.name} With Salary: ${w.salary}`)
      .join(" ");
  }
}
