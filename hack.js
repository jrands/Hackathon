var path = encodeURIComponent("http://sugaringnyc.com/wp-content/uploads/2014/07/face.jpg");

var apiURL = "http://api.idolondemand.com/1/api/sync/detectfaces/v1?url=" + path + "&apikey=31073e76-4d1f-4615-9375-694ebfad9db7";  


var sendRequest = function(){

  var xhr = new XMLHttpRequest();

  xhr.open("GET", apiURL, false);
  
  xhr.send();
  
  var xhrDoc = xhr.response;
  
  console.log(xhrDoc);
}

sendRequest();