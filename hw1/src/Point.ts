export class Point {
  x: number;
  y: number;

  constructor(x?: number, y?: number) {
    if (typeof x === "number" && typeof y === "number") {
      this.x = x;
      this.y = y;
    } else {
      this.x = 0;
      this.y = 0;
    }
  }

  public toString() {
    return `(${this.x}, ${this.y})`;
  }

  public distance(point);
  public distance(x, y?) {
    let pointX = +(x - this.x).toFixed();
    let pointY = +(y - this.y).toFixed();

    if (!y) {
      const point = new Point(x);
      pointX = +(this.x - point.x).toFixed();
      pointY = +(this.y - point.y).toFixed();
    }

    if (!x && !y) {
      pointX = +(this.x - 0).toFixed();
      pointY = +(this.y - 0).toFixed();
    }

    return Number(Math.hypot(pointX, pointY).toFixed());
  }
}
