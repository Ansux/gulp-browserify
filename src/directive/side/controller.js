module.exports = ['$scope', '$rootScope', '$http', ($scope, $rootScope, $http) => {
  $scope.$on('CaseChangeFromParrent', (event, casesCount) => {
    $scope.casesCount = casesCount
  })
}]