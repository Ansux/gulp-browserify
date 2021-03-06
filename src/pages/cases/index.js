module.exports = {
  index: ['$scope', '$stateParams', ($scope, $stateParams) => {
    let casesType = $stateParams.type

    $scope.cases = []
    // 数据处理
    function computedData(patientList, patientOption) {
      if (patientList.length > 0) {
        let tempArr = []
        angular.forEach(patientList, function (v, k) {
          v.Sex = (v.Sex === 'M') ? '男' : '女'
          v.isChecked = false
          v.isOpen = false
          tempArr.push(v)
        })
        $scope.cases = tempArr
        $scope.$emit('CasesChange', {
          all: patientOption.all,
          unCheck: patientOption.uncheck,
          unDiagnose: patientOption.undiagnose,
          isDiagnose: patientOption.diagnose
        })
        $scope.loading = false
      }
    }

    $scope.collect = function (event) {
      event.stopPropagation()
      $scope.confirm = {
        show: true,
        text: '确定要收藏么？',
        ok: function () {
          alert('已经收藏！')
          this.show = false
        }
      }
    }

    $scope.entry = function (event, item) {
      event.stopPropagation()
      $scope.confirm = {
        show: true,
        text: '确定要录入数据么？',
        ok: function () {
          alert('已经录入！')
          this.show = false
        }
      }
    }

    // 请求数据
    function fetchData() {
      $scope.loading = true

      var response = {}
      if (casesType === 'all') response = require('../../../assets/json/cases.json')
      else if (casesType === 'unCheck') response = require('../../../assets/json/unCheck.json')
      else if (casesType === 'unDiagnose') response = require('../../../assets/json/unDiagnose.json')
      else if (casesType === 'isDiagnose') response = require('../../../assets/json/isDiagnose.json')
      if (response.Status === true) {
        let data = JSON.parse(response.Data)

        let patientOption = JSON.parse(JSON.parse(response.Data).patientOption)
        $scope.page.totalPage = patientOption.totalPage

        let tempArr = JSON.parse(data.patientList)
        let start = ($scope.page.current - 1) * $scope.page.size,
          end = $scope.page.current * $scope.page.size
        let patientList = tempArr.slice(start, end)

        computedData(patientList, patientOption)
      }
    }

    $scope.page = {
      current: 1,
      size: 5,
      totalPage: 0
    }

    $scope.$on('changePage', function () {
      fetchData()
    })

    fetchData()

  }]
}