export default (sequelize, DataType) => {
    const Teen = sequelize.import('./teen');
    const Task = sequelize.import('./task');
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
    });

    Activity.associate = models => {
        Activity.hasMany(models.task)
    }

    // Task.belongsTo(Activity, {
    //     as: 'activity'
    // }); // Add Activity to Task using activityId column

    Activity.belongsTo(Teen, {
        as: 'teen'
    }); // Add Teen to Activity using teenId column

    Activity.belongsTo(Responsible, {
        as: 'responsible'
    }); // Add Responsible to Activity using responsibleId column


    return Activity;
}