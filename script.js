let mySearch = "dancing queen";
let searchURL = "https://api.spotify.com/v1/search?q=" + mySearch + "&type=track&market=US&f=json";
let results;
let list = [];
let title;
let artist;
let length;
let time;
let songID;

$(document).ready(function() {
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
	    $(".playlist").append("<br><button id='deleteButton' onclick='return deleteSongs(this)' type='submit'>Delete songs from playlist</button>");
	    //$("#submitButton").onclick = function () {submitSongs()};
		
	  }
	});
	

});

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
