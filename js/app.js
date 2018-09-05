angular.module("findMusicApp", ["ngRoute", "Route", "UserService", "UserDataService"]);

angular.module("findMusicApp").config(function($locationProvider, $routeProvider) {$locationProvider.html5Mode(true);
    
    $routeProvider.when("Krontime-Project1.github.io/project_1", {
        templateUrl: "Krontime-Project1.github.io/templates/home.html",
    })
    .when("/copyright", {
        templateUrl: "Krontime-Project1.github.io/templates/copyright.html",
    })
    .when("/contact",{
        templateUrl: "Krontime-Project1.github.io/templates/contact.html"
    })
    .when("/add", {
        templateUrl: "Krontime-Project1.github.io/templates/add.html",
        controller: "Post"
    })
    .when("/accounts/register", {
        templateUrl: "Krontime-Project1.github.io/templates/register.html",
        controller: "Register"
    })
    .when("/about", {
        templateUrl: "Krontime-Project1.github.io/templates/about.html",
    })
    .when("/find_music", {
        templateUrl: "Krontime-Project1.github.io/templates/find_music.html",
        controller: "Events"
    })
    .when("/find_artists/", {
        templateUrl: "Krontime-Project1.github.io/templates/find_artists.html",
        controller: "informationRouting"
    })
    .when("/find_artists/:id", {
        templateUrl: "Krontime-Project1.github.io/templates/find_artists.html",
        controller: "informationContent"
    })
    .when("/todo/edit/:id", {
        templateUrl: "Krontime-Project1.github.io/templates/edit-todo.html",
        controller: "EditTodoController"
    });
});