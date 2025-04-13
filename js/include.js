async function loadComponent(id, filename) {
  const el = document.getElementById(id);
  if (!el) return;

  const possiblePaths = [
    `/${filename}`,
    `../${filename}`,
    `../../${filename}`,
  ];

  for (const path of possiblePaths) {
    try {
      const res = await fetch(path);
      if (res.ok) {
        const html = await res.text();
        el.innerHTML = html;
        return;
      }
    } catch (_) {
      // Try next path
    }
  }

  console.error(`No se pudo cargar ${filename}`);
}

function startAnimation() {
  let frame = document.querySelector(".frame");
  if (!frame) return;

  window.setInterval(() => {
    for (let i = 0; i < 4; i++) {
      frame.children[i].animate(
        [
          { opacity: Math.random() + 0.5 },
          { opacity: Math.random() + 0.5 },
        ],
        100
      );
    }
  }, 100 / 60);
}

window.addEventListener("DOMContentLoaded", () => {
  loadComponent("frame-placeholder", "frame.html").then(startAnimation);
});