import Being from '../Being/b';

class LivingBeing extends Being {
  constructor(id, name, birthPosition) {
    super(id, name);

    this.birthPosition = birthPosition;
    this.kind = 'LivingBeing';
    this.cosmetics = {};
    this.node = document.createElement('div');
  }

  updateCosmetics(newCosmetics) {
    this.cosmetics = newCosmetics;
  }

  project(matrix) {
    const { node } = this;
    matrix.addNode(node);
    this.updateProjection();
  }

  updateProjection() {
    throw new Error('Not yet implemented');
  }

  static deSerialize(data) {
    const archaea = new LivingBeing(data.id, data.name, data.birthPosition);
    archaea.cosmetics = data.cosmetics;
    return archaea;
  }
}

export default LivingBeing;
