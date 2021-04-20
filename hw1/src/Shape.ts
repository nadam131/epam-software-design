import { Point } from "./Point";

export abstract class Shape {
  constructor(points: Point[]);
  constructor(points: Point[], color: string, filled: boolean);
  constructor(
    public points: Point[],
    public color = "green",
    public filled = true
  ) {
    if (points.length < 3) {
      throw new Error("Number of Points should be 3 at least");
    }
  }

  getPerimeter(): number {
    return this.points.reduce((perimeter, point, index, points) => {
      if (index < points.length) {
        return perimeter + point.distance(points[index + 1]);
      }

      return perimeter;
    }, 0);
  }

  toString(): string {
    const points = this.points.map((point) => point.toString()).join(", ");

    return `A Shape with color of ${this.color} and ${
      this.filled ? "filled" : "not filled"
    }. Points: ${points}.`;
  }
}
