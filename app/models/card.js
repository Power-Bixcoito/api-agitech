export default (sequelize, DataType) => {
  const Responsible = sequelize.import('./responsible');
  const Card = sequelize.define('card', {
    cardNumber: {
      type: DataType.STRING
    }
  })

  Card.belongsTo(Responsible, {
    as: 'responsible'
  }); // Add Responsible to Card using responsibleId column

  return Card;
}