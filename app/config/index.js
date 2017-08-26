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
    db: 'postgres://fyddfscdoqnoye:ab0d533a4da89ad46df346fdbb7c1d417087b332e58bf24c662d25c3eb73d6d7@ec2-54-163-254-76.compute-1.amazonaws.com:5432/d8qeciq2oavgha'
  },

  test: {
    root: rootPath,
    app: {
      name: 'api-agitech'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://fyddfscdoqnoye:ab0d533a4da89ad46df346fdbb7c1d417087b332e58bf24c662d25c3eb73d6d7@ec2-54-163-254-76.compute-1.amazonaws.com:5432/d8qeciq2oavgha'
  },

  production: {
    root: rootPath,
    app: {
      name: 'api-agitech'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://fyddfscdoqnoye:ab0d533a4da89ad46df346fdbb7c1d417087b332e58bf24c662d25c3eb73d6d7@ec2-54-163-254-76.compute-1.amazonaws.com:5432/d8qeciq2oavgha'
  }
};

module.exports = config[env];