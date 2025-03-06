const firebaseConfig = {
    apiKey: "AIzaSyAY43SDaXkYWpVgsllPal5ZDYCDiG9Hfws",
    authDomain: "contactform-f63d8.firebaseapp.com",
    databaseURL: "https://contactform-f63d8-default-rtdb.firebaseio.com",
    projectId: "contactform-f63d8",
    storageBucket: "contactform-f63d8.appspot.com",
    messagingSenderId: "569083896628",
    appId: "1:569083896628:web:dabcf6afa7b0733976fb61"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Check if user is logged in
if (localStorage.getItem("adminLoggedIn") !== "true") {
    window.location.href = "login.html"; // Redirect to login if not authenticated
}

// Logout function
function adminLogout() {
    localStorage.removeItem("adminLoggedIn");
    window.location.href = "login.html"; // Redirect to Login Page
}

// Fetch contact details from Firebase
var contactFormDB = firebase.database().ref("contactForm");

contactFormDB.on("value", (snapshot) => {
    let tableBody = document.getElementById("messageTable");
    tableBody.innerHTML = ""; // Clear previous data

    if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
            let data = childSnapshot.val();
            let orderDetails = data.orderDetails || "N/A";
            let email = data.emailid || "N/A";

            let orderButton = orderDetails !== "N/A" 
                ? `<button onclick="sendOrderConfirmation('${childSnapshot.key}', '${email}')">Confirm Order</button>` 
                : "N/A";

            let row = `<tr>
                        <td>${data.name || "N/A"}</td>
                        <td>${email}</td>
                        <td>${data.msgContent || "N/A"}</td>
                        <td>${data.contact || "N/A"}</td> 
                        <td>${orderDetails}</td>
                        <td>${orderButton}</td>
                       </tr>`;

            tableBody.innerHTML += row;
        });
    } else {
        tableBody.innerHTML = `<tr><td colspan="6">No Messages Found</td></tr>`;
    }
});

// Function to send order confirmation email
function sendOrderConfirmation(email) {
    fetch("https://script.google.com/macros/s/AKfycbz6egtXjMbNUJcFPxcHVZS1EF9nGe24N-n7-PlnvW9CdrABmygNE8DJty3jfEtIPPge/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "no-cors",  // ✅ Fix: Disable CORS restrictions
        body: JSON.stringify({ customerEmail: email })
    })
    .then(() => {
        alert("✅ Order confirmation email request sent! (Google does not return a response due to no-cors mode)");
    })
    .catch(error => {
        console.error("Fetch Error:", error);
        alert("❌ Failed to send email. Check console for details.");
    });
}

