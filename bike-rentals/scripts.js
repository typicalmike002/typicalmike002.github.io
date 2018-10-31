
'use strict';

$(document).ready(function() {

    var bikesViewModel = new BikesViewModel();
    bikesViewModel.getBikes();

    ko.applyBindings(bikesViewModel);
});

function BikesViewModel() {
    var self = this;
    self.displayedBikes = ko.observableArray([]);
    self.getBikes = function(id, name, type) {
        $.getJSON("https://typicalmike002.github.io/bike-rentals/products.json", function(data) {

        });
    }
}