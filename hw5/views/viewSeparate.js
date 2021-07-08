const RATES = [2.34, 4, 6.32];

class ViewSeparate {
  constructor() {
    this.inputAmmount = this.getElements("#input_ammount");
    this.inputTotal = this.getElements("#input_total");
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  getElements(selector) {
    const elements = document.querySelectorAll(selector);
    return elements;
  }

  updateInputValue = (value, i) => {
    this.inputAmmount[i].value = value;
    this.updateTotalValue(RATES[i] * value, i);
  };

  updateTotalValue = (value, i) => {
    this.inputTotal[i].value = value;
  };

  bindInputValueChanged(handler) {
    this.inputAmmount.forEach((element, i) =>
      element.addEventListener("input", (event) => {
        const newAmmount = event.target.value;
        handler(newAmmount, i);
      })
    );
  }

  clearEvents() {
    console.log("clear events");
    this.inputAmmount.forEach((element, i) =>
      element.removeEventListener("input", (e) => {})
    );
  }
}

export default ViewSeparate;
