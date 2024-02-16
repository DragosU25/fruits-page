(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-thanx-modal-open]"),
    closeModalBtn: document.querySelector("[data-thanx-modal-close]"),
    modal: document.querySelector("[data-thanx-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
