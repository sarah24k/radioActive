var myKey = "vnTQx5zkeFBoM3YF";
var myurl;

//Now Playing Info API
    myurl = "http://api.shoutcast.com/station/nowplaying?k=" + myKey + "&ct=rihanna&limit=20&f=json";
    $.ajax({
         url : myurl,
         dataType : "json",
         success : function(parsed_json) {
           console.log(parsed_json);
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