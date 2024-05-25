document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll(".stars i"); // Select all star icons
    const goTopButton = document.querySelector('.go-top-button'); // Select the scroll-to-top button
    const form = document.getElementById('feedback-form-container'); // Select the feedback form
    const dialog = document.getElementById('feedback-dialog'); // Select the feedback response dialog
    const closeBtn = document.querySelector('.close-btn'); // Select the close button in the dialog
    const responseText = document.getElementById('feedback-response'); // Select the element to display feedback response

    // Event listener to handle star rating selection
    stars.forEach((star, index1) => {
        star.addEventListener("click", () => {
            stars.forEach((star, index2) => {
                index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
            });
        });
    });

    // Event listener to show/hide scroll-to-top button based on scroll position
    window.addEventListener('scroll', function() {
        goTopButton.style.display = window.scrollY > 200 ? "flex" : "none";
    });

    // Event listener to handle scroll-to-top button click
    goTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Event listener to handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Form validation
        let isValid = true;
        let messages = [];

        // Gather form data
        const formData = new FormData(form);
        const name = formData.get('Firstname');
        const lastname = formData.get('Lastname');
        const email = formData.get('Email');
        const rate = formData.get('rate');
        const visit = formData.get('visit');
        const informative = formData.get('informative');
        const recommend = formData.get('recommend');
        const comments = form.querySelector('.txtarea').value;
        const starRating = document.querySelectorAll(".stars i.active").length;

        // Validation checks
        if (!name.trim()) messages.push("Firstname is required.");
        if (!lastname.trim()) messages.push("Lastname is required.");
        if (!email.trim()) messages.push("Email is required.");
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) messages.push("Please provide a valid email address.");
        if (!rate) messages.push("Please rate your overall experience.");
        if (!visit) messages.push("Please indicate if this was your first visit.");
        if (!informative) messages.push("Please indicate if the website was informative and easy to navigate.");
        if (!recommend) messages.push("Please indicate if you would recommend our services.");
        if (!comments.trim()) messages.push("Please leave a comment.");

        isValid = messages.length === 0; // Update isValid based on validation checks

        // If form is not valid, display error messages and stop form submission
        if (!isValid) {
            alert(messages.join("\n"));
            return;
        }

        // If form is valid, display feedback response in the dialog
        responseText.innerHTML = `<div style="font-family: 'Poppins', sans-serif; color: #333;">
                                    <h3 style="color: #4CAF50;">Thank you for your feedback, ${name} ${lastname}!</h3>
                                    <p><strong>Email:</strong> <span style="color: #555;">${email}</span></p>
                                    <p><strong>Overall Experience:</strong> <span style="color: #555;">${rate}</span></p>
                                    <p><strong>First Visit:</strong> <span style="color: #555;">${visit}</span></p>
                                    <p><strong>Informative & Easy to Navigate:</strong> <span style="color: #555;">${informative}</span></p>
                                    <p><strong>Would Recommend:</strong> <span style="color: #555;">${recommend}</span></p>
                                    <p><strong>Comments:</strong> <span style="color: #555;">${comments}</span></p>
                                    <p><strong>Star Rating:</strong> <span style="color: #FFD700;">${starRating} out of 5</span></p>
                                  </div>`;
        dialog.style.display = 'block'; // Display the feedback response dialog
    });

    // Event listener to handle dialog close button click
    closeBtn.addEventListener('click', function() {
        dialog.style.display = 'none';
        window.location.reload(); // Refresh the page
    });

    // Event listener to hide dialog when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === dialog) {
            dialog.style.display = 'none';
        }
    });
});
