// Check if the current page is 'contact.html'
if (window.location.pathname.includes('contact.html')) {
    // Add event listener for form submission in the feedback form
    document.querySelector('.feedback-form').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Get values from input fields and trim any extra spaces
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();

        // Check if any field is empty, and alert the user if so
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields'); // Show alert if fields are empty
            return; // Stop the execution if validation fails
        }

        // If all fields are filled, show a thank you message
        alert('Thank you for your feedback!');
    });
}

// Check if the current page is 'menu.html'
if (window.location.pathname.includes('menu.html')) {
    // Get the "Back to Top" button element
    var backToTopButton = document.getElementById("backToTop");

    // Add event listener to the "Back to Top" button for smooth scrolling
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0, // Scroll to the top of the page
            behavior: "smooth" // Smooth scrolling effect
        });
    });

    // Select all elements with class 'hover-text' and 'hidden-image'
    var text = document.querySelectorAll('.hover-text');
    var images = document.querySelectorAll('.hidden-image');

    // Loop through each text element and associate it with the corresponding image
    text.forEach(function(text, index) {
        var image = images[index];

        // When the user hovers over the text, show the corresponding image
        text.addEventListener('mouseenter', function() {
            image.style.opacity = 1; // Set opacity to 1 to make the image visible
            image.style.display = 'inline'; // Display the image as inline
        });

        // When the user stops hovering over the text, hide the image
        text.addEventListener('mouseleave', function() {
            image.style.opacity = 0; // Set opacity to 0 to hide the image
            setTimeout(function() {
                image.style.display = 'none'; // Hide the image after a delay
            }, 200); // Delay of 200ms before hiding
        });
    });
}
