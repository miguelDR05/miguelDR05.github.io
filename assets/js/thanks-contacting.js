document.addEventListener("DOMContentLoaded", () => {
  if (window.location.hash === "#thanks") {
    const modal = document.getElementById("modal-thanks");
    modal.style.display = "flex";

    // Limpiar el hash para evitar que se quede abierto al recargar
    history.replaceState(null, null, " ");

    // Cerrar al hacer clic en la X
    document.getElementById("close-modal").addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Cerrar al hacer clic fuera del contenido
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});
