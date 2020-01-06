import Being from '../Being/b';

class LivingBeing extends Being {
  constructor(id, name, birthPosition) {
    super(id, name);

    this.birthPosition = birthPosition;
    this.kind = 'LivingBeing';
  }

  static deSerialize(data) {
    const archaea = new LivingBeing(data.id, data.name, data.birthPosition);
    archaea.updateCosmetics(data.cosmetics);
    return archaea;
  }
}

export default LivingBeing;
