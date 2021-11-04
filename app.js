const loginForm = document.querySelector('.login-form')
const loginInput = document.querySelector('.login-form .login-input')

function onLoginSubmit(e) {
  e.preventDefault()
  console.log(e)
}

loginForm.addEventListener('submit', onLoginSubmit)
