// Mobile menu toggle
export function initMenu(){
  const toggle = document.querySelector('.menu-toggle');
  const links = document.getElementById('navLinks');
  toggle?.addEventListener('click', () => {
    links?.classList.toggle('show');
  });
}
