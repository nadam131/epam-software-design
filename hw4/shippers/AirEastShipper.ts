import { IShipper } from "./../Shipper";

export class AirEastShipper implements IShipper {
  public getCost(weight: number, type: string) {
    if (type === "letter") {
      return weight * 0.39;
    }

    if (type === "package") {
      return weight * 0.25;
    }

    return weight * 0.25 + 10;
  }
}
