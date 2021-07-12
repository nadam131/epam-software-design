class ModelSeparate {
  bindInputValueChanged(callback) {
    this.onInputValueChanged = callback;
  }

  handleChangeInputValue(ammount, i) {
    this.onInputValueChanged(ammount, i);
  }
}

export default ModelSeparate;
