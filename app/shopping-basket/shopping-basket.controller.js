
angular.module("shoppingBasket").controller("shoppingBasketController", ["$scope", "$rootScope", "$location", "productService", "loginService", "shoppingBasketService", function ($scope, $rootScope, $location, productService, loginService, shoppingBasketService) {

    $scope.shoppingBasket = shoppingBasketService.shoppingBasket();

}]);

