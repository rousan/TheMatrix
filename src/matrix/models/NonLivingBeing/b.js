import Being from '../Being/b';

class NonLivingBeing extends Being {
  static deSerialize(data) {
    return new NonLivingBeing(data.id, data.name);
  }
}

export default NonLivingBeing;
