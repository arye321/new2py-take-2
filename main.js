import './style.css'


let count = 0
const btn = document.querySelector('#action-btn')

btn.addEventListener('click', () => {
  count++
  btn.innerText = `Interactions: ${count}`
  btn.style.transform = 'scale(0.95)'
  setTimeout(() => {
    btn.style.transform = 'translateY(-2px)'
  }, 100)
})
