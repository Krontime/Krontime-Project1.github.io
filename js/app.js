angular.module("findMusicApp", ["ngRoute", "Route", "UserService", "UserDataService"]);

angular.module("findMusicApp").config(function($locationProvider, $routeProvider) {$locationProvider.html5Mode(true);
    
    $routeProvider.when("Krontime-Project1.github.io/project_1", {
        templateUrl: "Krontime-Project1.github.io/templates/home.html",
    })
    .when("Krontime-Project1.github.io/copyright", {
        templateUrl: "Krontime-Project1.github.io/templates/copyright.html",
    })
    .when("Krontime-Project1.github.io/contact",{
        templateUrl: "Krontime-Project1.github.io/templates/contact.html"
    })
    .when("Krontime-Project1.github.io/add", {
        templateUrl: "Krontime-Project1.github.io/templates/add.html",
        controller: "Post"
    })
    .when("Krontime-Project1.github.io/accounts/register", {
        templateUrl: "Krontime-Project1.github.io/templates/register.html",
        controller: "Register"
    })
    .when("Krontime-Project1.github.io/about", {
        templateUrl: "Krontime-Project1.github.io/templates/about.html",
    })
    .when("Krontime-Project1.github.io/find_music", {
        templateUrl: "Krontime-Project1.github.io/templates/find_music.html",
        controller: "Events"
    })
    .when("Krontime-Project1.github.io/find_artists/", {
        templateUrl: "Krontime-Project1.github.io/templates/find_artists.html",
        controller: "informationRouting"
    })
    .when("Krontime-Project1.github.io/find_artists/:id", {
        templateUrl: "Krontime-Project1.github.io/templates/find_artists.html",
        controller: "informationContent"
    })
    .when("Krontime-Project1.github.io/todo/edit/:id", {
        templateUrl: "Krontime-Project1.github.io/templates/edit-todo.html",
        controller: "EditTodoController"
    });
});