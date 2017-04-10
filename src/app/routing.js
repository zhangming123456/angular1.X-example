'use strict';
import homeCtrl from '../components/home/home.html';
import mainCtrl from '../components/main/main.html';
import ngBindTemplateCtrl from '../components/ngBindTemplate/ng-bindTemplate.html';
angular.module('app.routing', [])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $stateProvider
            .state('home', {
                url: '/home',
                controller: 'homeCtrl',
                template: homeCtrl
            })
            .state('main', {
                url: '/main',
                controller: 'mainCtrl',
                template: mainCtrl,
            })
            .state('ngBindTemplate', {
                url: '/ngBindTemplate',
                controller: 'ngBindTemplateCtrl',
                template: ngBindTemplateCtrl,
            });
        $urlRouterProvider

            .otherwise('home');

        // $locationProvider.html5Mode(true);
    }]);
module.exports = 'app.routing';