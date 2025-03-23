// Define the correct password (only known to specific users)
const correctPassword = "Eid123";

// Get the button element
const accessButton = document.getElementById("accessButton");

// Add a click event listener to the button
accessButton.addEventListener("click", () => {
  // Show a prompt for the user to enter the password
  const enteredPassword = prompt("Please enter the password to access details:");

  // Check if the entered password is correct
  if (enteredPassword === correctPassword) {
    // Redirect to the details page
    window.location.href = "details.html";
  } else {
    // Show an alert if the password is incorrect
    alert("Incorrect password. Please try again.");
  }
});