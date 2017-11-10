# angularjs-only-num-directive
Prevents non numeric characters from entering the input tag in html, except the dot character that serves as decimal seperator 

usage examples:

```html
<input type="text" only-num />
```

```html
<input type="text" ng-model="firstName" only-num  />
```

before using the directive import it to your module

```javascript
var app = angular.module('myAngularApp',['vitoys'])

app.controller('myController',function($scope){
  $scope.firstName = "Scully";
})
```
