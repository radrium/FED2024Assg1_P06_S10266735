if (window.location.pathname.includes('contact.html')) {
    document.querySelector('.feedback-form').addEventListener('submit', function (e) {
        e.preventDefault();


        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields');
            return;
        }

        alert('Thank you for your feedback!');
    });
}
if (window.location.pathname.includes('menu.html')) 
{
    var backToTopButton = document.getElementById("backToTop");
    backToTopButton.addEventListener("click", function()
    {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    var text = document.querySelectorAll('.hover-text');
    var images = document.querySelectorAll('.hidden-image');

    text.forEach(function(text, index) {
        var image = images[index];
        text.addEventListener('mouseenter', function() {
            image.style.opacity = 1;
            image.style.display = 'inline';
        });
        text.addEventListener('mouseleave', function() {
            image.style.opacity = 0;
            setTimeout(function() 
            {
                image.style.display = 'none';
            }, 200);
        });
    });
}