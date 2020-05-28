(function() {
    const password=document.getElementById("password");
    const passwordBtn=document.getElementById("passwordBtn");

  
    passwordBtn.addEventListener('click', function(e) {
        passwordBtn.innerHTML = checkValidity(document.getElementById("password").value);
    })
      function checkValidity(pass){
     if (pass =="123456")
     window.open("http://www.google.ca");
     else
     window.alert("the password in not correct");
      }
  })();
