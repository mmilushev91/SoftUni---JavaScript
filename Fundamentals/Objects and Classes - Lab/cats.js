function solve(catsArr) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (const cat of catsArr) {
    const [name, age] = cat.split(" ");

    const currentCat = new Cat(name, age);
    currentCat.meow();
  }
}

solve(["Mellow 2", "Tom 5"]);
