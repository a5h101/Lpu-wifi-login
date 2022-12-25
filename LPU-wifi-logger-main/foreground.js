var agreePolicy = document.getElementById("agreepolicy");
var warningTxt = document.getElementsByClassName("note")[0];

var username = document.getElementsByName("username")[0];
var password = document.getElementsByName("password")[0];
var loginbtn = document.getElementById("loginbtn");

// let failureCount = 0;

if (
  warningTxt &&
  (warningTxt.innerHTML == "Wrong username/password" ||
    warningTxt.innerHTML == "You are not allowed to login from this IP address")
) {
  var id = localStorage.getItem("LPU_wifi_id"),
    pass = localStorage.getItem("LPU_wifi_pass");
  if (id == undefined || pass == undefined) {
    getData();
  }

  logMeIn(id, pass);
} else if (agreePolicy) {
  logMeIn("exam26", "exam@26");
}

function getData() {
  id = prompt("Enter your LPU Wifi ID");
  pass = prompt("Enter your LPU Wifi Password");
  localStorage.setItem("LPU_wifi_id", id);
  localStorage.setItem("LPU_wifi_pass", pass);
}

function logMeIn(id, pass) {
  agreePolicy.click();
  console.log(id, pass);
  if (agreePolicy.checked) {
    username.value = id;
    password.value = pass;

    loginbtn.click();
  }
  window.open("https://fast.com");
}
