"use strict";
var appHome = angular.module('app.main', []);
appHome.controller('mainCtrl', function ($scope) {
    $scope.text = 14;
});
module.exports = 'app.main';