class Being {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.kind = 'Being';
    this.cosmetics = {};
    this.node = null;
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
    return new Being(data.id, data.name);
  }
}

export default Being;
