var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'api-agitech'
        },
        postgres_username: process.env.PG_USER,
        postgres_password: process.env.PG_PWD,
        postgres_hostname: process.env.PG_HOSTNAME,
        postgres_port: process.env.PG_PORT,
        postgres_database: process.env.PG_DB,
        port: process.env.PORT || 3000,

        db: 'postgres://' + postgres_username +
            postgres_password + '@' +
            postgres_hostname + ':' +
            postgres_port + '/' +
            postgres_database
    },

    test: {
        root: rootPath,
        app: {
            name: 'api-agitech'
        },
        port: process.env.PORT || 3000,
        db: db
    },

    production: {
        root: rootPath,
        app: {
            name: 'api-agitech'
        },
        port: process.env.PORT || 3000,
        db: db
    }
};

module.exports = config[env];