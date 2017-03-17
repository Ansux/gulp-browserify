require('./js/controller.js')
const router = require('./js/router.js')

angular.module('app', ['ui.router', 'app.controller'])
  .config(router)
// Render
angular.bootstrap(document, ['app'])
