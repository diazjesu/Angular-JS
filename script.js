// Code goes here
(function() {

  // Create a module for latest version of Angular
  var app = angular.module("githubViewer", []);



  //
  // Main controller
  //
  var MainController = function($scope, $http) {
    var onUserComplete = function(response) {
        $scope.user = response.data;
    };

    var onError = function(reason) {
      $scope.error = "Could not fetch the user";
    }

    $scope.message = "Github Viewer";

    $scope.search = function(username) {
      $http.get("https://api.github.com/users/" + username)
        .then(onUserComplete, onError);
    };

    $scope.username = "angular";

  };

  app.controller("MainController", MainController);
}());
