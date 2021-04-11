import { Point } from "./Point";
import { Shape } from "./Shape";

export class Triangle extends Shape {
  constructor(point1: Point, point2: Point, point3: Point) {
    super([point1, point2, point3]);
  }

  toString() {
    const string = `Triangle[v1=${this.points[0]},v2=${this.points[1]},v3=${this.points[2]}]`;
    return string;
  }

  getType() {
    var equilateral = function (triangle) {
      console.log(triangle, "triangle");
      const { s1, s2, s3 } = triangle;
      if (s1 === s2 && s1 === s3) {
        return true;
      }
      return false;
    };

    var isosceles = function (triangle) {
      const { s1, s2, s3 } = triangle;

      if (s1 === s2 || s1 === s3 || s2 === s3) {
        return true;
      }
      return false;
    };

    var scalene = function (triangle) {
      const { s1, s2, s3 } = triangle;

      if (s1 === s2) {
        return false;
      } else if (s1 === s3) {
        return false;
      } else if (s2 === s3) {
        return false;
      } else {
        return true;
      }
    };

    if (equilateral(this.points)) {
      return "equilateral triangle";
    }

    if (isosceles(this.points)) {
      return "isosceles triangle";
    }

    if (scalene(this.points)) {
      return "scalene triangle";
    }
  }
}
