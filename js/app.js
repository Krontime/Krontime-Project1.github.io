angular.module("findMusicApp", ["ngRoute", "Route", "UserService", "UserDataService"]);

angular.module("findMusicApp").config(function($locationProvider, $routeProvider) {$locationProvider.html5Mode(true);
    
    $routeProvider.when("Krontime-Project1.github.io/project_1", {
        templateUrl: "https://krontime.github.io/Krontime-Project1.github.io/templates/home.html",
    })
    .when("Krontime-Project1.github.io/copyright", {
        templateUrl: "https://krontime.github.io/Krontime-Project1.github.io/templates/copyright.html",
    })
    .when("Krontime-Project1.github.io/contact",{
        templateUrl: "https://krontime.github.io/Krontime-Project1.github.io/templates/contact.html"
    })
    .when("Krontime-Project1.github.io/add", {
        templateUrl: "https://krontime.github.io/Krontime-Project1.github.io/templates/add.html",
        controller: "Post"
    })
    .when("Krontime-Project1.github.io/accounts/register", {
        templateUrl: "https://krontime.github.io/Krontime-Project1.github.io/templates/register.html",
        controller: "Register"
    })
    .when("Krontime-Project1.github.io/about", {
        templateUrl: "https://krontime.github.io/Krontime-Project1.github.io/templates/about.html",
    })
    .when("Krontime-Project1.github.io/find_music", {
        templateUrl: "https://krontime.github.io/Krontime-Project1.github.io/templates/find_music.html",
        controller: "Events"
    })
    .when("Krontime-Project1.github.io/find_artists/", {
        templateUrl: "https://krontime.github.io/Krontime-Project1.github.io/templates/find_artists.html",
        controller: "informationRouting"
    })
    .when("Krontime-Project1.github.io/find_artists/:id", {
        templateUrl: "https://krontime.github.io/Krontime-Project1.github.io/templates/find_artists.html",
        controller: "informationContent"
    })
    .when("Krontime-Project1.github.io/todo/edit/:id", {
        templateUrl: "https://krontime.github.io/Krontime-Project1.github.io/templates/edit-todo.html",
        controller: "EditTodoController"
    });
});