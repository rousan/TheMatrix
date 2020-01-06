import LivingBeing from '../LivingBeing/b';
import { applyStyles } from '../../../client/helpers';

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

  updateProjection() {
    const { node, cosmetics } = this;

    applyStyles(node, {
      display: 'block',
      position: 'absolute',
      width: `${cosmetics.widht}px`,
      height: `${cosmetics.height}px`,
      left: `${cosmetics.position.x}px`,
      top: `${cosmetics.position.y}px`,
      backgroundColor: cosmetics.color
    });
  }

  static deSerialize(data) {
    const archaea = new Archaea(data.id, data.name, data.birthPosition);
    archaea.cosmetics = data.cosmetics;
    return archaea;
  }
}

export default Archaea;
