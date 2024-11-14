

// Form validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required.");
        return false;
    }
    return true;
}

// Additional Enhancements
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = "Toggle Dark Mode";
    darkModeToggle.onclick = toggleDarkMode;
    document.body.appendChild(darkModeToggle);
});


window.addEventListener('load', function() {
    document.querySelector('.loading-container').style.display = 'none';
  });




