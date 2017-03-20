module.exports = () => {
  return {
    restrict: 'AE',
    replace: true,
    transclude: true,
    template: require('./index.html'),
    scope: {
      page: '='
    },
    link: (scope, ele, attrs) => {
      let page = scope.page
      let items = []
      for (let i = 1; i <= page.totalPage; i++) {
        items.push({
          index: i
        })
      }
      scope.pageItems = items

      scope.changePage = (index) => {
        scope.page.current = index
        scope.$emit('changePage')
      }
    }
  }
}