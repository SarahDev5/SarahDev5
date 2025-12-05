

  // script.js
// Load EmailJS SDK
(function() {
  emailjs.init("DRoeVKqqjmB7nzqgM"); // Replace with your EmailJS public key
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Send form using EmailJS
  emailjs.sendForm("service_e4ji4bi", "template_l2mcrqo", this)
    .then(function() {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset();
    }, function(error) {
      alert("Failed to send message: " + JSON.stringify(error));
    });
});
