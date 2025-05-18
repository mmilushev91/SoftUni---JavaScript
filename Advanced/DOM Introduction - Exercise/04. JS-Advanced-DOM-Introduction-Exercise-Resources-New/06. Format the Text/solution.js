function solve() {
  //target textarea and output elements
  const inputEl = document.getElementById("input");
  const outputEl = document.getElementById("output");

  //get textarea value
  const input = inputEl.value;
  //format the value:
  //split the text by ".", filter the sentences so that there aren't any with less 2 words.
  const sentences = input
    .split(".")
    .map((el) => el.trim())
    .filter((sent) => sent.length > 1);
  //output variable formated as paragraphs
  const output = createHtmlParagraphs(sentences);
  //append the text to the output element
  outputEl.innerHTML = output;
  //loop through sentences and count them. Every three form a paragraph
  function createHtmlParagraphs(sentences) {
    const paragraphs = [];
    let paragraph = [];
    let counter = 0;

    for (const sentence of sentences) {
      counter++;
      paragraph.push(sentence);

      if (counter === 3) {
        counter = 0;
        paragraphs.push(`<p>${paragraph.join(".")}.</p>`);
        paragraph = [];
      }
    }

    if (paragraph.length > 0) paragraphs.push(`<p>${paragraph.join(".")}.</p>`);

    return paragraphs.join("\n");
  }
}
