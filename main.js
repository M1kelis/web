// 1. Select elements from the HTML
const actionButton = document.getElementById('action-btn');
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// 2. Add Event Listener for the main action button
actionButton.addEventListener('click', function() {
    alert('Hello! You clicked the button.');
});

// 3. Add Event Listener for Dark Mode Toggle
themeToggleButton.addEventListener('click', function() {
    // Toggles the 'dark-mode' class on the body element
    body.classList.toggle('dark-mode');

    // Change button text based on mode
    if (body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = 'Light Mode';
    } else {
        themeToggleButton.textContent = 'Dark Mode';
    }
});