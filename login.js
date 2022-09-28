const emailInput = document.getElementById("email");
const loginForm = document.querySelector(".login-form");

function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailInput.value.match(validRegex)) {
    emailInput.focus();

    return true;
  } else {
    alert("Invalid email address!");

    emailInput.focus();

    return false;
  }
}
