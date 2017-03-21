module.exports = () => {
  return {
    restrict: 'AE',
    template: '<div id="loading" class="loading" ng-show="isLoading"></div>',
    replace: true,
    scope: {
      isLoading: '='
    }
  }
}