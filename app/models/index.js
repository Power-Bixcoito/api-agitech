import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from './../../config';
let db = {};

var sequelize = new Sequelize(config.db, {
    dialect: 'postgres'
});

fs.readdirSync(__dirname).filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize.sync({
    force: false
})

export default db;