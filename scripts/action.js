// accessing required DOM elements/nodes
const submitButton = document.getElementById("submit-button");
const inputEmail = document.getElementById("email");
const errorMessage = document.getElementById("email-error");
const errorImage = document.getElementById("error-image");

// onclick function on form button
submitButton.onclick = (e) => {
  // prevent default action of form submit
  e.preventDefault();

  //   valid email regex
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // check if the email is valid or not
  if (inputEmail.value.match(validRegex)) {
    // remove error messages and icon
    errorMessage.style.display = "none";
    errorImage.style.display = "none";

    /* successful display alert */
    alert(`Email address recieved ${inputEmail.value}`);

    // empty value after receiving
    inputEmail.value = "";
  } else {
    // display error message and icon
    errorMessage.style.display = "block";
    errorImage.style.display = "block";
  }
};
