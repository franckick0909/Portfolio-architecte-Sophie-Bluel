const jsModal = document.querySelectorAll('.js-modal').forEach(trigger => trigger.addEventListener('click', openModal, closeModal))

const overlay = document.querySelector('.overlay')
const modal1 = document.querySelector('.modal1')
const OpenModal = document.querySelector('.openModal')
const CloseModal = document.querySelector('.closeModal')

OpenModal.addEventListener('click', openModal)
CloseModal.addEventListener('click', closeModal)

function openModal() {

  overlay.classList.toggle('active');
  modal1.classList.toggle('openModale');

  modal1.removeAttribute('aria-hidden')
  modal1.setAttribute('aria-modal', 'true')
}

function closeModal() {

  overlay.classList.toggle('active');
  modal1.classList.toggle('openModale');

  modal1.setAttribute('aria-hidden', 'true')
  modal1.removeAttribute('aria-modal') 
}

window.addEventListener('keydown', function (e) {
    if (e.key === "Escape" || e.key === "Esc") {    
      overlay.classList.toggle('active');
      modal1.classList.toggle('openModale');
    
      modal1.setAttribute('aria-hidden', 'true')
      modal1.removeAttribute('aria-modal')     
    }
})