function tick() {
  const now = new Date();
  document.getElementById('clock').textContent =
    String(now.getHours()).padStart(2,'0') + ':' +
    String(now.getMinutes()).padStart(2,'0');
  const days   = ['dim','lun','mar','mer','jeu','ven','sam'];
  const months = ['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc'];
  document.getElementById('date').textContent =
    days[now.getDay()] + ' ' + now.getDate() + ' ' +
    months[now.getMonth()] + ' ' + now.getFullYear();
}
tick();
setInterval(tick, 1000);

const engines = {
  'gh ':  'https://github.com/search?q=',
  'od':   'https://wiki.osdev.org/',
  'aw ':  'https://wiki.archlinux.org/index.php?search=',
  'lk':   'https://linkedin.com',
  'gm':   'https://mail.google.com',
  'di':   'https://discord.com/app',
  're':   'https://www.reddit.com',
  'yt ':  'https://youtube.com/results?search_query=',
  'cd':   'https://claude.ai',
  'ch':   'https://chatgpt.com',
  'va':   'https://vim-adventures.com',
  'ddg ': 'https://duckduckgo.com/?q=',
};
const def = 'https://duckduckgo.com/?q=';

document.getElementById('search').addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;
  const val = e.target.value.trim();
  if (!val) return;
  let url = null;
  for (const [p, b] of Object.entries(engines)) {
    if (val.startsWith(p)) {
      const q = val.slice(p.length).trim();
      url = q ? b + encodeURIComponent(q) : b;
      break;
    }
  }
  if (!url) url = (val.includes('.') && !val.includes(' '))
    ? 'https://' + val
    : def + encodeURIComponent(val);
  window.location.href = url;
});
