const fraction = 3;

export class Point {
  constructor();
  constructor(x: number, y: number);

  constructor(readonly x = 0, readonly y = 0) {}

  public toString() {
    return `(${this.x}, ${this.y})`;
  }

  private getDistance(a: Point, b: Point) {
    const x = +(a.x - b.x).toFixed(fraction);
    const y = +(a.y - b.y).toFixed(fraction);

    return Math.sqrt(+(x * x + y * y).toFixed(fraction));
  }

  public distance(): number;
  public distance(other: Point): number;
  public distance(x: number, y: number): number;
  public distance(pointOrX?: number | Point, y?: number): number {
    if (!pointOrX) {
      return this.getDistance(this, new Point());
    } else if (pointOrX instanceof Point) {
      return this.getDistance(this, pointOrX);
    } else if (pointOrX && y) {
      return this.getDistance(this, new Point(pointOrX, y));
    }
  }
}
