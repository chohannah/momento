// common contstants

const loginForm = document.querySelector('.login-form')
const loginInput = document.querySelector('.login-form .login-input')
const greeting = document.querySelector('.greeting')

// common string-only constants

const HIDDEN_CLASSNAME = 'visually-hidden'
const USERNAME_KEY = 'userName'

// common functions

function paintGreetings(userName) {
  greeting.innerText = `Hello ${userName}`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

// When username DOESN'T exists

function onLoginSubmit(e) {
  e.preventDefault()
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const userName = loginInput.value
  localStorage.setItem(USERNAME_KEY, userName)
  paintGreetings(userName)
}

// When username exists

const savedUserName = localStorage.getItem(USERNAME_KEY)

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener('submit', onLoginSubmit)
} else {
  paintGreetings(savedUserName)
}
