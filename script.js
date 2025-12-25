const form = document.querySelector("form");
const email = document.getElementById("email");
const fname = document.getElementById("name");
const msg = document.getElementById("message");

function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_8xcamf8", "template_puqtmxj", params).then(
    function () {
      Swal.fire({
        title: "Success",
        text: "Email sent successfully",
        icon: "success",
      });
    },
    function (error) {
      console.error("FAILED...", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  );
}

function checkEmail() {
  const emailRegex = /^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$/;
  const emailErr = document.querySelector(".error-text.email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      emailErr.innerText = "Enter a valid email";
    } else {
      emailErr.innerText = "Email cannot be empty";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

function checkInputs() {
  const inputs = document.querySelectorAll(".contact__input");

  for (const input of inputs) {
    if (input.value == "") {
      input.classList.add("error");
      input.parentElement.classList.add("error");
    }

    if (inputs[1] != "") {
      checkEmail();
    }

    inputs[1].addEventListener("keyup", () => {
      checkEmail();
    });

    input.addEventListener("keyup", () => {
      input.classList.remove("error");
      input.parentElement.classList.remove("error");
    });
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (
    !fname.classList.contains("error") &&
    !email.classList.contains("error") &&
    !msg.classList.contains("error")
  ) {
    sendMail();
    form.reset();
    return false;
  }
});
