const modal3 = document.querySelector('.modal3')
const closeModal3 = document.querySelector('.close-modal3')
const ajoutePhoto = document.querySelector('.ajoutePhoto')
const btnModal3 = document.querySelector('.openModal3')

const previewImage = document.getElementById('previewImage')
const wrapper_previewImage = document.querySelector('.wrapper-previewImage')

// Appel la modal 3, "si" la response pour ajouter un projet est réussi.
function appelAPI() {
    const appelAPI = true
    if (appelAPI) {
        modal3.showModal()
    }
}
// Ouvre la modal 3 avec le bouton "caché"
// btnModal3.addEventListener('click', () => {
//     modal3.showModal()
// })
// modal3.addEventListener('click', (e) => {
//     if (e.target.nodeName === "DIALOG") {
//         modal3.close()
//     }
// })

// Ferme la modal 3, "Bravo"
closeModal3.addEventListener('click', () => {
    closeModal2()
    submit.classList.remove('val')
    wrapper_previewImage.style.display = "none"
    label_image.style.display = "flex";

    modal3.setAttribute('closing', '')
    modal3.addEventListener('animationend', () => {
        modal3.removeAttribute('closing')
        modal3.close()
    }, {once: true})
   
    // setTimeout(() => {
    //     document.location.href = "index.html";
    // }, 1000); 
})
const label_image = document.querySelector('.label_image')
// bouton qui ouvre la modal 3, pour de nouveau ajouter des projets
ajoutePhoto.addEventListener('click', () => { 
    closeModal2()
    openModal()
    submit.classList.remove('val')
    wrapper_previewImage.style.display = "none"
    label_image.style.display = "flex";

    modal3.setAttribute('closing', '')
    modal3.addEventListener('animationend', () => {
        modal3.removeAttribute('closing')
        modal3.close()
    }, {once: true})
})

 ////////// MODAL4

const modal4 = document.querySelector('.modal4')
const closeModal4 = document.querySelector('.close-modal4')
const annuler = document.querySelector('.annuler')
const confirmBtn = document.getElementById("confirmBtn");
const openModal4 = document.querySelector('.openModal4')

openModal4.addEventListener('click', () => {
    modal4.showModal()
})

// modal3.addEventListener('click', (e) => {
//     if (e.target.nodeName === "DIALOG") {
//         modal3.close()
//     }
// })
confirmBtn.addEventListener('click', () => {
    closeModal()
    modal4.setAttribute('closing', '')

    modal4.addEventListener('animationend', () => {
        modal4.removeAttribute('closing')
        modal4.close()
    }, {once: true})
})

annuler.addEventListener('click', () => {
    
    modal4.setAttribute('closing', '')

    modal4.addEventListener('animationend', () => {
        modal4.removeAttribute('closing')
        modal4.close()
    }, {once: true})
    setTimeout(() => {
        document.location.href = "index.html";
    }, 800); 
})