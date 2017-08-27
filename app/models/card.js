export default (sequelize, DataType) => {
    const Responsible = sequelize.import('./responsible');
    const Card = sequelize.define('card', {
        cardNumber: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        proxy: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        pin: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        cvv: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        validDate: {
            type: DataType.DATE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }

    })

    Card.belongsTo(Responsible, {
        as: 'responsible'
    }); // Add Responsible to Card using responsibleId column

    return Card;
}