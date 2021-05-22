import { IShipper } from "./../Shipper";

export class ChicagoSprintShipper implements IShipper {
  public getCost(weight: number, type: string) {
    if (type === "letter") {
      return weight * 0.42;
    }

    if (type === "package") {
      return weight * 0.2;
    }

    return weight * 0.2;
  }
}
