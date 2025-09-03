// Mood tracker with Chart.js + localStorage
let chart;
export function initMood(){
  const select = /** @type {HTMLSelectElement} */(document.getElementById('moodSelect'));
  const add = document.getElementById('addMood');
  const reset = document.getElementById('clearMood');
  const list = document.getElementById('moodList');
  const canvas = /** @type {HTMLCanvasElement} */(document.getElementById('moodChart'));

  if (!select || !list || !canvas) return;

  const key = 'mpendulo_moods';
  /** @type {{time:number, mood:string}[]} */
  let moods = JSON.parse(localStorage.getItem(key) || '[]');

  function renderList(){
    if (!list) return;
    list.innerHTML = '';
    moods.slice(-10).reverse().forEach((m, idx) => {
      const item = document.createElement('div');
      item.className = 'item';
      const when = new Date(m.time).toLocaleString();
      item.innerHTML = `<span><i class="fa-solid fa-circle"></i> ${m.mood} — <small>${when}</small></span>`;
      const actions = document.createElement('div');
      actions.className = 'actions';
      const del = document.createElement('button');
      del.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      del.addEventListener('click', () => {
        const i = moods.findIndex(x => x.time === m.time);
        if (i > -1) { moods.splice(i,1); save(); }
      });
      actions.appendChild(del);
      item.appendChild(actions);
      list.appendChild(item);
    });
  }

  function renderChart(){
    const counts = moods.reduce((acc, m) => (acc[m.mood] = (acc[m.mood]||0)+1, acc), {});
    const labels = Object.keys(counts);
    const data = Object.values(counts);
    if (chart) chart.destroy();
    chart = new Chart(canvas.getContext('2d'), {
      type: 'bar',
      data: { labels, datasets: [{ label: 'Mood count', data }]},
      options: { responsive:true, plugins:{legend:{display:false}} }
    });
  }

  function save(){
    localStorage.setItem(key, JSON.stringify(moods));
    renderList(); renderChart();
  }

  add?.addEventListener('click', () => {
    moods.push({time: Date.now(), mood: select.value});
    save();
  });
  reset?.addEventListener('click', () => {
    moods = []; save();
  });

  renderList(); renderChart();
}
