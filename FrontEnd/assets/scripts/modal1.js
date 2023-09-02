
const modal1 = document.getElementById('modal1')
const jsModal = document.querySelectorAll('.js-modal')
const closModal = document.getElementById('close-modal')

jsModal.forEach(trigger => trigger.addEventListener('click', openModal))
closModal.addEventListener('click', closeModal)

function openModal() {
    // modal1.classList.toggle('hidden')
    modal1.style.display ='flex'   
    modal1.setAttribute('aria-hidden', 'false')
    modal1.setAttribute('aria-modal', 'true')
}

function closeModal() {
    window.setTimeout(function () {
        modal1.style.display ='none';
    }, 500)
    // modal1.classList.add('hidden')
    
    modal1.setAttribute('aria-hidden', 'true')
    modal1.removeAttribute('aria-modal')
}

window.addEventListener('keydown', function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
        closeModal()
    }
})