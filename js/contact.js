// Wait for the DOM to load
window.onload = function() {
    const nameInput = document.querySelector('.box21 input[type="text"]');
    const emailInput = document.querySelector('.box21 input[type="email"]');
    const subjectInput = document.querySelectorAll('.box21 input[type="text"]')[1];
    const messageInput = document.querySelector('.box21 textarea');
    const sendButton = document.querySelector('.box21 button');

    sendButton.addEventListener('click', function(event) {
        event.preventDefault();
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !subject || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        alert('SENT MESSAGE!!');
        alert('We have received your message, kindly wait for our response.');
    });
};
