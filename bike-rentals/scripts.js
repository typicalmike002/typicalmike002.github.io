
'use strict';

$(document).ready(function() {

    var bikesViewModel = new BikesViewModel();

    getBikes(function(data) {
        bikesViewModel.displayedBikes(data.products);
    });

    ko.applyBindings(bikesViewModel);
});

function BikesViewModel() {
    var self = this;
    self.displayedBikes = ko.observableArray([]);
    self.purchasedRental = ko.observable({
        "name": "",
        "price": 0.00
    });
    self.selectedFilter = ko.observable();
    self.types = [
        { text: "Bike", value: "bike" },
        { text: "Accessory", value: "accessory" },
        { text: "Add On", value: "addon" }
    ];
    self.selectedFilter.subscribe(function(selectedValue) {
        getBikes(function(data) {
            self.displayedBikes(data.products.filter(function(product) {
                return product.product_type === selectedValue.value;
            }));
        });
    }, this);
    self.selectRental = function(selectedValue) {
        self.purchasedRental(selectedValue);
    }
}

function getBikes(onSuccess) {
    $.getJSON("https://typicalmike002.github.io/bike-rentals/products.json", onSuccess);
}