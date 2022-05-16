function registration() {
  var email = document.getElementById("Email").value;
  var uname = document.getElementById("UserName").value;
  var pwd = document.getElementById("password").value;
  var cpwd = document.getElementById("RePassword").value;
  var pwd_expression =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  var letters =/^[A-Za-z]+$/;
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (email == "") {
    alert("Please enter your user email id");
  } else if (!filter.test(email)) {
    alert("Invalid email");
  } else if (uname == "") {
    alert("Please enter the user name.");
  } else if (!letters.test(uname)) {
    alert("User name field required only alphabet characters");
  } else if (pwd == "") {
    alert("Please enter Password");
  } else if (!pwd_expression.test(pwd)) {
    alert(
      "Upper case, Lower case, Special character and Numeric letter are required in Password filed"
    );
  } 
  else if (document.getElementById("password").value.length < 8) {
    alert("Password minimum length is 8");
  } else if (document.getElementById("password").value.length > 28) {
    alert("Password max length is 28");
  }
  else if (cpwd == pwd) {
    alert("welcome to yummy");
  }  else if (pwd != cpwd) {
    alert("Password not Matched");
  }  else {
    alert("Thank You for Login & You are Redirecting to Campuslife Website");
  }
}
