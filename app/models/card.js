export default (sequelize, DataType) => {
  const Card = sequelize.define('card', {
    cardNumber: {
      type: DataType.STRING
    }
  })

  return Card;
}

