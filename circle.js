class Circle {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }

  get getRadius() {
    return this.radius;
  }

  set setRadius(value) {
    this.radius = value;
    console.log("Radius set successfully");
  }

  get getColor() {
    return this.color;
  }

  set setColor(color) {
    this.color = color;
    console.log("Color set successfully");
  }

  get toString() {
    return `"Circle[radius=${this.radius},color=${this.color}]"`;
  }

  get getArea() {
    return Math.pow(this.radius, 2) * 3.14;
  }

  get getCircumference() {
    return (2 * this.radius * 3.14).toFixed(2);
  }
}

const myCircle1 = new Circle(5, "Yellow");
myCircle1.setColor = "purple";
console.log(myCircle1.getColor);
myCircle1.setRadius = 9;
console.log(myCircle1.getRadius);
console.log(myCircle1.getArea);
console.log(myCircle1.getCircumference);
console.log(myCircle1.toString);
console.log(myCircle1);
