/* ============================================================
   Pink + cyan snowflakes — toggled by .snowflakes wrappers
   on any slide that wants them. Spawns a flake per ~120ms,
   recycles after fall finishes. Only runs while the slide
   is visible.
   ============================================================ */
(function () {
  'use strict';
  const GLYPHS = ['❄', '❅', '❆', '✦', '✧'];

  function spawnInto(container) {
    if (container.__spawnTimer) return;
    const w = container.clientWidth || 1920;
    function tick() {
      if (!container.isConnected) return;
      const f = document.createElement('span');
      f.className = 'flake' + (Math.random() < 0.35 ? ' cyan' : '');
      f.textContent = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      const dur = 6 + Math.random() * 8;
      const size = 16 + Math.random() * 36;
      const left = Math.random() * w;
      const drift = (Math.random() * 2 - 1) * 240;
      f.style.left = left + 'px';
      f.style.fontSize = size + 'px';
      f.style.setProperty('--drift', drift + 'px');
      f.style.animationDuration = dur + 's';
      container.appendChild(f);
      setTimeout(() => f.remove(), dur * 1000 + 100);
      container.__spawnTimer = setTimeout(tick, 80 + Math.random() * 160);
    }
    tick();
  }

  function stop(container) {
    if (container.__spawnTimer) {
      clearTimeout(container.__spawnTimer);
      container.__spawnTimer = null;
    }
    container.innerHTML = '';
  }

  function reconcile() {
    // Find the currently visible slide
    const slide = document.querySelector('.Slide');
    if (!slide) return;
    const snowContainer = slide.querySelector('.snowflakes');
    if (snowContainer) {
      spawnInto(snowContainer);
    }
    // Stop any other snowflakes containers
    document.querySelectorAll('.snowflakes').forEach((el) => {
      if (el !== snowContainer) stop(el);
    });
  }

  // Hook into slide changes by observing DOM mutations on #root
  function init() {
    const root = document.getElementById('root');
    if (!root) { setTimeout(init, 100); return; }
    const observer = new MutationObserver(reconcile);
    observer.observe(root, { childList: true, subtree: true });
    reconcile();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
