export interface IShipper {
  getCost(weight: number, type: string): number;
}

export class Shipper {
  private shipper: IShipper;

  constructor(shipper: IShipper) {
    this.shipper = shipper;
  }

  setShipper(shipper: IShipper) {
    this.shipper = shipper;
  }

  public getShipperCost(weight: number, type: string): number {
    return this.shipper.getCost(weight, type);
  }
}
