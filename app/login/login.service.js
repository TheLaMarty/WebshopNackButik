angular.module("login").factory("loginService", ["$http", "$location", function ($http) {

    var isLoggedIn = false;
    var loggedInCustomerId;

    return {

        createLogin: function (customer) {
            return $http.post("http://nackbutik.azurewebsites.net/api/customer", customer);
        },

        login: function (user) {

            return $http.post("http://nackbutik.azurewebsites.net/api/customer/login", user).then(function (response) {

                isLoggedIn = true;
                loggedInCustomerId = response.data.customerId;
            },
            function(error)
            {
                if (error.status == -1) {
                    errorMessage = "Unauthorized";
                }
            });


        },
        isLoggedIn: function () {
            return isLoggedIn;

        }

    };
}])
;