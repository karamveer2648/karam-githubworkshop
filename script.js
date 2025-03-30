// Typer effect for the name in the Hero section
const typerName = document.getElementById('typer-name');
const nameText = "Ayush Chainani";
let index = 0;

function typeEffect() {
    if (index < nameText.length) {
        typerName.textContent += nameText.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // Adjust typing speed here
    }
}

typerName.textContent = ""; // Clear initial text
typeEffect();

// Example: Form submission handler
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});
