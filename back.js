// Select the button with the class 'go-top-button'
const goTopButton = document.querySelector('.go-top-button');

// Add an event listener to the window for scroll events
window.addEventListener('scroll', checkHeight);

// Define a function to check the scroll height and toggle the display of the button
function checkHeight() {
    if (window.scrollY > 200) {
        goTopButton.style.display = "flex";
    } else {
        goTopButton.style.display = "none";
    }
}

// Add an event listener to the goTopButton for click events
goTopButton.addEventListener('click', () => {
    // When the button is clicked, scroll to the top of the page smoothly
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
