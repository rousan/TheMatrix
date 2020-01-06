class Matrix {
  constructor(name, viewport) {
    this.name = name;
    this.viewport = viewport;
    this.viewNode = document.getElementById('root');
  }

  addNode(node) {
    this.viewNode.appendChild(node);
  }

  update(matrixData) {
    console.log(matrixData);
  }
}

export default Matrix;
