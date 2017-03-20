const cases = require('../pages/cases')

module.exports = ['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/cases/all')

  $stateProvider
    .state('cases', {
      url: '/cases/:type',
      controller: cases.index,
      template: require('../pages/cases/index.html')
    })
    .state('setting', {
      url: '/setting',
      controller: 'ctrl.setting',
      template: '<div>setting</div>'
    })
}]