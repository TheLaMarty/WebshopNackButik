
angular.module("shoppingBasket").controller("shoppingBasketController", ["$scope", "$rootScope", "$location", "productService", "loginService", "shoppingBasketService",
    function ($scope, $rootScope, $location, productService, loginService, shoppingBasketService) {

    var customer = loginService.loggedInCustomer();
    var shoppingBasket = shoppingBasketService.shoppingBasket();

    $scope.shoppingBasket = shoppingBasketService.shoppingBasket();
    $scope.orderTotal = shoppingBasketService.getOrderTotal();


    $scope.placeOrder = function () {
        if (loginService.isLoggedIn()){
            var productsInShoppingBasket = [];

            for (var i = 0; i < shoppingBasket.length; i++) {
                productsInShoppingBasket.push({
                    productId: product.id,
                    quantity: product.quantity
                });
            }

            var order = {

                customerId: customer.customerId,
                products: productsInShoppingBasket
            };
            shoppingBasketService.sendOrder(order);
        }else
            console.log("please log in");

    };

/*            return $http.post("http://nackbutik.azurewebsites.net/api/order", order)
            console.log(order);
        }*/

}]);

