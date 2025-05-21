function generateReport() {
    
    const headerColumns = document.querySelectorAll("input");
    const columns = document.getElementsByTagName("td");
    const textArea = document.getElementById("output");
    console.log(columns)
    const checkedIndexes = findCheckedIndexes(headerColumns);
    const objArr = createObjArr();
    const objArrJSON = JSON.stringify(objArr);
    textArea.value = objArrJSON;

    function createObjArr() {
        const objArr = [];
        for (let i = 0; i < columns.length; i += 7) {
          
      
          for (let j = 0; j < checkedIndexes.length; j++) {
            const checkedIndex = checkedIndexes[j];
            
            
            const key = headerColumns[checkedIndex].name;
            const value = columns[i + checkedIndex].textContent
            if (value) {
              const obj = {};
              obj[key] = value;
              objArr.push(obj);
              
            }
          }
          
        }
    
      return (objArr);
    }
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
