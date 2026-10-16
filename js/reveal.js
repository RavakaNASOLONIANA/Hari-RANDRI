/* Apparition des sections au défilement, compteurs animés et barres de langues */
(function () {
  const count = (el) => {
    const target = +el.dataset.n,
      start = performance.now();
    const step = (t) => {
      const p = Math.min((t - start) / 1400, 1);
      el.textContent =
        Math.round(target * (1 - Math.pow(1 - p, 3))) + (el.dataset.s || "");
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        $$("[data-n]", e.target).forEach(count);
        $$(".bar i", e.target).forEach(
          (b) => (b.style.width = b.dataset.w + "%"),
        );
        io.unobserve(e.target);
      }),
    { threshold: 0.15 },
  );
  $$(".rv").forEach((el) => io.observe(el));
})();
