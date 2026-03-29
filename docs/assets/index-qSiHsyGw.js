(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
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
`;let i=0;const r=document.querySelector("#action-btn");r.addEventListener("click",()=>{i++,r.innerText=`Interactions: ${i}`,r.style.transform="scale(0.95)",setTimeout(()=>{r.style.transform="translateY(-2px)"},100)});
