/*angular.module("login").controller("loginController", ["$scope", "$location", "loginService", function ($scope, $location, loginService) {
 $scope.text = "";


 $scope.login = function () {
 loginService.login($scope.email, $scope.password)
 if (!loginService.isLoggedIn()) {
 $scope.text = "Wrong username or password!";
 }
 else{
 $location.path("/");
 }

 $scope.createUser = function () {
 $location.path("/register/");

 };
 };

 }]);*/

angular.module("login").controller("loginController", ["$scope", "$location", "loginService",
    function ($scope, $location, loginService) {
        $scope.text = "";
        $scope.user = {};

        $scope.login = function () {

            var user = {
                email: $scope.email,
                password: $scope.password
            };

            loginService.login(user).then(function () {

                console.log(loginService.isLoggedIn());

                if (!loginService.isLoggedIn()) {
                    $scope.text = "Wrong username or password, please try again."
                }
            });
        };

        $scope.register = function () {

            $location.path("/register");

        }


    }]);