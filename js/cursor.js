/* Curseur personnalisé (ordinateur uniquement) */
(function () {
  if (
    !matchMedia("(hover: hover) and (pointer: fine)").matches ||
    matchMedia("(prefers-reduced-motion: reduce)").matches
  )
    return;
  const dot = document.createElement("div"),
    ring = document.createElement("div");
  dot.className = "cur-dot";
  ring.className = "cur-ring";
  document.body.append(dot, ring);
  document.documentElement.classList.add("has-cur");

  let x = innerWidth / 2,
    y = innerHeight / 2,
    rx = x,
    ry = y;
  addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;
    dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    document.body.classList.add("cur-on");
  });
  (function follow() {
    rx += (x - rx) * 0.16;
    ry += (y - ry) * 0.16;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(follow);
  })();
  document.addEventListener("mouseover", (e) =>
    ring.classList.toggle(
      "big",
      !!e.target.closest("a, button, .card, .miss li, .tools li, .stat"),
    ),
  );
  addEventListener("mousedown", () => ring.classList.add("down"));
  addEventListener("mouseup", () => ring.classList.remove("down"));
  document.documentElement.addEventListener("mouseleave", () =>
    document.body.classList.remove("cur-on"),
  );
})();
