const SELECTOR_TARJETA = ".presentacion";

// Guarda la posición del cursor dentro de la tarjeta para que el CSS dibuje el foco de luz.
const tarjeta = document.querySelector(SELECTOR_TARJETA);

tarjeta.addEventListener("pointermove", (evento) => {
    const limites = tarjeta.getBoundingClientRect();
    tarjeta.style.setProperty("--x", `${evento.clientX - limites.left}px`);
    tarjeta.style.setProperty("--y", `${evento.clientY - limites.top}px`);
});

tarjeta.addEventListener("pointerleave", () => {
    tarjeta.style.removeProperty("--x");
    tarjeta.style.removeProperty("--y");
});
