export default (sequelize, DataType) => {
    const Teen = sequelize.import('./teen');
    //const Activity = sequelize.import('./activity');
    const Responsible = sequelize.import('./responsible');
    const Task = sequelize.define('task', {
        title: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        description: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        completed: {
            type: DataType.BOOLEAN
        },
        startedAt: {
            type: DataType.DATE
        },
        endedAt: {
            type: DataType.DATE
        },
        reward: {
            type: DataType.FLOAT
        }
    })

    Task.associate = models => {
        Task.belongsTo(models.activity);
    }

    // Task.belongsTo(Activity, {
    //   as: 'activity'
    // }); // Add Activity to Task using activityId column

    Task.belongsTo(Responsible, {
        as: 'responsible'
    }); // Add Responsible to Task using responsibleId column

    Task.belongsTo(Teen, {
        as: 'teen'
    }); // Add Teen to Task using teenId column

    return Task;
}