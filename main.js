import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="glass-card">
    <h1>Vite Static Site</h1>
    <p>Lightning fast development with modern web aesthetics.</p>
    <button class="btn" id="action-btn">Click to interact</button>
    <div class="features">
      <span class="badge">Hot Reloading</span>
      <span class="badge">GitHub Pages Ready</span>
      <span class="badge">Glassmorphism</span>
    </div>
  </div>
`

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
