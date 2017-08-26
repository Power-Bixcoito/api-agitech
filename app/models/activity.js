export default (sequelize, DataType) => {
    const Teen = sequelize.import('./teen');
    const Responsible = sequelize.import('./responsible');
    const Activity = sequelize.define('activity', {
        title: {
            type: DataType.STRING
        },
        description: {
            type: DataType.STRING
        },
        startedAt: {
            type: DataType.DATE
        },
        endedAt: {
            type: DataType.DATE
        }
    })

    Activity.belongsTo(Teen, {
        as: 'teen'
    }); // Add Teen to Activity using teenId column

    Activity.belongsTo(Responsible, {
        as: 'responsible'
    }); // Add Responsible to Activity using responsibleId column

    return Activity;
}