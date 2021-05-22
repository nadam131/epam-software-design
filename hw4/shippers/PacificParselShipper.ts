import { IShipper } from "./../Shipper";

export class PacificParselShipper implements IShipper {
  public getCost(weight: number, type: string) {
    if (type === "letter") {
      return weight * 0.51;
    }

    if (type === "package") {
      return weight * 0.19;
    }

    return weight * 0.21;
  }
}
