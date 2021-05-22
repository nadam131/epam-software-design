import { Shipper } from "./../Shipper";
import { IShipment, IState } from "./../Shipment";

export class Package implements IShipment {
  state: IState;
  constructor(state: IState) {
    this.state = state;
  }

  ship(shipper: Shipper) {
    const { shipmentId, fromAddress, toAddress, weight } = this.state;
    const cost = shipper.getShipperCost(weight, "package");

    return `ID: ${shipmentId}, sent from: ${fromAddress}, going to: ${toAddress}, total cost: ${cost}`;
  }
}
