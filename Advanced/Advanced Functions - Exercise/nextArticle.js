function getArticleGenerator(articles) {
    
    const divEl = document.getElementById("content");

    let index = 0;
    
    return function() {
      if (index === articles.length) {
        return;
      }
      const articleEl = document.createElement("article");
 
      articleEl.textContent = articles[index];
      divEl.appendChild(articleEl);
      index++;
    }
}
