/* Mode clair / sombre (choix mémorisé) et couleur des icônes sociales au clic */
(function () {
  const root = document.documentElement,
    button = $("#theme");
  try {
    const saved = localStorage.getItem("theme");
    if (saved) root.dataset.theme = saved;
  } catch (e) {}
  const isDark = () =>
    root.dataset.theme === "dark" ||
    (!root.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
  const paint = () => {
    button.textContent = isDark() ? "☀" : "☾";
    button.setAttribute(
      "aria-label",
      isDark() ? "Passer en mode clair" : "Passer en mode sombre",
    );
  };
  button.onclick = () => {
    root.dataset.theme = isDark() ? "light" : "dark";
    try {
      localStorage.setItem("theme", root.dataset.theme);
    } catch (e) {}
    paint();
  };
  paint();

  $$(".social a").forEach((a) =>
    a.addEventListener("click", () => {
      $$(".social a").forEach((x) => x.classList.remove("clicked"));
      a.classList.add("clicked");
    }),
  );
})();
