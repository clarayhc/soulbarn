// Add this in a new file named script.js and link it in your HTML
document.querySelector('.rsvp-button').addEventListener('click', function(event) {
    event.preventDefault();
    alert("Thank you for your interest! You will be redirected to the RSVP page.");
    window.location.href = "https://example.com/register"; // Change URL as needed
});
