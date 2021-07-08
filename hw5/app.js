import ControllerSeparate from "./controllers/controllerSeparate.js";
import Controller from "./controllers/controllerSeparate.js";
import ControllerSingle from "./controllers/controllerSingle.js";

import ModelSeparate from "./models/modelSeparate.js";
import ModelSingle from "./models/modelSingle.js";

import ViewSeparate from "./views/viewSeparate.js";
import ViewSingle from "./views/viewSingle.js";

class App {
  constructor() {
    this.mode = "separate";

    this.radioTypeElement = this.getElements("#typeChanger");

    this.bindTypeChanged();
    this.initApp();
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  getElements(selector) {
    const elements = document.querySelectorAll(selector);
    return elements;
  }

  handleChangeMode = (mode) => {
    this.mode = mode;
  };

  initApp() {
    let app;
    console.log(this.mode, "this.mode");
    if (this.mode === "separate") {
      app = new ControllerSeparate(new ModelSeparate(), new ViewSeparate());
    } else {
      console.log("else");
      app = new ControllerSingle(new ModelSingle(), new ViewSingle());
    }
  }

  bindTypeChanged() {
    this.radioTypeElement.forEach((el) =>
      el.addEventListener("click", (event) => {
        const value = event.target.value;
        this.handleChangeMode(value);
        this.initApp();
      })
    );
  }
}

const app = new App();
