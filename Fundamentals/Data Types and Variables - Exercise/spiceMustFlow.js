function spiceMustFlow(startingYield) {
   let dayCount = 0;
   let minedSpice = 0;

   while (startingYield >= 100) {
      dayCount++;
      minedSpice+= startingYield;
      startingYield -= 10;
      minedSpice -= 26;
   }

   minedSpice -= 26;

   if (minedSpice < 0) {
      minedSpice = 0;
   }

   console.log(dayCount);
   console.log(minedSpice);
