angular.module('app.controller', [])
  .controller('ctrl.app', ['$scope', ($scope) => {
    $scope.$on('CasesChange', (event, casesCount) => {
      $scope.$broadcast('CaseChangeFromParrent', casesCount)
    })
  }])