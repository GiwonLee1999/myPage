
document.getElementById('scrollToBottomButton').addEventListener('click', function () {
    window.scrollTo({
        top: document.body.scrollHeight, // Scroll to the bottom
        behavior: 'smooth' // Smooth scrolling
    });
});