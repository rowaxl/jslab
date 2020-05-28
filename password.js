(function() {
    const username=document.getElementById("username");
    const password=document.getElementById("password");
    const passwordBtn=document.getElementById("passwordBtn");
    
  
    passwordBtn.addEventListener('click', function(e) {
        passwordBtn.innerHTML = checkValidity(document.getElementById("password").value,document.getElementById("username").value);
    })
      function checkValidity(pass,username){
     if (pass =="123456" && username=='Mahsa')
     window.open("http://www.google.ca");
     else {
     if (pass =="123456" && username !='Mahsa')
     window.alert("dear "+ username +"the Username is not correct");
     if (pass !="123456" && username =='Mahsa')
     window.alert("dear "+ username +"the password is not correct");
     if (pass !="123456" && username !='Mahsa')
     window.alert("dear "+ username +"the password and username are not correct");
      }}
  })();
