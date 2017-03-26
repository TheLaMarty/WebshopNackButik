
angular.module("shoppingBasket").controller("shoppingBasketController", ["$scope", "$rootScope", "$location", "productService", "loginService", "shoppingBasketService", function ($scope, $rootScope, $location, productService, loginService, shoppingBasketService) {

    $scope.shoppingBasket = shoppingBasketService.shoppingBasket();
    $scope.orderTotal = shoppingBasketService.getOrderTotal();

    return {

        placeOrder: function (order){
            return $http.post("http://nackbutik.azurewebsites.net/api/order", order).then(function (response){

            })
        }
    }

}]);

