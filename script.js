<<<<<<< HEAD
var myKey = "vnTQx5zkeFBoM3YF";
var myurl;

//Now Playing Info API
    myurl = "http://api.shoutcast.com/station/nowplaying?k=" + myKey + "&ct=rihanna&limit=20&f=json";
    $.ajax({
         url : myurl,
         dataType : "json",
         success : function(parsed_json) {
           var currenttrack = parsed_json['response']['data']['stationlist']['station'][0]['ct'];
           var genre = parsed_json['response']['data']['stationlist']['station'][0]['genre'];
           var id = parsed_json['response']['data']['stationlist']['station'][0]['id'];
           console.log(parsed_json);
           var radioname = parsed_json['response']['data']['stationlist']['station'][0]['name'];
           var audioURL = "http://yp.shoutcast.com/sbin/tunein-station.pls?id=" + id;
           console.log("now playing: " + currenttrack);
           audio.src = audioURL;
           audio.currentTime = 0;
           audio.play();
         }
    });

//Genre Info API
//    myurl = "http://api.shoutcast.com/legacy/genresearch?k=" + myKey + "&genre=classic&limit=20";
=======
angular.module('RadioActive', ['ui.router'])
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

  .factory('apiFactory', [function(){
    var api = {
      data: []
    };
    return api;
  }])




  .controller('MainCtrl', [
    '$scope', 'apiFactory', function($scope, apiFactory) {
      $scope.contents = "This is content! woo";
      $scope.data = apiFactory.data;
      console.log($scope.data);

    $scope.dataGet = function (){
      var myKey = "vnTQx5zkeFBoM3YF";
      var myurl;

      var choice = document.getElementById("selection").value;

      //Now Playing Info API
      myurl = "http://api.shoutcast.com/station/nowplaying?k=" + myKey + "&ct=" + choice + "&limit=20&f=json";

      $.ajax({
         url : "https://crossorigin.me/" + myurl,
         dataType : "json",
         success : function(parsed_json) {
                var currenttrack = parsed_json['response']['data']['stationlist']['station'][0]['ct'];
                var genre = parsed_json['response']['data']['stationlist']['station'][0]['genre'];
                var id = parsed_json['response']['data']['stationlist']['station'][0]['id'];
                console.log(parsed_json);
                var radioname = parsed_json['response']['data']['stationlist']['station'][0]['name'];
                var audioURL = "http://yp.shoutcast.com/sbin/tunein-station.pls?id=" + id;
                console.log("now playing: " + currenttrack);
                var x = document.createElement("TABLE");
                x.setAttribute("id", "myTable");
                document.body.appendChild(x);

                var y = document.createElement("TR");
                y.setAttribute("id", "myTr");
                document.getElementById("myTable").appendChild(y);

                var z = document.createElement("TD");
                var t = document.createTextNode("cell");
                z.appendChild(t);
                document.getElementById("myTr").appendChild(z);
                var tbl = document.createElement("TABLE");

              }
            });

     }
   }]);

  /* .controller('MusicCtrl', [
    '$scope', '$stateParams', function($scope, $stateParams) {
      $scope.music = "This is the music!";

    }
  ]);

*/

//Genre Info API
//    myurl = "http://api.shoutcast.com/legacy/genresearch?k=" + myKey + "&genre=" + {{classic}} + "&limit=20";
>>>>>>> e62f2894bc955aa85caa53a11263c8559542eeea
//   $.ajax({
//        url : myurl,
//        dataType : "json",
//        success : function(parsed_json) {
//          console.log(parsed_json);
//        }
<<<<<<< HEAD
//    })
=======
//    })
>>>>>>> e62f2894bc955aa85caa53a11263c8559542eeea
