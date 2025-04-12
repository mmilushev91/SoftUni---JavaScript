function solve(data) {
  const gradesMap = new Map();

  for (const line of data) {
    const [name, ...grades] = line.split(" ");
    if (!gradesMap.has(name)) {
      gradesMap.set(name, []);
    }

    gradesMap.get(name).push(...grades);
  }

  const sortedGradesMap = Array.from(gradesMap.entries()).sort(
    ([nameA, gradelistA], [nameB, gradelistB]) => nameA.localeCompare(nameB)
  );

  for (const [name, gradesList] of sortedGradesMap) {
    const avgGrade =
      gradesList.reduce((sum, grade) => sum + Number(grade), 0) /
      gradesList.length;
    console.log(`${name}: ${avgGrade.toFixed(2)}`);
  }
}

solve(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
