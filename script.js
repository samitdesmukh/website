// Add your JavaScript code here
document.getElementById("whatsappButton").addEventListener("click", function() {
  // Replace the following URL with your own WhatsApp API URL and phone number
  var whatsappUrl = "https://api.whatsapp.com/send?phone=8335899606&text=Hello%20there!";
  
  // Open WhatsApp in a new tab when the button is clicked
  window.open(whatsappUrl, "_blank");
});
