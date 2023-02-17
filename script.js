// Random number generator

const number = document.querySelector('.number')
const btn = document.querySelector('.generate')

const generateNumber = () => {
  //Generate a number between 1 and 10
  const randonNum = Math.floor(Math.random() * 10 + 1)
  number.innerHTML = randonNum
}

btn.addEventListener('click', generateNumber)

generateNumber()

// Random hex color generator

const hex = document.querySelector('.hex')
const button = document.querySelector('.gen')

const generateColor = () => {
  const randomColor = Math.random().toString(16).substring(2, 8)
  document.body.style.backgroundColor = '#' + randomColor
  hex.innerHTML = '#' + randomColor
}

button.addEventListener('click', generateColor)

generateColor()
