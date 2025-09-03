// Notes using localStorage
export function initNotes(){
  const area = /** @type {HTMLTextAreaElement} */(document.getElementById('notes'));
  const save = document.getElementById('saveNotes');
  const clear = document.getElementById('clearNotes');
  if (!area) return;

  // Load saved
  area.value = localStorage.getItem('mpendulo_notes') || '';

  save?.addEventListener('click', () => {
    localStorage.setItem('mpendulo_notes', area.value);
  });
  clear?.addEventListener('click', () => {
    area.value = '';
    localStorage.removeItem('mpendulo_notes');
  });
}
