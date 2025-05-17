function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const rows = document.querySelectorAll("tr");
    const cells = document.querySelectorAll("td");
    const searchField = document.getElementById("searchField");
    const classSelect = "select";

    removeClass(rows, classSelect);
    const searchFieldValue = searchField.value;

    if (!searchFieldValue) {
      return;
    }

    addClass(cells, searchFieldValue, classSelect);

    searchField.value = "";
  }

  function removeClass(elements, className) {
    for (const el of elements) {
      if (el.classList.contains(className)) {
        el.classList.remove(className);
      }
    }
  }

  function addClass(elements, searchFieldValue, className) {
    for (const el of elements) {
      if (el.textContent.includes(searchFieldValue)) {
        el.parentElement.classList.add(className);
      }
    }
  }
}
