function attachEventsListeners() {
    const inputDistance = document.getElementById("inputDistance");
    const inputUnits = document.getElementById("inputUnits").children;
    const outputUnits = document.getElementById("outputUnits").children;
    const convertButton = document.getElementById("convert");
    const outputDistance = document.getElementById("outputDistance");
    const units = {
      km:	1000,
      m: 1,
      cm:	0.01,
      mm:	0.001,
      mi:	1609.34,
      yrd: 0.9144,
      ft:	0.3048,
      "in":	0.0254,
    }
    convertButton.addEventListener("click", function() {
      const inputFromValue = getSelectedDistance(inputUnits);
      const outputToValue = getSelectedDistance(outputUnits);
      const inputValueFromMeters = Number(inputDistance.value) * units[inputFromValue];
      const result = inputValueFromMeters / units[outputToValue];
      outputDistance.value = result;
    })
    function getSelectedDistance(options) {
      for (const option of options) {
        if (option.selected) {
          return option.value;
        }
      }
    }
}
