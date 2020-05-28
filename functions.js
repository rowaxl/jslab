let userName = "korokoro";
let correctPass = "tokyo2020";
let googleURL = "http://www.google.ca";
let alertMessage = "This is wrong !!";
let empty = "";
let namebox = document.getElementById("name_box");
let passBox = document.getElementById("pass_box")

function checkNameAndPass() {
    name = namebox.value;
    pass = passBox.value;
    if (name === userName && pass === correctPass) openGooglePage();
    else displayAlert();
}

function openGooglePage() {
    document.location.href = googleURL;
}

function displayAlert() {
    alert(alertMessage);
    namebox.value = empty;
    passBox.value = empty;
}