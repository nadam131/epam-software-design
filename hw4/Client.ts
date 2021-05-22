// import { Letter } from "./shipmentTypes/Letter";
// import { Package } from "./shipmentTypes/Package";
// import { Oversized } from "./shipmentTypes/Oversized";

import { IState } from "./Shipment";
import { Shipment } from "./Shipment";

const item = {
  toAddress: "9 line, Saint P",
  fromAddress: "21 avenue New York",
  toZipCode: "199034",
  fromZipCode: "213134",
  weight: 15,
  marks: ["fragile", "leave", "receipt"],
};

class Client {
  onShip(item: IState) {
    // Честно пытался реализовать Bridge. В целом все получилось, но выглядило очень глупо
    // т.к как по мне это лишнее усложнение в данном случае. Наши операторы доставки могут считать
    // цену исходя из weight и type (letter, package, oversized), который мы им передаем.

    // if (item.weight <= 15) {
    //   return new Shipment(new Letter(item)).ship();
    // }

    // if (item.weight > 15 && item.weight <= 160) {
    //   return new Shipment(new Package(item)).ship();
    // }

    // if (item.weight > 160) {
    //   return new Shipment(new Oversized(item)).ship();
    // }

    return new Shipment(item).ship();
  }
}

const client = new Client();

console.log(client.onShip(item), "client");
