function solve(text) {
  console.log(
    text
      .split(/[/"'()[\]{}\-_.,:;!?]\s*|\s+/g)
      .filter(Boolean)
      .map((el) => el.toUpperCase())
      .join(", ")
  );
}
