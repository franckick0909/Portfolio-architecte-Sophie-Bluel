// Déclaration des éléments html qui serviront à la modal3 (modal qui intervient lors de la réponse "true" de l'API pour ajouter un projet).
const modal3 = document.querySelector('.modal3')
const closeModal3 = document.querySelector('.close-modal3')
const ajoutePhoto = document.querySelector('.ajoutePhoto')
const btnModal3 = document.querySelector('.openModal3')

const label_image = document.querySelector('.label_image')
const previewImage = document.getElementById('previewImage')
const wrapper_previewImage = document.querySelector('.wrapper-previewImage')

// Appel la modal 3, "si" la réponse pour ajouter un projet est "true".
function appelAPI() {
    const appelAPI = true
    if (appelAPI) {
        modal3.showModal()
    }
}

// Ferme la modal 3, "Bravo...".
closeModal3.addEventListener('click', () => {
// Ferme la modal2.
    closeModal2()
// reset les éléments de la preview image.
    submit.classList.remove('val')
    wrapper_previewImage.style.display = "none"
    label_image.style.display = "flex";
// animation de la modal3.
    modal3.setAttribute('closing', '')
    modal3.addEventListener('animationend', () => {
        modal3.removeAttribute('closing')
        modal3.close()
    }, {once: true})
})

// bouton de la modal3 qui ouvre la modal1 pour de nouveau ajouter des projets et ferme la modal2.
ajoutePhoto.addEventListener('click', () => { 
// ferme la modal2
    closeModal2()
// ouvre la modal1
    openModal()
// reset les éléments de la preview image.
    submit.classList.remove('val')
    wrapper_previewImage.style.display = "none"
    label_image.style.display = "flex";
// ferme la modal3.
    modal3.setAttribute('closing', '')
    modal3.addEventListener('animationend', () => {
        modal3.removeAttribute('closing')
        modal3.close()
    }, {once: true})
})

 ////////// MODAL4 /////////

// Déclaration des éléments html qui serviront à la modal4.
const modal4 = document.querySelector('.modal4')
const closeModal4 = document.querySelector('.close-modal4')
const autreProjet = document.querySelector('.autreProjet')
const confirmBtn = document.getElementById("confirmBtn");
const openModal4 = document.querySelector('.openModal4')
// ouvre la modal4
openModal4.addEventListener('click', () => {
    modal4.showModal()
})
// Pour clicker en dehors de la modal.
modal4.addEventListener('click', (e) => {
    if (e.target.nodeName === "DIALOG") {
        modal4.close()
    }
})
// bouton de confirmation "Ok, continuer" pour fermer la modal4.
confirmBtn.addEventListener('click', () => {
// Ferme la modal1.
    closeModal()
    modal4.setAttribute('closing', '')

    modal4.addEventListener('animationend', () => {
        modal4.removeAttribute('closing')
        modal4.close()
    }, {once: true})
})
// bouton pour réouvrir la modal1 et ajouter ou supprimer un nouveau projet.
autreProjet.addEventListener('click', () => {
//ferme la modal1
    closeModal()
// réouvre la modal1
    openModal()
    modal4.setAttribute('closing', '')

    modal4.addEventListener('animationend', () => {
        modal4.removeAttribute('closing')
        modal4.close()
    }, {once: true}) 
// ferme la modal4
})