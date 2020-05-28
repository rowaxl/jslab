let validate = (str1, str2) => str1 === str2;

(function () {
  const userName = 'wonjae.kim@gmail.com';
  const password = 'Passw0rd!';
  let signIn = () => {
    const idValue = document.getElementById('user-name').value
    const passwordValue = document.getElementById('password').value
  
    if (validate(userName, idValue) && validate(password, passwordValue)) {
      document.getElementById('form').style.display = 'none';
      document.getElementById('result').style.display = 'block';
    } else {
      alert("Invalid user name or password!")
    }
  }

  document.getElementById('btn-signin').addEventListener('click', signIn)
})();
