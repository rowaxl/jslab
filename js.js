const userName = "wonjae.kim@gmail.com";
const password = "Passw0rd!"

let validate = () => {
  const idValue = document.getElementById('user-name').value
  const passwordValue = document.getElementById('password').value

  if (userName === idValue && password === passwordValue) {
    document.getElementById('form').style.display = 'none';
    document.getElementById('result').style.display = 'block';
  } else {
    alert("Invalid user name or password!")
  }
}
