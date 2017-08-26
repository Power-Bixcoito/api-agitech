export default (sequelize, DataType) => {
  const Responsible = sequelize.define('responsible', {
    name: {
      type: DataType.STRING
    },
    password: {
      type: DataType.STRING
    },
    email: {
      type: DataType.STRING,
      validate: {
        isEmail: true
      }
    }
  })

  return Responsible;
}