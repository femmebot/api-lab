var output = document.getElementById('output');

function myFunction(){
  if(this.readystate == 4 && this.status == 200){
    output.innerHTML = this.responseText;
  }
}

var myRequest = new XMLHttpRequest();
myRequest.onreadystatechange = myFunction;
myRequest.open("GET", "../api.php");
myRequest.send();
console.log(myRequest);
