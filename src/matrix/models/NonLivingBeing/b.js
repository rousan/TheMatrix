import Being from '../Being/b';

class NonLivingBeing extends Being {
  // folow LivingBeing class
  static deSerialize(data) {
    return new NonLivingBeing(data.id, data.name);
  }
}

export default NonLivingBeing;
