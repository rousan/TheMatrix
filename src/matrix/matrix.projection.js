import Archaea from './models/Archaea/b';
import { applyStyles } from '../client/helpers';

const kindMap = {
  Archaea
};

class Matrix {
  constructor(name, viewport) {
    this.name = name;
    this.viewport = viewport;
    this.viewNode = document.getElementById('root');
    this.beingMap = new Map();
    this.init();
  }

  init() {
    const { viewport, viewNode } = this;

    applyStyles(viewNode, {
      width: `${viewport.width}px`,
      height: `${viewport.height}px`,
      border: '1px solid red',
      margin: '20px'
    });
  }

  addNode(node) {
    this.viewNode.appendChild(node);
  }

  update(matrixChanges) {
    const { beings } = matrixChanges;
    const knownKinds = Object.keys(kindMap);

    beings
      .filter((b) => knownKinds.includes(b.kind))
      .forEach((b) => {
        const { beingMap } = this;

        if (beingMap.has(b.id)) {
          // console.log('Updated a being: ', b.name);
          const being = beingMap.get(b.id);
          being.updateCosmetics(b.cosmetics);
          being.updateProjection();
        } else {
          // console.log('Added a new being: ', b.name);
          const being = kindMap[b.kind].deSerialize(b);
          being.project(this);
          being.updateProjection();
          beingMap.set(b.id, being);
        }
      });
  }
}

export default Matrix;
