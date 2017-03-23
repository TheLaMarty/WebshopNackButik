angular.module("app").config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider

        .when("/", {
            templateUrl: "app/app.template.html",
            controller: "appController"

        })

        .when("/products", {
            templateUrl: "app/product/products-overview.template.html",
            controller: "productController"
        })

        .when("/products/:productId", {
            templateUrl: "app/product/product-details.template.html",
            controller: "productDetailsController"
        })

        .when("/login", {
            templateUrl: "app/login/login.template.html",
            controller: "loginController"
        })

        .when("/register", {
            templateUrl: "app/login/create-account.template.html",
            controller: "createAccountController"
        })

        .when("/shoppingBasket", {
            templateUrl: "app/shopping-basket/shopping-basket.template.html",
            controller: "shoppingBasketController"
        })
        .when("/orderConfirmation", {
            templateUrl: "app/shopping-basket/order-confirmation.template.html",
            controller: "shoppingBasketController"
        })
        .otherwise("/");
    $locationProvider.html5Mode(true);


}]);


