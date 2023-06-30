// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the contact form element
    var contactForm = document.getElementById("contactForm");
  
    // Add event listener for form submission
    contactForm.addEventListener("submit", function(event) {
      // Prevent the default form submission
      event.preventDefault();
  
      // Get the form fields
      var nameInput = document.getElementById("name");
      var emailInput = document.getElementById("email");
      var messageInput = document.getElementById("message");
  
      // Get the form values
      var name = nameInput.value.trim();
      var email = emailInput.value.trim();
      var message = messageInput.value.trim();
  
      // Perform form validation
      if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        return;
      }
  
      // Clear the form inputs
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
  
      // Send the form data to the server (you can customize this part)
      // For demonstration purposes, we'll just log the form data
      console.log("Name: " + name);
      console.log("Email: " + email);
      console.log("Message: " + message);
  
      // Show a success message (you can customize this part)
      alert("Thank you for your message! We will get back to you soon.");
    });
  });
  