let correctPass = "tokyo2020";
let googleURL = "http://www.google.ca"

function checkPass() {
    pass = document.getElementById("pass_box").value;
    if (pass === correctPass) openGooglePage();
    else displayAlert();
}

function openGooglePage() {
    document.location.href = googleURL;
}

function displayAlert() {
    alert("This is a wrong password !!");
    document.getElementById("pass_box").value = "";
}