var app = angular.module('RadioActive', ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .state('music', {
      url: '/music',
      templateUrl: '/music.html',
      controller: 'MusicCtrl'
    });
    $urlRouterProvider.otherwise('home');
  }])

  .controller('MainCtrl', [
    '$scope', function($scope) {
      $scope.contents = "This is content! woo";
    }])

  .controller('MusicCtrl', [
    '$scope', '$stateParams', function($scope, $stateParams) {
      $scope.music = "This is the music! woo";
    }
  ]);
