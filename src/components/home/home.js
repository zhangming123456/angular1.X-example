"use strict";
var appHome = angular.module('app.home', []);
appHome.controller('homeCtrl', function ($scope) {
    $scope.text = 12;
});

module.exports = 'app.home';