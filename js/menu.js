/* Menu mobile, en-tête, bouton « retour en haut » et lien actif au défilement */
(function () {
  const header = $("header"),
    menu = $("#menu"),
    toTop = $(".top"),
    burger = $(".burger");

  burger.onclick = () => {
    const open = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
    burger.textContent = open ? "✕" : "☰";
  };
  $$("a", menu).forEach(
    (a) =>
      (a.onclick = () => {
        menu.classList.remove("open");
        burger.textContent = "☰";
      }),
  );

  const onScroll = () => {
    header.classList.toggle("solid", scrollY > 40);
    toTop.classList.toggle("show", scrollY > 600);
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.onclick = () => scrollTo({ top: 0 });

  const links = $$("a", menu),
    sections = links.map((a) => $(a.getAttribute("href")));
  const spy = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting)
          links.forEach((a, i) =>
            a.classList.toggle("on", sections[i] === e.target),
          );
      }),
    { rootMargin: "-45% 0px -50% 0px" },
  );
  sections.forEach((s) => s && spy.observe(s));
})();
