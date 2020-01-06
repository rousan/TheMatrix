import NonLivingBeing from '../NonLivingBeing/b';

class Rock extends NonLivingBeing {
  // folow Archaea class
  static deSerialize(data) {
    return new Rock(data.id, data.name);
  }
}

export default Rock;
