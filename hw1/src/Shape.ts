import { Point } from "./Point";

export abstract class Shape {
  private point: Point = new Point();
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(points: Point[], color?: string, filled?: boolean) {
    if (points.length < 3) {
      throw new Error("Ooops. One more point please");
    }

    this.points = points;
    this.color = color || "green";
    this.filled = typeof filled === "boolean" ? filled : true;
  }

  toString() {
    const filledLabel = this.filled ? "filled" : "not filled";
    const pointsStringArray = this.points
      .map((p) => `(${p.x}, ${p.y})`)
      .join(", ");

    return `A Shape with color of ${this.color} and ${filledLabel}. Points: ${pointsStringArray}.`;
  }

  getPerimeter() {
    const array = this.points.map((p) => {
      return p.x * p.y;
    });
    return array.reduce((a, b) => a + b, 0);
  }
}
