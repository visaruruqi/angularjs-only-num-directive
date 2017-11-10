/**
 * @ngdoc directive
 * @name vitoys.directive:onlyNum
 * @scope
 * @restrict A (default value)
 * @description This directive allow in input to add positive and negative numbers and '.' sign.
 *
 */

angular
.module('vitoys') //you can replace with your own module name
.directive('onlyNum', function () {

    return function (scope, element, attrs) {

        var keyCode = [0, 8, 9, 46, 45, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
        element.bind("keypress", function (event) {
           
            if ($.inArray(event.which, keyCode) === -1) {
                scope.$apply(function () {
                    scope.$eval(attrs.onlyNum);
                    event.preventDefault();
                });
                event.preventDefault();
            }


        });
    };
});