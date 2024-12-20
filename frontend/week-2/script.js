const contactSubmitForm = document.querySelector("#contact-form-submit");

function authUser(token) {
    console.log("Authenticated successfully. Token:", token);
}

contactSubmitForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const requestUrl = "https://api-dsoc.vercel.app/api/login"; // API endpoint
    const requestBody = {
        username: "admin",
        password: "admin@dsoc24"
    };

    fetch(requestUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Set content type to JSON
        },
        body: JSON.stringify(requestBody), // Convert request body to JSON string
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Response data:", data);
        if (data.token) {
            authUser(data.token); // Pass the token to the authUser function
        } else {
            console.error("Authentication failed: No token received.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});