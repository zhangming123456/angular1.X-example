"use strict";
var appHome = angular.module('myApp', []);
appHome.controller('appCtrl', function ($scope) {
    $scope.text = 12;
});

module.exports = 'myApp';