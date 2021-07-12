const RATES = [2.34, 4, 6.32];

class ViewSingle {
  constructor() {
    this.app = this.getElement("#root");

    this.radioElement = this.getElement("#typeInputView");
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

  updateInputValue = (value) => {
    this.inputAmmount.forEach((element) => {
      element.value = value;
    });
  };

  updateTotalValue = (value) => {
    this.inputTotal.forEach((element, i) => {
      element.value = RATES[i] * value;
    });
  };

  setNewAmmount = (callback) => (event) => {
    const newAmmount = event.target.value;
    callback(newAmmount);
  };

  bindInputValueChanged(handler) {
    this.inputAmmount.forEach((element) =>
      element.addEventListener("input", this.setNewAmmount(handler))
    );
  }

  clearEvents() {
    this.inputAmmount.forEach((element, i) =>
      element.removeEventListener("input", this.setNewAmmount)
    );
  }
}

export default ViewSingle;
