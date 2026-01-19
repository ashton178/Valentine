function showYes() {
  mainPage.classList.add("hidden");
  yesPage.classList.remove("hidden");
}

function showNo() {
  mainPage.classList.add("hidden");
  noPage.classList.remove("hidden");
}

function redirectToYes() {
  noPage.classList.add("hidden");
  yesPage.classList.remove("hidden");
}

function sendEmail() {
  const message = document.getElementById("message").value;

  if (!message.trim()) {
    alert("Please write something ❤️");
    return;
  }

  emailjs.send("service_a6j08bp", "template_h9ib27h", {
    message: message
  })
  .then(() => {
    alert("Your message has been sent ❤️");
  })
  .catch(() => {
    alert("Failed to send message 😢");
  });
}
