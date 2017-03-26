
angular.module("shoppingBasket").controller("shoppingBasketController", ["$scope", "$rootScope", "$location", "productService", "loginService", "shoppingBasketService",
    function ($scope, $rootScope, $location, productService, loginService, shoppingBasketService) {

    var customer = loginService.loggedInCustomer();
    var shoppingBasket = shoppingBasketService.shoppingBasket();

    $scope.shoppingBasket = shoppingBasketService.shoppingBasket();
    $scope.orderTotal = shoppingBasketService.getOrderTotal();



}]);

