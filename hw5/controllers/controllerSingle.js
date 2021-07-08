class ControllerSingle {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.clearEvents();

    this.model.bindInputValueChanged(this.onInputValueChanged);
    this.model.bindInputTotalValueChanged(this.onInputTotalChanged);
    this.view.bindInputValueChanged(this.handleChangeInputValue);
  }

  onInputValueChanged = (value, i) => {
    this.view.updateInputValue(value, i);
  };

  onInputTotalChanged = (value) => {
    this.view.updateTotalValue(value);
  };

  handleChangeInputValue = (ammount, i) => {
    this.model.handleChangeInputValue(ammount, i);
  };
}

export default ControllerSingle;
