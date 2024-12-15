var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "r2mluC3ZNeSAm9jT0Xcs009nF2JIprjTQn1cSa5e";

req.open("GET", url + api_key);
req.send();

req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
    //document.getElementById("title").textContent = response.title;
    //document.getElementById("date").textContent = response.date;
    document.getElementById("picAPOD").src = response.hdurl;
    //document.getElementById("explanation").textContent = response.explanation;
  }
})