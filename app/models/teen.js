 export default (sequelize, DataType) => {
   const Responsible = sequelize.import('./responsible');
   const Card = sequelize.import('./card');
   const Teen = sequelize.define('teen', {
     name: {
       type: DataType.STRING,
       allowNull: false,
       validate: {
         notEmpty: true
       }
     },
     email: {
       type: DataType.STRING,
       allowNull: false,
       validate: {
         notEmpty: true,
         isEmail: {
           args: true,
           msg: "Este e-mail é inválido =("
         },
       },
       unique: {
         args: true,
         msg: "Este e-mail já está em uso =("
       }
     },
     nickname: {
       type: DataType.STRING,
       allowNull: false,
       validate: {
         notEmpty: true
       }
     },
     score: {
       type: DataType.INTEGER,
       allowNull: false,
       validate: {
         notEmpty: true
       }
     },
     gender: {
       type: DataType.CHAR,
       allowNull: false,
       validate: {
         notEmpty: true
       }
     },
     password: {
       type: DataType.STRING,
       allowNull: false,
       validate: {
         notEmpty: true
       }
     },
     birthday: {
       type: DataType.DATE,
       allowNull: false,
       validate: {
         notEmpty: true
       }
     }
   })

   Teen.associate = models => {
     Teen.belongsTo(models.responsible); // Add Responsible to Teen using responsibleId column
     Teen.belongsTo(models.card); // Add Card to Teen using cardId column
   }

   return Teen;
 }