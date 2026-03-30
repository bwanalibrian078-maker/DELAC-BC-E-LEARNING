// SIMULATED DATABASE
// Format: { id: "STUDENT_ID", pass: "PASSWORD", name: "STUDENT_NAME" }
const studentDatabase = [
    { id: "DELAC-001", pass: "pass123", name: "Brian" },
    { id: "DELAC-002", pass: "student2026", name: "Poppy" },
    { id: "ADMIN-01", pass: "delac_admin", name: "Huxley" }
];

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop page from refreshing

    const enteredID = document.getElementById('loginID').value;
    const enteredPass = document.getElementById('loginPass').value;
    const errorMsg = document.getElementById('loginError');

    // Search the database for a match
    const user = studentDatabase.find(u => u.id === enteredID && u.pass === enteredPass);

    if (user) {
        // SUCCESS: Redirect to the Library or Dashboard
        errorMsg.style.display = "none";
        alert("Welcome back, " + user.name + "!");
        window.location.href = "library.html"; // Takes them to the library
    } else {
        // FAILURE: Show error
        errorMsg.style.display = "block";
        document.getElementById('loginID').style.borderColor = "#ff4d4d";
        document.getElementById('loginPass').style.borderColor = "#ff4d4d";
    }
});
