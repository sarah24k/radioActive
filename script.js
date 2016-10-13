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



let results;
let list = [];
let title;
let artist;
let length;
let time;
let songID;

//$("#art-click").onclick = function() {myFunction()}

function myFunction() {
	let mySearch = document.getElementById("selection").value;
	let searchURL = "https://api.spotify.com/v1/search?q=" + mySearch + "&type=track&market=US&f=json";
	$.ajax({
	  url: searchURL,
	  dataType: "json",
	  success: function(parsed_json) {
	    console.log(parsed_json);
	    results = parsed_json['tracks']['items'];
	    console.log(results);
	    for (let i = 0; i < 10; i++) {
	    	title = results[i]['name'];
	    	artist = results[i]['artists'][0]['name'];
	    	length = results[i]['duration_ms'];	
	    	songID = results[i]['id'];
	    	songURL = results[i]['preview_url'];
	    	time = new Date(length);
	    	length_minutes = time.getMinutes();
	    	length_seconds = time.getSeconds();
	    	if (length_seconds < 10) {
	    		length_seconds = "0"+length_seconds;
	    	}
	    	list.push([title, artist, length_minutes, length_seconds, songID, songURL]);
	    	$(".search").append("<span id='span"+i+"'><input type='checkbox' id='song"+i+"'>" + list[i][0] + " - " + list[i][1] + ", " + list[i][2] + ":" + list[i][3] + "</input><audio controls><source id='audio"+i+"' src="+songURL+" type='audio/mp3'></audio></span><br>");
	   		//$(".song"+i).append("<audio controls><source id='audio"+i+"' src="+songURL+" type='audio/mp3'></audio>");


	   		console.log(songID);
	    }
	    $(".search").append("<br><button id='submitButton' onclick='return submitSongs(this)' type='submit'>Add songs to playlist</button>");
	    console.log(list);
	    //$(".playlist").append("<br><button id='deleteButton' onclick='return deleteSongs(this)' type='submit'>Delete songs from playlist</button>");
	    //$("#submitButton").onclick = function () {submitSongs()};
		
	  }
	});
	
};

function submitSongs(me) {
		for (let a = 0; a < 10; a++) {
			if (document.getElementById("song"+a).checked) {
				console.log("here");
				console.log(document.getElementById("span"+a));
				$(".playlist").append(document.getElementById("span"+a));
				$(".playlist").append("<br>");
			}
		}
	};
  /* .controller('MusicCtrl', [
    '$scope', '$stateParams', function($scope, $stateParams) {
      $scope.music = "This is the music!";
    }
  ]);
*/

//Genre Info API
//    myurl = "http://api.shoutcast.com/legacy/genresearch?k=" + myKey + "&genre=" + {{classic}} + "&limit=20";
//   $.ajax({
//        url : myurl,
//        dataType : "json",
//        success : function(parsed_json) {
//          console.log(parsed_json);
//        }
//    })
