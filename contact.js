const contactForm = document.getElementById("contactForm");

const status = document.getElementById("status");

const sendButton = document.getElementById("sendButton");


contactForm.addEventListener("submit", async (e) => {

    e.preventDefault();


    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = "New subscriber";



    // Change button text
    sendButton.textContent = "Subscribing...";

    sendButton.disabled = true;

    status.textContent = "";


    try {

    const response = await fetch(
    "https://skincare-website-hquu.onrender.com/send-email",
    {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name,
            email,
            message
        })
    }
);

        const data = await response.json();


        if (response.ok) {

            status.textContent = "Sent!!!!";

            status.className = "text-center font-medium text-white";

            contactForm.reset();

        } else {

            status.textContent = data.message || "Failed to send.";

            status.className = "text-center font-medium text-white";

        }


    } catch (error) {

        console.error(error);

        status.textContent =
            "Unable to send. Please try again.";

        status.className =
            "text-center font-medium text-white";

    }


    sendButton.textContent = "send";

    sendButton.disabled = false;

});