document.querySelector('.feedback-form').addEventListener('submit', function (e) {
    e.preventDefault();


    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const feedbackType = document.getElementById('feedback-type').value;
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }

    alert('Thank you for your feedback!');
});