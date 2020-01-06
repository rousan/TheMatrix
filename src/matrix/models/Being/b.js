class Being {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.kind = 'Being';
  }

  project() {
    throw new Error('Method is not yet implemented');
  }

  static deSerialize(data) {
    return new Being(data.id, data.name);
  }
}

export default Being;
