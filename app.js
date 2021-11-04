const loginForm = document.querySelector('.login-form')
const loginInput = document.querySelector('.login-form .login-input')
const greeting = document.querySelector('.greeting')

const HIDDEN_CLASSNAME = 'visually-hidden'

function onLoginSubmit(e) {
  e.preventDefault()
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const userName = loginInput.value
  greeting.innerText = `Hello ${userName}`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

loginForm.addEventListener('submit', onLoginSubmit)
