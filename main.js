// nextapp.ts
document.getElementById('generateButton').addEventListener('click', function () {
    var form = document.getElementById('resumeform');
    if (!form.checkValidity()) {
        alert("Please fill in all required fields.");
        return;
    }
    // Collecting the form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generating the resume output
    var resumeOutput = "\n        <h2>Resume of ".concat(name, "</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    // Displaying the output
    document.getElementById('resumeOutput').innerHTML = resumeOutput;
});
