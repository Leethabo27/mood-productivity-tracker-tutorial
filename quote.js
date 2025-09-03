// Fetch motivational quote from Quotable API
export function initQuote(){
  const out = document.getElementById('quote');
  const btn = document.getElementById('quoteBtn');
  async function getQuote(){
    try{
      const res = await fetch('https://api.quotable.io/random');
      if(!res.ok) throw new Error('Network error');
      const data = await res.json();
      if(out) out.textContent = `“${data.content}” — ${data.author}`;
    }catch(e){
      if(out) out.textContent = 'Could not load quote. Try again.';
    }
  }
  if (out) getQuote();
  btn?.addEventListener('click', getQuote);
}
