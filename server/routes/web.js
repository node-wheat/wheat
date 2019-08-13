'use strict';

var showPackage = require('../controllers/show');

function routes(router, app) {
  // scope package without version
  router.get('/package', showPackage);
    // return this.render('index');
}

module.exports = routes;