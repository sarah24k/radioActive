
let mySearch = "abba";
let searchURL = "https://api.spotify.com/v1/search?q=" + mySearch + "&type=track&market=US&f=json";
let results;
let list = [];
let title;
let artist;
let length;
let time;
let songID;
let playURL;
let form;
let currentlyPlaying = false;
let currentSongId = '';
let audio = new Audio();

$(document).ready(function() {
	$.ajax({
	  url: searchURL,
	  dataType: "json",
	  success: function(parsed_json) {
	    console.log(parsed_json);
	    results = parsed_json['tracks']['items'];
	    console.log(results);
	    let i = 0;
	    for (i == 0; i < 5; i++) {
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
	    	list.push([title, artist, length_minutes, length_seconds, songID]);
			playURL = "https://embed.spotify.com/?uri=spotify:track:" + songID;
			form = "<iframe src='" + playURL + "' width='300' height='80' frameborder='0' allowtransparency='true'></iframe>";
	    	//$(".playlist").append("<li>" + form + "</li>");
	    	$(".playlist").append("<li>" + list[i][0] + " - " + list[i][1] + ", " + list[i][2] + ":" + list[i][3] + " <button class='button" + list[i][4] + "' type='button'>Play Preview</button></li>");
	   		
	   		console.log(songID);
			$(document.body).on("click", ".button" + songID, function() {
		        //for (let i = 0; i < list.length; i++) {
		            if (currentlyPlaying == false) {
		                console.log(title + " should be playing");
		                audio.src = songURL;
		                audio.currentTime = 0;
		                audio.play();
		            }
		        //}
		    });

	    }
	    console.log(list);
	    
	  }
	});

	
	
});




	//var playlist = [];

//station, song, artist, genre, listening count
//songtitle - artist		genre	songLength?

/*angular.module('app', [])
  .controller('mainCtrl', mainCtrl)
  .directive('playlist', playlistDirective);

function mainCtrl ($scope) {
  $scope.items = [];
  //needs to pull this information from an API such as spotify or something that can play songs
  $scope.addNew = function (item) {
    $scope.items.push({
        songtitle: item.songtitle,
        artist: item.artist,
      	genre: item.genre,
      	songlength: item.songlength
    });
  };
}

function playlistDirective() {
  return {
    scope: {
      item: '='
    },
    restrict: 'E',
    replace: 'true',
    template: (
      '<div class="song">' +
        '<p>{{list[0][0]}} - {{list[0][1]}}	{{list[0][2]}}</p>' +
      '</div>'
    )
  };
}*/
