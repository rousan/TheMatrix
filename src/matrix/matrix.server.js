const uuid = require('uuid/v4');
const Archaea = require('./models/Archaea/c');

class Matrix {
  constructor(name, viewport) {
    this.name = name;
    this.viewport = viewport;
    this.beings = [];
  }

  bootup(changeCallback) {
    this.changeCallback = changeCallback;
    this.deployInitialBeings();
  }

  deployInitialBeings() {
    const a1 = new Archaea(uuid(), 'A1', { x: 100, y: 33 });
    const a2 = new Archaea(uuid(), 'A2', { x: 400, y: 200 });

    this.addBeing(a1);
    this.addBeing(a2);

    this.deployBeing(a1);
    this.deployBeing(a2);
  }

  addBeing(being) {
    this.beings.push(being);
  }

  deployBeing(being) {
    being.deploy((b) => {
      this.changeCallback({
        beings: [b.serialize()]
      });
    });
  }

  serialize() {
    return {
      beings: this.beings.map((b) => b.serialize())
    };
  }
}

module.exports = Matrix;
