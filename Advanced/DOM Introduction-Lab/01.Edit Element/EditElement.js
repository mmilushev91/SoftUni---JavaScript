function editElement(el, matcher, replacer) {
  let text = el.textContent;

  while (text.includes(matcher)) {
    text = text.replace(matcher, replacer);
  }
  el.textContent = text;
}

// function editElement(el, matcher, replacer) {
//   const text = el.textContent;
//   const replacedText = text.replace(matcher, replacer);
//   el.textContent = replacedText;
// }
