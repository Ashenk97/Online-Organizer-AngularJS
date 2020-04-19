'use strict';

let app;
app = angular.module('onlineOrg', ['ngMaterial','ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "home.html"
        });
});