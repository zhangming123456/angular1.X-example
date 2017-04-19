'use strict';
angular.module('bindExample', [])
    .controller('ngBindTemplateCtrl', ['$scope', function ($scope) {
        $scope.froms = {
            inputTests: {
                salutation: '12',
                name: ''
            },
            templateUrl: '',
            open: function () {
                this.templateUrl = 'tpl.html';
            }
        };
        $scope.text = "hello world"
    }]);

//webpack模块配置使用
module.exports = 'bindExample';
