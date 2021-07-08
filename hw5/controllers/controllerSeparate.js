class ControllerSeparate {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.clearEvents();

    this.model.bindInputValueChanged(this.onInputValueChanged);
    this.view.bindInputValueChanged(this.handleChangeInputValue);
  }

  onInputValueChanged = (value, i) => {
    this.view.updateInputValue(value, i);
  };

  handleChangeInputValue = (ammount, i) => {
    this.model.handleChangeInputValue(ammount, i);
  };
}

export default ControllerSeparate;
