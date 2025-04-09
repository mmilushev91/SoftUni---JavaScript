function solve(percent) {
  const output = [[`${percent}% `]];
  const loadBar = Array(10).fill(".");
  
  for (let i = 0; i < percent / 10; i++) {
    loadBar[i] = "%"
  }
  
  if (percent < 100) {
    output[0].push(`[${loadBar.join("")}]`);
    output.push("Still loading...");
  } else {
      output[0].push("Complete!");
      output.push(`[${loadBar.join("")}]`);
  }

  output.forEach(el => {
    if (typeof el !== "string") {
      console.log(el.join(""));
    } else {
      console.log(el);
    }
  })
}
