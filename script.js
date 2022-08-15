const btn = document.getElementById('btn')
const adviceNumber = document.getElementById('advice-number')
const advice = document.getElementById('advice')

window.addEventListener('DOMContentLoaded', () => {
  loadApi()
})
btn.addEventListener('click', () => {
  loadApi()
})

function loadApi() {
  fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => {
      adviceNumber.innerHTML = data.slip.id
      advice.innerHTML = `"${data.slip.advice}"`
    })
}
