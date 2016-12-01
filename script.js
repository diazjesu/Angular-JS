// Code goes here
(function() {

  // Create a module for latest version of Angular
  var app = angular.module("githubViewer", []);

  //
  // Main controller
  //
  var MainController = function($scope, $http) {
    // $scope.variableName allows you to pass information for js to and from the html file
    $scope.message = "Github Viewer";
    $scope.username = "angular";

    var onUserComplete = function(response) {
        // If response is successful
        $scope.user = response.data;
        $scope.error = ""; // Problem Solved :)
    };

    var onError = function(reason) {
      // Error fetching data for username
      $scope.error = "Could not fetch the user";
    }

    $scope.search = function(username) {
      $http.get("https://api.github.com/users/" + username)
        .then(onUserComplete, onError);
    };
  };

  app.controller("MainController", MainController);
}());
