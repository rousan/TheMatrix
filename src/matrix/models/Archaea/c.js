const LivingBeing = require('../LivingBeing/c');

class Archaea extends LivingBeing {
  constructor(id, name, birthPosition) {
    super(id, name, birthPosition);

    this.kind = 'Archaea';
    this.cosmetics = {
      shape: 'rect',
      widht: 20,
      height: 20,
      color: 'red',
      position: birthPosition
    };
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
