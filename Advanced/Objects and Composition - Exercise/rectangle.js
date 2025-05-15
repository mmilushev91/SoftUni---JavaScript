function solve(width, height, color) {
  return {
    width, height,
    color: color.replace(color[0], color[0].toUpperCase()),
    calcArea() {
      return this.width * this.height;
    }
  }
} 
