document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.querySelector(".login-button");
  const createAccountButton = document.querySelector(".new-acc-button");
  const customAlert = document.getElementById("custom-alert");
  const closeAlertButton = document.getElementById("close-alert");

  function showAlert() {
    customAlert.style.display = "Flex";
  }

  closeAlertButton.addEventListener("click", function () {
    customAlert.style.display = "none";
  });

  loginButton.addEventListener("click", function (event) {
    event.preventDefault();
    showAlert();
  });

  createAccountButton.addEventListener("click", function (event) {
    event.preventDefault();
    showAlert();
  });
});
