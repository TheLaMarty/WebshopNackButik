

angular.module("product").controller("productController", ["$scope", "$location", "productService", "shoppingBasketService",

    function ($scope, $location, productService, shoppingBasketService) {

        productService.getProducts().then(function (response) {
            $scope.products = response.data;
        });

        $scope.productClicked = function (id) {
            $location.path("/products/" + id);

        };

        productService.getCategories().then(function (response) {
            $scope.categories = response.data;
        });

        $scope.change = function () {
             $scope.value;
        }

    }

])
;
