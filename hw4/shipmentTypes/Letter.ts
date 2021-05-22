import { Shipper } from "./../Shipper";
import { IShipment, IState } from "./../Shipment";

export class Letter implements IShipment {
  state: IState;
  constructor(state: IState) {
    this.state = state;
  }

  ship(shipper: Shipper) {
    const { shipmentId, fromAddress, toAddress, weight } = this.state;
    const cost = shipper.getShipperCost(weight, "letter");

    return `ID: ${shipmentId}, sent from: ${fromAddress}, going to: ${toAddress}, total cost: ${cost}`;
  }
}
