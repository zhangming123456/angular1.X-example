"use strict";
import template from '../template/hello.html';
angular.module('helloDirective', [])
    .directive('myHello', ['$log', function ($log) {
        var _log = $log.log;
        return {
            /**
             * 可选字符串参数，可以设置这个指令在DOM中可以何种形式被声明，
             * 默认为A（attr(当做标签属性来使用)）<div my-directive></div>
             * 设置为“E”(ele,(直接当做标签来使用)) <my-directive></my-directive>
             * C（类名）<div class="my-directive:expression;"></div>
             * M（注释）<--directive:my-directive expression-->
             *     这些选项可以单独使用，也可以混合在一起使用：
             *     angular.module('myDirective', function(){
             *              return {
             *                  restrict: 'EA' // 输入元素或属性
             *              };
             *      })
             */
            restrict: 'EA',
            // priority: Number, //优先级，可忽略，默认为0， ngRepeat的优先级为1000，这样就可以保证在同一元素上，它总是在其他指令之前被调用。
            // terminal: Boolean,//（布尔型），true或false,如果为false,则这个参数用来告诉AngularJS停止运行当前元素上比本指令优先级低的指令。优先级相同的指令还是会被执行。 ngIf 的优先级略高于 ngView ，
            /**
             *  String or Template Function:
             * （字符串或函数）指令中的一个重要的一个属性，必须被设置其中一种
             *  1，  一段HTML文本；
             *  2，可以接收两个参数的函数，参数为 tElement 和 tAttrs
             *  在html模板中必须只有一个根html标签,且如果有换行则需要使用“\”
             *  例如template: '\
             *  <div> <-- single root element -->\
             *      <a href="http://google.com">Click me</a>\
             *      <h1>When using two elements, wrap them in a parent element</h1>\
             *  </div>\
             *  function(tElement, tAttrs) (...},
             *  更好的选择是使用 templateUrl 参数引用外部模板，参考下面的参数
             */
            template: template,
            // templateUrl: String,//（字符串或函数）1，外部路径的字符串，2，接受两个参数的函数，参数为 tElement 和 tAttrs ，并返回一个外部HTML文件路径的字符串
            // //模板加载后，AngularJS会将它默认缓存到 $templateCache 服务中。（可以提前加载模块到缓存中，提高加载速度）
            replace: true, //Boolean or String, （布尔型）默认为false(模板内容会加载到标签内部)，true(模板内容会替换当前标签)
            /**
             *  Boolean or Object（布尔型或对象）,默认为false, 设置为true 时，会从父作用域继承并创建一个新的作用域对象。
             *  ng-controller 的作用，就是从父级作用域继承并创建一个新的子作用域。
             *  如果要创建一个能够从外部原型继承作用域的指令，将 scope 属性设置为 true
             *  设置为一个对象，则能设置 隔离作用域， scope 属性设置为一个空对象 {} 。如果这样做了，指令的模板就无法访问外部作用域了：
             *  例如.
             *  directive('myDirective', function() {
             *      return {
             *          restrict: 'A',
             *          scope: {},
             *          priority: 100,
             *          template: '<div>Inside myDirective {{ myProperty }}</div>'
             *      };
             *  });
             *  在scope对象中，还可以使用“@” “=” “&”,来设置模板中数据的作用域和绑定规则
             *  "@"  本地作用域属性：使用当前指令中的数据和DOM属性的值进行绑定
             *  “=” 双向绑定：本地作用域上的属性同父级作用域上的属性进行双向的数据绑定。
             *  “&” 父级作用域绑定：通过 & 符号可以对父级作用域进行绑定
             *  例如
             *  scope: {
             *      ngModel: '=', // 将ngModel同指定对象绑定
             *      onSend: '&', // 将引用传递给这个方法
             *      fromName: '@' // 储存与fromName相关联的字符串
             *  }
             */
            scope: {
                ngModel: '=',
                ngBindTemp: '=',
            },
            //  transclude: Boolean, //默认为false.只有当你希望创建一个可以包含任意内容的指令时， 才使用 transclude: true 。
            //  如果指令使用了 transclude 参数，那么在控制器（下面马上会介绍）中就无法正常监听数据模型的变化了。
            /**
             * String or function(scope, element, attrs, transclude, otherInjectables) { ... },
             * （字符串或函数)注册在应用中的控制器的构造函数
             *  使用函数创建内联控制器，例如
             *  angular.module('myApp',[])
             *      .directive('myDirective', function() {
             *          restrict: 'A',
             *          controller:
             *          function($scope, $element, $attrs, $transclude) {
             *              // 控制器逻辑放在这里
             *          }
             *      })
             */
            controller: ['$rootScope', '$scope', '$element', '$attrs', '$transclude', '$log', function ($rootScope, scope, element, attrs, transclude, $log) {
                var a = scope.text = '你好啊';
                $log.error(a);
                _log($rootScope, scope, element, attrs, $log);
            }],
            link(scope,e,attrs){
                _log(arguments)
            }
        }
    }]);
module.exports = 'helloDirective';
