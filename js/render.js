/* Assemble les sections dans la page.
   Pour changer l'ordre, réorganisez la liste ORDER. Pour retirer une section, supprimez son nom. */
(function () {
  const ORDER = [
    "stats",
    "apropos",
    "atouts",
    "competences",
    "missions",
    "services",
    "parcours",
    "contact",
  ];
  $("#app").insertAdjacentHTML(
    "beforeend",
    ORDER.map((name) => window.SECTIONS[name] || "").join(""),
  );
  document.documentElement.classList.add("js");
})();
