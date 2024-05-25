// Selecting the go-top-button element
const goTopButton = document.querySelector('.go-top-button');

// Adding event listener to window for scroll event
window.addEventListener('scroll', checkHeight)

// Function to check the scroll height and toggle button visibility
function checkHeight(){
    // Checking if scroll height is greater than 200px
    if(window.scrollY > 200){
        // If scroll height is greater than 200px, display the button
        goTopButton.style.dispaly = "flex";
    } else{
        // If scroll height is not greater than 200px, hide the button
        goTopButton.style.dispaly = "none";
    }
}

// Adding event listener to goTopButton for click event
goTopButton.addEventListener('click',() => {
    // Scrolling to top of the page with smooth behavior
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
