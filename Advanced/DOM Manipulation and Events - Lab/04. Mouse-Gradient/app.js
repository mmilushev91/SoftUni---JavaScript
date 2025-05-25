function attachGradientEvents() {
  const gradient = document.getElementById("gradient");
  const result = document.getElementById("result");

  gradient.addEventListener("mousemove", (e) => {
    const x = e.offsetX; // Use offsetX for simplicity and reliability
    const width = e.target.clientWidth;
    const percentage = Math.floor((x / width) * 100);
    result.textContent = `${percentage}%`;
  });
}
