module.exports = ['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/cases')

  $stateProvider
    .state('cases', {
      url: '/cases',
      controller: 'ctrl.cases',
      template: require('../modules/cases/index.html')
    })
    .state('setting', {
      url: '/setting',
      controller: 'ctrl.setting',
      template: '<div>setting</div>'
    })
}]