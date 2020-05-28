const loginButton = document.getElementById('login')
const accountInput = document.getElementById('account')
const passwordInput = document.getElementById('password')
const resultOutput = document.getElementById('result')

function login() {
    resultOutput.style.color = '#00f'
    resultOutput.innerText = 'Login..'
    setTimeout(function() {
        const accountValue = accountInput.value
        passwordValue = passwordInput.value
        if (accountValue === 's123456' &&
            passwordValue === '123456') {
            resultOutput.style.color = '#0f0'
            document.location.href = "https://www.google.ca/"
        } else {
            resultOutput.style.color = '#f00'
            alert('please check the passward is correct or not')
        }
    }, 2000)
}
loginButton.addEventListener('click', login)