angular.module('app.directive', [])
  .directive('navbar', require('./navbar'))
  .directive('side', () => {
    return {
      restrict: 'AE',
      replace: true,
      transclude: true,
      template: require('./side/index.html'),
      controller: require('./side/controller'),
      link: () => {
        console.log('ddd')
      }
    }
  })
  .directive('pager', require('./pager'))