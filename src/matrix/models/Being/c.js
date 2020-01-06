class Being {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.kind = 'Being';
  }

  serialize() {
    return {
      kind: this.kind,
      id: this.id,
      name: this.name
    };
  }
}

module.exports = Being;
