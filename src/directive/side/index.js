module.exports = ['$rootScope', ($rootScope) => {
  return {
    restrict: 'AE',
    replace: true,
    transclude: true,
    template: require('./index.html'),
    link: (scope) => {
      scope.$on('CaseChangeFromParrent', (event, casesCount) => {
        scope.casesCount = casesCount
      })
    }
  }
}]