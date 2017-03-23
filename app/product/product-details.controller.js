angular.module("product").controller("productDetailsController", ["$scope", "$routeParams", "productService", "shoppingBasketService",
    function ($scope, $routeParams, productService, shoppingBasketService) {

    var product;

        productService.getProductById($routeParams.productId).then(function (response) {
            $scope.product = response.data;
            product = response.data;
        });

        $scope.addedToBasket = function () {

            shoppingBasketService.addToBasket(product);
        }
    }]);
