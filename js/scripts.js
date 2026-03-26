// Get the form element
const form = document.getElementById("passwordForm");

// Listen for submit
form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload
  const pwd = document.getElementById("password").value; // get input value

  if (pwd === "dragonfireisthegoat") {
    window.location.href = "vX74vfI90oLpErEjkLmN3B4Qq8.html"; // redirect if correct
  } else {
    alert("Incorrect password. Please try again."); // show error
  }
});
