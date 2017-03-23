angular.module("shoppingBasket").factory("shoppingBasketService", ["$http", function ($http) {

    var shoppingBasket = [];
    var productExists = false;
    return {

        addToBasket: function (product) {

            // Om varukorgen är tom: lägg till produkten och öka quantity +1
            if (shoppingBasket.length == 0) {
                product.quantity = 1;
                shoppingBasket.push(product);
            }


            else {
                productExists = false;
                for (var i = 0; i < shoppingBasket.length; i++) {

                  // Om varukorgen innehåller id:t, öka quantity +1
                    if (product.id == shoppingBasket[i].id) {
                        shoppingBasket[i].quantity += 1;
                        productExists = true;
                        break;
                    }
                    // Om varukorgen inte innehåller id:t, öka quantity +1
                    if (!productExists) {
                        product.quantity = 1;
                        shoppingBasket.push(product);
                }

                    }

                }

            console.log(shoppingBasket);
        },

        shoppingBasket: function () {
            return shoppingBasket;
        }
    }
}]);