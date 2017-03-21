module.exports = () => {
  return {
    restrict: 'AE',
    template: require('./index.html'),
    replace: true,
    scope: {
      modal: '='
    },
    link: function (scope) {
      scope.close = function () {
        scope.modal.show = false
      }
    }
  }
}