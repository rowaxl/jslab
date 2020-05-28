(function() {
    const username=document.getElementById("username");
    const password=document.getElementById("password");
    const passwordBtn=document.getElementById("passwordBtn");
    
  
    passwordBtn.addEventListener('click', function(e) {
        passwordBtn.innerHTML = checkValidity(document.getElementById("password").value,document.getElementById("username").value);
    })
      function checkValidity(pass,username){
     if (pass =="123456")
     window.open("http://www.google.ca");
     else
     window.alert("dear "+ username +"the password in not correct");
      }
  })();
