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
                $scope.text = "Welcome!";
                $location.path("/");

                if (!loginService.isLoggedIn()) {
                    $scope.text = "Wrong username or password, please try again."
                }

            });


        };

        $scope.register = function () {

            $location.path("/register");

        };

        $scope.isLoggedIn = function () {
            return loginService.isLoggedIn();
        };

        $scope.currentUser = function () {
            return loginService.loggedInCustomer();
        };

        $scope.logOut = function () {
            loginService.logOut();
        }




    }]);
