module.exports = () => {
  return {
    restrict: 'AE',
    replace: true,
    transclude: true,
    template: require('./index.html'),
    link: () => {
      console.log('ddd')
    }
  }
}