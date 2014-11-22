
var getURL = function(){

  var url = "/1/api/sync/detectfaces/v1 file=my-face.jpg";
  
  return url;

}

var sendQuery = function(apiURL){

  xhr = new XMLHttpRequest();
  xhr.open('POST', apiURL, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  
  xhr.onload = function () {
    response=JSON.parse(this.responseText);
    docs=response["documents"];
    for (i=0;i<docs.length;i++){
        console.log(docs[i]["title"])
    }
  }
  
  xhr.send('text=great&apikey=31073e76-4d1f-4615-9375-694ebfad9db7');
  
  var data = new FormData();
  data.append('apikey', '31073e76-4d1f-4615-9375-694ebfad9db7');
  data.append('text', 'great');
  var test = xhr.send(data);
  return test;
}

document.getElementById("para").innerHTML = sendQuery(getURL);