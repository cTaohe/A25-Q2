const form = document.querySelector('.form')
const rgbRed = document.getElementById('red')
const rgbGreen = document.getElementById('green')
const rgbBlue = document.getElementById('blue')
const hexValue = document.querySelector('.hex-value')
const hexColor = document.querySelector('.hex-color')

// print result to hex panel
function rgbToHex(r, g, b) {
  const red = numberToHex(r)
  const green = numberToHex(g)
  const blue = numberToHex(b)
  const redgreenblue = `#${red}${green}${blue}`
  hexValue.value = redgreenblue
  hexColor.style.backgroundColor = redgreenblue

}

// turn rgb value to hex value
function numberToHex(color) {
  const hex = color.toString(16)
  if (hex.length === 1) {
    return `0${hex}`
  }
  return hex
}

// listen event to form
form.addEventListener('submit', event => {
  event.preventDefault()
  let red = Number(rgbRed.value)
  let green = Number(rgbGreen.value)
  let blue = Number(rgbBlue.value)
  rgbToHex(red, green, blue)
})