// Déclaration des éléments html de la modal2.
const modale2 = document.querySelector('.modal2')
const openModal_2 = document.getElementById('ajouterPhoto')
const closModal2 = document.getElementById('close-modal2')
const returnModal = document.getElementById('returnModal')

openModal_2.addEventListener('click', openModal2)
closModal2.addEventListener('click', closeModal2)
returnModal.addEventListener('click', returnModal2)

// ********** Function sur la flèche de retour pour retourner sur la modal1 avec un délai de 700ms.
function returnModal2() {
    window.setTimeout(function () {
        modale2.style.display ='none';
    }, 700)
// ferme la modal2.
    modale2.setAttribute('aria-hidden', 'true')
    modale2.removeAttribute('aria-modal')
// réouvre la modal1.
    modal1.classList.toggle('openModale');
    modal1.removeAttribute('aria-hidden')
    modal1.setAttribute('aria-modal', 'true')
}
// ********** Function ouvrir modal2.
function openModal2() {

    modale2.style.display ='flex'   
    modale2.removeAttribute('aria-hidden')
    modale2.setAttribute('aria-modal', 'true')
// ferme la modal1
    modal1.classList.toggle('openModale');
    modal1.setAttribute('aria-hidden', 'true')
    modal1.removeAttribute('aria-modal')
}
// ********** Function ferme la modal2.
function closeModal2() {
    window.setTimeout(function () {
        modale2.style.display ='none';
    }, 700)
    
    modale2.setAttribute('aria-hidden', 'true')
    modale2.removeAttribute('aria-modal')
// ferme l'overlay
    overlay.classList.toggle('active');
// reset le formulaire de la modal2.
    form2.reset()
}

// ferme la modal 1 par la touche  ECHAPPE ou ESCAPE.
window.addEventListener('keydown', function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
    }
})


// Preview de l'image.
// évènement "change", pour changer la valeur de lorsqu'un changement se produit.
const fileImage = document.getElementById('image')
fileImage.addEventListener('change', (e) => {

    console.log(e.target.files[0]);
// Déclaration des éléments html qui serviront à la preview image.
const previewImage = document.getElementById('previewImage')
const wrapper_previewImage = document.querySelector('.wrapper-previewImage')
// Si j'écoute l'évènement "fileImage", mon 'wrapper_previewImage prend le display "grid".
if(previewImage){
    wrapper_previewImage.style.display = "grid"
// On définit la source de l'image afin d'utiliser la nouvelle URL d'objet représentant le fichier grâce à "URL.createObjectURL()".
    previewImage.src = URL.createObjectURL(e.target.files[0])
// l'élément label devient display "none".
    const label_image = document.querySelector('.label_image')
    label_image.style.display = "none";
  }
})

