function create(words) {
   const contentEl = document.getElementById("content");
   createDivs();
   const divs = contentEl.children;
   const paragraphs = document.getElementsByTagName("p");
   const divsLength = divs.length;
   
   for (let i = 0; i < divsLength; i++) {
     const div = divs[i];
     const p = paragraphs[i];
     div.addEventListener("click", function() {
       p.style.display = "block";
     })
   }
   
   function createDivs() {
     for (const word of words) {
       const div = document.createElement("div");
       const p = document.createElement("p");
       p.textContent = word;
       p.style.display = "none";
       div.appendChild(p);
       contentEl.appendChild(div);
     }
   }
}
