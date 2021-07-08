class ModelSingle {
  constructor() {
    this.ammount = 1;
  }

  bindInputValueChanged(callback) {
    this.onInputValueChanged = callback;
  }

  bindInputTotalValueChanged(callback) {
    this.onInputTotalChanged = callback;
  }

  handleChangeInputValue(ammount) {
    this.ammount = ammount;
    this.onInputValueChanged(ammount);
    this.onInputTotalChanged(ammount);
  }
}

export default ModelSingle;
