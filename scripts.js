"use strict";
/*
let xhr = new XMLHttpRequest()

xhr.addEventListener("load", function(){

  //console.log(xhr.responseText);
  let obj = JSON.parse(xhr.responseText);
  let s = JSON.stringify(obj, null, "\t");
  console.log(s);
  document.write("<pre>" + s + "</pre>");
});


xhr.open("GET", "https://consolwebapi.pay4it.dk/api/Devices/Detail?deviceID=559");
xhr.setRequestHeader("Authorization", "Basic cmlra2Vkb21pbm9AZ21haWwuY29tOlJEc2gzbXBCdg==");
xhr.setRequestHeader("Cache-Control", "no-cache");

xhr.send()
*/

/*
var data = null;

var xhr = new XMLHttpRequest();
//xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://consolwebapi.pay4it.dk/api/Devices/Detail?deviceID=559");
xhr.setRequestHeader("Authorization", "Basic cmlra2Vkb21pbm9AZ21haWwuY29tOlJEc2gzbXBCdg==");
xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.20.1");
xhr.setRequestHeader("Accept", "");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "c6aaf013-6a7f-4eab-a124-3d5e0a1f9819,cc58e061-34f9-4ed4-8c06-670345a9a1b7");
xhr.setRequestHeader("Host", "consolwebapi.pay4it.dk");
xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
xhr.setRequestHeader("Connection", "keep-alive");
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);
*/

/*
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://consolwebapi.pay4it.dk/api/Devices/Detail?deviceID=559");
xhr.setRequestHeader("Authorization", "Basic cmlra2Vkb21pbm9AZ21haWwuY29tOlJEc2gzbXBCdg==");
xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.20.1");
xhr.setRequestHeader("Accept", "/");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "c6aaf013-6a7f-4eab-a124-3d5e0a1f9819,74c4d39b-f13a-40b3-8c77-3600c97acb47");
xhr.setRequestHeader("Host", "consolwebapi.pay4it.dk");
xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
xhr.setRequestHeader("Connection", "keep-alive");
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);
*/
/*
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://consolwebapi.pay4it.dk/api/Devices/Detail?deviceID=559#', true);
setRequestHeader("Postman-Token", "c6aaf013-6a7f-4eab-a124-3d5e0a1f9819,cc58e061-34f9-4ed4-8c06-670345a9a1b7");

request.onload = function() {
  // Begin accessing JSON data here
}

// Send request
request.send()
*/
