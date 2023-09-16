const modale2 = document.querySelector('.modal2')
const openModal_2 = document.getElementById('ajouterPhoto')
const closModal2 = document.getElementById('close-modal2')
const returnModal = document.getElementById('returnModal')

openModal_2.addEventListener('click', openModal2)
closModal2.addEventListener('click', closeModal2)
returnModal.addEventListener('click', returnModal2)


function returnModal2() {
    window.setTimeout(function () {
        modale2.style.display ='none';
    }, 100)
    
    modale2.setAttribute('aria-hidden', 'true')
    modale2.removeAttribute('aria-modal')

    modal1.classList.toggle('openModale');
    modal1.removeAttribute('aria-hidden')
    modal1.setAttribute('aria-modal', 'true')
}

function openModal2() {
    // modal1.classList.toggle('hidden')
    modale2.style.display ='flex'   
    modale2.removeAttribute('aria-hidden')
    modale2.setAttribute('aria-modal', 'true')

    modal1.classList.toggle('openModale');
    modal1.setAttribute('aria-hidden', 'true')
    modal1.removeAttribute('aria-modal')
}

function closeModal2() {
    window.setTimeout(function () {
        modale2.style.display ='none';
    }, 100)
    
    modale2.setAttribute('aria-hidden', 'true')
    modale2.removeAttribute('aria-modal')

    overlay.classList.toggle('active');

    form2.reset()
}


window.addEventListener('keydown', function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
    }
})


// Preview de l'image sur l'écouteur d'évènement 'change'
const fileImage = document.getElementById('image')
fileImage.addEventListener('change', (e) => {

    console.log(e.target.files[0]);

const previewImage = document.getElementById('previewImage')
const wrapper_previewImage = document.querySelector('.wrapper-previewImage')

if(previewImage){
    wrapper_previewImage.style.display= "grid"
    previewImage.src = URL.createObjectURL(e.target.files[0])

    // const fa_image = document.querySelector(".fa-image")
    // fa_image.style.style.display = "none";
    const label_image = document.querySelector('.label_image')
    label_image.style.display = "none";
    // const p_image_preview = document.querySelector('.p_image_preview')
    // p_image_preview.style.opacity = "0";
  }
})

