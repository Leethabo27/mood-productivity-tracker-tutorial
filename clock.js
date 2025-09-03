// Live local time & date
export function initClock(){
  const t = document.getElementById('time');
  const d = document.getElementById('date');
  function update(){
    const now = new Date();
    if (t) t.textContent = now.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit', second:'2-digit'});
    if (d) d.textContent = now.toLocaleDateString([], {weekday:'long', year:'numeric', month:'long', day:'numeric'});
  }
  update();
  setInterval(update, 1000);
}
