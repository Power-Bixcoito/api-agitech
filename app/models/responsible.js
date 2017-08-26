export default (sequelize, DataType) => {
  const Card = sequelize.import('./card');
  const Responsible = sequelize.define('responsible', {
    name: {
      type: DataType.STRING
    },
    email: {
      type: DataType.STRING,
      validate: {
        isEmail: true
      }
    }
  })

  Responsible.belongsTo(Card, {
    as: 'card'
  }); // Add Card to Responsible using cardId column

  return Responsible;
}