'use strict';
//node_modules
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';
import uiBootstrap from 'angular-ui-bootstrap';

// vendor .css
import '../../vendors/animate.css/animate.min.css';
import '../../vendors/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import '../../vendors/font-awesome-4.7.0/css/font-awesome.min.css';

//statics .css
import '../../statics/css/reset/reset.css';

//statics .less
import '../../statics/css/base/main.css';

//statics .js
import routing from './routing.js';
import controllers from './controllers.js';
import directives from '../directives/index';

angular.module('app', [
    uiRouter,
    ngAnimate,
    ngSanitize,
    uiBootstrap,
    routing,
    controllers,
    directives,
]);
