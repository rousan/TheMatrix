class Matrix {
  constructor(name, viewport) {
    this.name = name;
    this.viewport = viewport;
  }

  bootup(changeCallback) {
    setInterval(() => {
      changeCallback();
    }, 2000);
  }

  serialize() {
    return {
      x: 33
    };
  }
}

module.exports = Matrix;
