import { PacificParselShipper } from "./shippers/PacificParselShipper";
import { ChicagoSprintShipper } from "./shippers/ChicagoSprintShipper";
import { AirEastShipper } from "./shippers/AirEastShipper";
import { Shipper } from "./Shipper";

export interface IState {
  shipmentId?: number;
  toAddress: string;
  fromAddress: string;
  toZipCode: string;
  fromZipCode: string;
  weight: number;
  marks?: string[];
}

const MARKS: any = {
  fragile: "MARK FRAGILE",
  leave: "MARK DO NOT LEAVE IF ADDRESS NOT AT HOME",
  receipt: "MARK RETURN RECEIPT REQUESTED",
};

let id = 0;

export class Shipment {
  protected state: IState;
  protected shipper: Shipper;

  constructor(item: IState) {
    this.state = {
      shipmentId: this.getShipmentId(),
      ...item,
    };
    this.shipper = new Shipper(new AirEastShipper());
  }

  getShipmentId() {
    return ++id;
  }

  getShipmentMarks() {
    if (this.state.marks && this.state.marks.length) {
      return this.state.marks.map((element) => `${MARKS[element]}`);
    }

    return "None";
  }

  chooseShipper(zipCode: string): void {
    const isChicago = ["4", "5", "6"].some((word) => zipCode.startsWith(word));
    const isPacific = ["7", "8", "9"].some((word) => zipCode.startsWith(word));

    if (isChicago) {
      this.shipper.setShipper(new ChicagoSprintShipper());
    }

    if (isPacific) {
      this.shipper.setShipper(new PacificParselShipper());
    }
  }

  ship() {
    const { shipmentId, fromAddress, fromZipCode, toAddress, weight, marks } =
      this.state;

    this.chooseShipper(fromZipCode);

    const type =
      weight <= 15
        ? "letter"
        : weight > 15 && weight <= 160
        ? "package"
        : "oversized";

    const cost = this.shipper.getShipperCost(weight, type);

    return `ID: ${shipmentId}, sent from: ${fromAddress}, going to: ${toAddress}, total cost: ${cost}. Additional marks: ${this.getShipmentMarks()}`;
  }
}
