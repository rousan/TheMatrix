const randomColor = require('randomcolor');
const LivingBeing = require('../LivingBeing/c');

class Archaea extends LivingBeing {
  constructor(id, name, birthPosition) {
    super(id, name, birthPosition);

    this.kind = 'Archaea';
    this.cosmetics = {
      shape: 'rect',
      width: 20,
      height: 20,
      color: 'red',
      position: birthPosition
    };
  }

  deploy(changeCallback) {
    // think
    setInterval(() => {
      this.cosmetics.color = randomColor();

      changeCallback(this);
    }, 50);
  }

  serialize() {
    return {
      kind: this.kind,
      id: this.id,
      name: this.name,
      birthPosition: this.birthPosition,
      cosmetics: this.cosmetics
    };
  }
}

module.exports = Archaea;
