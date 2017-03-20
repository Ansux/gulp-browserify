angular.module('app.directive', [])
  .directive('navbar', () => {
    return {
      restrict: 'AE',
      replace: true,
      transclude: true,
      template: require('./navbar/index.html'),
      link: () => {
        console.log('ddd')
      }
    }
  })
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