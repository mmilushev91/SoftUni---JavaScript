function generateReport() {
    
    const headerColumns = document.querySelectorAll("input");
    const columns = document.getElementsByTagName("td");
    
    const checkedIndexes = findCheckedIndexes(headerColumns);
    console.log("length: ", columns.length)
    const objArr = [];
    for (let i = 0; i < columns.length; i += 7) {
      
      for (let j = 0; j < checkedIndexes.length; j++) {
        const key = headerColumns[j].parentElement.textContent.toLowerCase();
        console.log(i + checkedIndexes[j]);
        
        objArr.push({
          
        })
      }
    }

    
    // checkedIndexes.forEach((i) => {
    //   headerColumns[i].parentElement.textContent = "Checked";
    //   });

    function findCheckedIndexes(iter) {
      const indexes = [];
      iter.forEach((el, i) => {
        
        if (el.checked) {
          indexes.push(i);
        }
      });
      
      return indexes;
    }
    
}
