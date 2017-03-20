module.exports = ['$rootScope', '$state', '$stateParams', ($rootScope, $state, $stateParams) => {
  let state = {}
  $rootScope.$on('$stateChangeStart', (evt, toState, toParams, fromState, fromParams) => {
    state = {
      toState: toState.name,
      toParams: toParams,
      fromState: fromState.name,
      fromParams: fromParams
    }
    $rootScope.currentState = {
      state: toState.name,
      params: toParams
    }
  })

  $rootScope.state = {
    back () {
      if (state.fromState) {
        $state.go(state.fromState, state.fromParams)
      } else {
        let actions = state.toState.split('.')
        actions.length > 1 && $state.go(actions[actions.length - 2])
      }
    },
    reload () {
      $state.reload(state.toState, state.toParams)
    }
  }
}]