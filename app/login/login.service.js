angular.module("login").factory("loginService", ["$http", "$location", function ($http) {

    var isLoggedIn = false;
    var loggedInCustomer;

    return {

        createLogin: function (customer) {
            return $http.post("http://nackbutik.azurewebsites.net/api/customer", customer);
        },

        login: function (user) {

            return $http.post("http://nackbutik.azurewebsites.net/api/customer/login", user).then(function (response) {

                isLoggedIn = true;
                loggedInCustomer = response.data;
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

        },
        loggedInCustomer: function () {
            return loggedInCustomer;
        },
        logOut: function () {
            isLoggedIn = false;
            loggedInCustomer = null;
        }

    };
}])
;