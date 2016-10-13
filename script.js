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
//   $.ajax({
//        url : myurl,
//        dataType : "json",
//        success : function(parsed_json) {
//          console.log(parsed_json);
//        }
//    })