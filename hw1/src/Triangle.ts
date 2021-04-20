import { Shape } from "./Shape";
import { Point } from "./Point";

const EPSILON = 0.05;

export class Triangle extends Shape {
  constructor(a: Point, b: Point, c: Point);
  constructor(a: Point, b: Point, c: Point, color: string);
  constructor(a: Point, b: Point, c: Point, color: string, filled: boolean);
  constructor(public a: Point, public b: Point, public c: Point) {
    super([a, b, c]);
  }

  getType(): string {
    const ab = this.a.distance(this.b);
    const bc = this.b.distance(this.c);
    const ca = this.c.distance(this.a);

    const ab_bc_eq = ab - bc < EPSILON;
    const bc_ca_eq = bc - ca < EPSILON;
    const ca_ab_eq = ca - ab < EPSILON;

    if (ab_bc_eq && bc_ca_eq && ca_ab_eq) {
      return "equilateral triangle";
    } else if (
      (ab_bc_eq && bc_ca_eq) ||
      (bc_ca_eq && ca_ab_eq) ||
      (ca_ab_eq && ab_bc_eq)
    ) {
      return "isosceles triangle";
    } else {
      return "scalene triangle";
    }
  }

  toString(): string {
    return `Triangle[v1=${this.a.toString()},v2=${this.b.toString()},v3=${this.c.toString()}]`;
  }
}
