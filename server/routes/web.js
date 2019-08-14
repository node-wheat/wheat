
const showPackage = require('../controllers/show');

function routes(router) {
  // scope package without version
  router.get('/package', showPackage);
  // return this.render('index');
}

module.exports = routes;
