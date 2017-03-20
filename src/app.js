require('./controller')
require('./directive')
const router = require('./config/router')
const run = require('./config/run')

angular.module('app', ['ui.router', 'app.controller', 'app.directive'])
  .config(router)
  .run(run)

// Render App
angular.bootstrap(document, ['app'])
