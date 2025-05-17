function extract(content) {
  const el = document.getElementById(content);
  return [...el.textContent.matchAll(/\(([^)]+)\)/g)]
    .map((m) => m[1])
    .join("; ");
}
