/* Texte qui s'écrit à l'accueil. Modifiez la liste WORDS pour changer les titres. */
(function () {
  const WORDS = [
    "assistante virtuelle",
    "assistante comptable",
    "gestionnaire fournisseurs",
  ];
  const el = $("#type");
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = WORDS[0];
    return;
  }
  let word = 0,
    letters = 0,
    deleting = false;
  (function tick() {
    const text = WORDS[word];
    letters += deleting ? -1 : 1;
    el.textContent = text.slice(0, letters);
    let delay = deleting ? 35 : 75;
    if (!deleting && letters === text.length) {
      deleting = true;
      delay = 1600;
    } else if (deleting && letters === 0) {
      deleting = false;
      word = (word + 1) % WORDS.length;
      delay = 300;
    }
    setTimeout(tick, delay);
  })();
})();
