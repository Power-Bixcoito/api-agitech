var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'api-agitech'
    },
    port: process.env.PORT || 3000,
    db: process.env.HEROKU_POSTGRESQL_BRONZE_URL
  },

  test: {
    root: rootPath,
    app: {
      name: 'api-agitech'
    },
    port: process.env.PORT || 3000,
    db: process.env.HEROKU_POSTGRESQL_BRONZE_URL
  },

  production: {
    root: rootPath,
    app: {
      name: 'api-agitech'
    },
    port: process.env.PORT || 3000,
    db: process.env.HEROKU_POSTGRESQL_BRONZE_URL
  }
};

module.exports = config[env];