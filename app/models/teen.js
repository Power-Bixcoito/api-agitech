 export default (sequelize, DataType) => {
   const Responsible = sequelize.import('./responsible');
   const Card = sequelize.import('./card');
   const Teen = sequelize.define('teen', {
     name: {
       type: DataType.STRING
     },
     email: {
       type: DataType.STRING,
       validate: {
         isEmail: true
       }
     },
     nickname: {
       type: DataType.STRING
     },
     score: {
       type: DataType.INTEGER
     },
     gender: {
       type: DataType.CHAR
     },
     password: {
       type: DataType.STRING
     },
     birthday: {
       type: DataType.DATE
     }
   })

   Teen.belongsTo(Responsible, {
     as: 'responsible'
   }); // Add Responsible to Teen using responsibleId column

   Teen.belongsTo(Card, {
     as: 'card'
   }); // Add Card to Teen using cardId column

   return Teen;
 }