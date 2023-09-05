const modale2 = document.querySelector('.modal2')
const openModal2 = document.getElementById('ajouterPhoto')
const closModal2 = document.getElementById('close-modal2')

openModal2.addEventListener('click', openModal)
closModal2.addEventListener('click', closeModal2)

function openModal() {
    // modal1.classList.toggle('hidden')
    modale2.style.display ='flex'   
    modale2.setAttribute('aria-hidden', 'false')
    modale2.setAttribute('aria-modal', 'true')
}

function closeModal2() {
    window.setTimeout(function () {
        modale2.style.display ='none';
    }, 100)
    // modale2.classList.add('hidden')
    modale2.setAttribute('aria-hidden', 'true')
    modale2.removeAttribute('aria-modal')
}

window.addEventListener('keydown', function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
        closeModal()
    }
})