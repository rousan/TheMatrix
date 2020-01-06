const Being = require('../Being/c');

class LivingBeing extends Being {
  constructor(id, name, birthPosition) {
    super(id, name);

    this.birthPosition = birthPosition;
    this.kind = 'LivingBeing';
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

module.exports = LivingBeing;
