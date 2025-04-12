function solve(arr) {
  const meetings = {};

  for (const item of arr) {
    const [weekday, name] = item.split(" ");

    if (meetings.hasOwnProperty(weekday)) {
      console.log(`Conflict on ${weekday}!`);
      continue;
    }

    meetings[weekday] = name;
    console.log(`Scheduled for ${weekday}`);
  }

  for (const [weekday, name] of Object.entries(meetings)) {
    console.log(`${weekday} -> ${name}`);
  }
}

solve(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
