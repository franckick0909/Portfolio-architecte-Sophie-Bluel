// Sélectionne tous les éléments qui ont la class "js.modal". "modifier, overlay, bouton closeModal".
// Ajoute un évènement au click pour ouvrir et fermer la modal.
const jsModal = document.querySelectorAll('.js-modal').forEach(trigger => trigger.addEventListener('click', openModal, closeModal))

const overlay = document.querySelector('.overlay')
const modal1 = document.querySelector('.modal1')
const OpenModal = document.querySelector('.openModal')
const CloseModal = document.querySelector('.closeModal')

OpenModal.addEventListener('click', openModal)
CloseModal.addEventListener('click', closeModal)
// ********** Function ouvrir la modal.
// L'ovelay s'ouvre avec la class "active", et modal1 avec visibility visible et opacity 1.
function openModal() {
  //   overlay.style.display = "block";
  overlay.classList.toggle('active');
  modal1.classList.toggle('openModale');
// aria-hidden est supprimé et aria-modal devient "true".
  modal1.removeAttribute('aria-hidden')
  modal1.setAttribute('aria-modal', 'true')
}
// ********** Function ferme la modal.
// L'ovelay se referme avec la class "active" qui est 'toggle'.
// modal1 se referme avec visibility hidden et opacity 0.
function closeModal() {
   //   overlay.style.display = "none"; 
  overlay.classList.toggle('active');
  modal1.classList.toggle('openModale');
// aria-hidden est "true" et aria-modal devient est supprimé.
  modal1.setAttribute('aria-hidden', 'true')
  modal1.removeAttribute('aria-modal') 
}

// ferme la modal 1 par la touche  ECHAPPE ou ESCAPE
window.addEventListener('keydown', function (e) {
    if (e.key === "Escape" || e.key === "Esc") {    
      overlay.classList.toggle('active');
      modal1.classList.toggle('openModale');
    
      modal1.setAttribute('aria-hidden', 'true')
      modal1.removeAttribute('aria-modal')     
    }
})