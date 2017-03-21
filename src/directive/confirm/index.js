module.exports = () => {
  return {
    restrict: 'AE',
    template: `<div class="warp-confirm" ng-show="confirm.show">
      <div class="confirm">
        <div class="title"><span class="text">提示：</span><span class="btn-close" ng-click="close()">&times;</span></div>
        <div class="content">{{confirm.text}}</div>
        <div class="btns"><a class="ok" ng-click="confirm.ok()">确定</a><a class="cancel" ng-click="close()">取消</a></div>
      </div>
    </div>`,
    replace: true,
    scope: {
      confirm: '='
    },
    link: function (scope) {
      scope.close = function () {
        scope.confirm.show = false
        scope.confirm.action = false
      }
    }
  }
}