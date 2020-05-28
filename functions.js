let correctPass = "tokyo2020";
let googleURL = "http://www.google.ca";
let alertMessage = "This is a wrong password !!";
let empty = "";

function checkPass() {
    pass = document.getElementById("pass_box").value;
    if (pass === correctPass) openGooglePage();
    else displayAlert();
}

function openGooglePage() {
    document.location.href = googleURL;
}

function displayAlert() {
    alert(alertMessage);
    document.getElementById("pass_box").value = empty;
}