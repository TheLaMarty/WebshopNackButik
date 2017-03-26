angular.module("login").controller("loginController", ["$scope", "$location", "loginService",

    function ($scope, $location, loginService) {
        $scope.text = "";
        $scope.user = {};

        $scope.login = {};


        $scope.login = function () {

            var user = {
                email: $scope.email,
                password: $scope.password
            };

            loginService.login(user).then(function () {
                // $location.path("/");

                if (!loginService.isLoggedIn()) {
                    $scope.text = "Wrong username or password, please try again."
                }

            });

        };

        $scope.register = function () {

            $location.path("/register");

        }

    }]);
