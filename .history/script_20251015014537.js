// Select the elements we’ll interact with from the HTML
const navLinks = document.querySelector(".nav-links");   // The <ul> that contains all navigation links
const openBtn = document.querySelector("#fa-bars");      // The hamburger (menu) icon
const closeBtn = document.querySelector("#close");       // The close (X) icon
const desktopResume = document.querySelector(".resume-btn"); // The original "View Resume" button (visible on desktop)

// --- CLONE THE RESUME BUTTON FOR MOBILE ---
// Making the resume button to appear inside the mobile slide-in menu,
// but not disturb its position on desktop. So create a copy of it.
const mobileResume = desktopResume.cloneNode(true); // cloneNode(true) copies the element and its content
mobileResume.classList.remove("resume-btn");        // Remove the original desktop class to avoid style conflicts
mobileResume.classList.add("mobile-resume");        // Add a new class for mobile styling (handled in CSS)

// --- EVENT: OPEN MENU ---
// When user clicks the hamburger icon, we’ll slide the menu into view
openBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevents the default behavior of the <a> tag (stops page jump)

  // Add a CSS class .show to navLinks
  // This class moves the menu from "right: -100%" to "right: 0"
  // making it slide in from the right side.
  navLinks.classList.add("show");

  // Check if we already added the mobile resume button inside the menu
  // If not, append it so it only gets added once.
  if (!navLinks.querySelector(".mobile-resume")) {
    const li = document.createElement("li"); // Create a new list item <li> for consistent structure
    li.appendChild(mobileResume);            // Insert the cloned mobile resume button inside the <li>
    navLinks.appendChild(li);                // Add that <li> to the end of the menu <ul>
  }
});

// --- EVENT: CLOSE MENU ---
// When user clicks the close (X) icon, we hide the mobile menu again
closeBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevents unwanted link behavior
  navLinks.classList.remove("show"); // Removes the .show class, sliding the menu back out of view
});



// Function to download cv pdf
// Select ALL buttons with class 'downloadCV'
document.querySelectorAll('.downloadCV').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();

    this.textContent = "Downloading...";

    const link = document.createElement('a');
    link.href = './Asset/AUSTIN EMERENINI- CV.pdf';
    link.download = 'Austin_Okezie_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      this.innerHTML = 'View Resume <i class="fas fa-file-alt"></i>';
    }, 1500);
  });
});


// script.js

// Initialize EmailJS
// (function(){
//   emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your real Public Key
// })();

// Handle form submission
// document.addEventListener("DOMContentLoaded", function() {
//   const form = document.querySelector(".contact-form");

//   form.addEventListener("submit", function(e) {
//     e.preventDefault();

//     emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
//       from_name: document.getElementById("name").value,
//       from_email: document.getElementById("email").value,
//       message: document.getElementById("message").value,
//     })
//     .then(() => {
//       alert("✅ Message sent successfully!");
//       form.reset();
//     }, (error) => {
//       console.error("❌ Failed to send message:", error);
//       alert("Something went wrong. Please try again.");
//     });
//   });
// });