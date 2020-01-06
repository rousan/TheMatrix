class Being {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.kind = 'Being';
    this.cosmetics = {};
    this.node = null;
  }

  deploy(changeCallback) {
    throw new Error('Method is not yet implemented');
  }

  serialize() {
    return {
      kind: this.kind,
      id: this.id,
      name: this.name,
      cosmetics: this.cosmetics
    };
  }
}

module.exports = Being;
