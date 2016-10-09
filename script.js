var myKey = vnTQx5zkeFBoM3YF;
var myurl = "http://api.shoutcast.com/legacy/genresearch?k=" + myKey + "&genre=classic&limit=X,Y"

$.ajax({
 		   url : myurl,
 		   dataType : "json",
 		   success : function(parsed_json) {
		     
 		   }
 		 });
