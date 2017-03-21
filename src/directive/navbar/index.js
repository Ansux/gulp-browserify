module.exports = ['$rootScope', ($rootScope) => {
  return {
    restrict: 'AE',
    replace: true,
    transclude: true,
    template: require('./index.html'),
    link(scope) {
      scope.$watch('currentState', function (nv, ov) {
        if (!nv) return
        scope.controller = (nv.state === 'cases') ? 'cases' : 'setting'
        scope.brandTitle = (scope.controller === 'cases') ? '病例中心' : '用户设置'
      })
    }
  }
}]