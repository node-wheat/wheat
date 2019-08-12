'use strict';

var showPackage = require('../controllers/show');

function routes(app) {
  // scope package without version
  app.get('/package', function (ctx) {
    console.log(123, this.render);
    ctx.body = 'hello world'
    return 'helloworld'
    // return this.render('index');
  });
}

module.exports = routes;