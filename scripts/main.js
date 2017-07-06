function myFunction(){
  console.log(this.responseText);
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", myFunction);
myRequest.open("GET", "api.py");
myRequest.send();
console.log(myRequest);
