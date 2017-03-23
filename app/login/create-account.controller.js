angular.module("login").controller("createAccountController", ["$scope", "$routeParams", "$location", "loginService",
    function ($scope, $routeParams, $location, loginService) {

    $scope.newAccount = {};
    
        $scope.createAccount = function () {

            var newAccount = {
                firstName: $scope.firstName,
                lastName: $scope.lastName,
                email: $scope.email,
                phone: $scope.phone,
                password: $scope.password,
                address: $scope.address,
                postalCode: $scope.postalCode,
                city: $scope.city

            };
            console.log(newAccount);
            $location.path("/products");

            loginService.createLogin(newAccount);

        }

    }]);