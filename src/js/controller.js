const cases = require('../modules/cases/index.js')
const setting = require('../modules/setting/index.js')

angular.module('app.controller', [])
  .controller('ctrl.cases', cases)
	.controller('ctrl.setting', setting)
