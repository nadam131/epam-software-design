import { Shipper } from "./../Shipper";
import { Shipment, IState } from "./../Shipment";

export class Oversized implements Shipment {
  state: IState;
  constructor(state: IState) {
    this.state = state;
  }

  ship(shipper: Shipper) {
    const { shipmentId, fromAddress, toAddress, weight } = this.state;
    const cost = shipper.getShipperCost(weight, "oversized");

    return `ID: ${shipmentId}, sent from: ${fromAddress}, going to: ${toAddress}, total cost: ${cost}`;
  }
}
