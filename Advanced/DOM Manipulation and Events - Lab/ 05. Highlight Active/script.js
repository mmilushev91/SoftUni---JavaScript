function focused() {
    const inputElements = document.getElementsByTagName("input")
    
    for (const inputEl of inputElements) {
      inputEl.addEventListener("mouseenter", function() {
        const div = inputEl.parentElement;
        div.classList.add("focused");
      })
      inputEl.addEventListener("mouseleave", function() {
        const div = inputEl.parentElement;
        div.classList.remove("focused");
      })

    }

}
