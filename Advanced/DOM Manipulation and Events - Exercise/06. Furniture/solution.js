function solve() {
  const [generateBtn, buyBtn] = document.getElementsByTagName("button");
  const [input, output] = document.getElementsByTagName("textarea");
  const tableBody = document.querySelector("tbody");

  generateBtn.addEventListener("click", () => {
    const items = JSON.parse(input.value);

    for (const item of items) {
      const tr = document.createElement("tr");

      // image
      const imgTd = document.createElement("td");
      const img = document.createElement("img");
      img.src = item.img;
      imgTd.appendChild(img);
      tr.appendChild(imgTd);

      // name
      const nameTd = document.createElement("td");
      const nameP = document.createElement("p");
      nameP.textContent = item.name;
      nameTd.appendChild(nameP);
      tr.appendChild(nameTd);

      // price
      const priceTd = document.createElement("td");
      const priceP = document.createElement("p");
      priceP.textContent = item.price;
      priceTd.appendChild(priceP);
      tr.appendChild(priceTd);

      // decoration factor
      const decTd = document.createElement("td");
      const decP = document.createElement("p");
      decP.textContent = item.decFactor;
      decTd.appendChild(decP);
      tr.appendChild(decTd);

      // checkbox
      const checkTd = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkTd.appendChild(checkbox);
      tr.appendChild(checkTd);

      tableBody.appendChild(tr);
    }
  });

  buyBtn.addEventListener("click", () => {
    const rows = Array.from(document.querySelectorAll("tbody tr"));
    const selectedItems = [];

    for (const row of rows) {
      const checkbox = row.querySelector('input[type="checkbox"]');
      if (checkbox && checkbox.checked) {
        const cells = row.querySelectorAll("td");
        selectedItems.push({
          name: cells[1].textContent.trim(),
          price: Number(cells[2].textContent),
          decFactor: Number(cells[3].textContent),
        });
      }
    }

    const names = selectedItems.map((item) => item.name);
    const totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0);
    const avgFactor =
      selectedItems.reduce((sum, item) => sum + item.decFactor, 0) /
        selectedItems.length || 0;

    output.value = `Bought furniture: ${names.join(", ")}\n`;
    output.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    output.value += `Average decoration factor: ${avgFactor}`;
  });
}
