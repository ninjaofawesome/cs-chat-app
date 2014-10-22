var MyControllers = angular.module('MyControllers', []);

MyControllers.controller('MainCtrl', function($scope){});


MyControllers.factory('items', function () {
    var items = {};
    items.data = [{
        message: "Hello!"
    }];
    return items;
});

MyControllers.factory('things', function () {
    var items = {};
    items.data = [{
        message: "Hello!"
    }];
    return items;
});


MyControllers.controller('ItemsController', function($scope, items){
  $scope.items = items;

  $scope.addItem = function (index) {
    items.data.push({
        message: $scope.newItemName
    });
  }

});

MyControllers.controller('ThingsController', function($scope, things){
  $scope.things = things;

  $scope.addThings = function (index) {
    things.data.push({
        message: $scope.newThingName
    });
  }

});






