    let erreurTitle = document.getElementById('erreur-title');
    let erreurCategorie = document.getElementById('erreur-categorie');
    let erreurImage = document.getElementById('erreur-image')
    let succes = document.getElementById('succes')
    let ajoutPhoto = document.querySelector('.ajoutPhoto')
    let submit = document.getElementById('submit')

    const image = document.getElementById('image')
    const title = document.getElementById('title')
    const categoryId = document.getElementById('categoryId')


function confirmImage() {
    if (image.value === "") {
        erreurImage.style.display = "flex"
        erreurImage.innerHTML = "Veuillez ajouter une photo svp."
    } else {
        erreurImage.style.display = "none"
        erreurImage.innerHTML = ""
    }
}
function confirmTitle() {
    if (title.value === "") {
        erreurTitle.style.display = "flex"
        erreurTitle.innerHTML = "Veuillez remplir le champs 'Titre' svp."
    } else {
        erreurTitle.style.display = "none"
        erreurTitle.innerHTML = ""
    }
}
function confirmCategory() {
    if (categoryId.value === "") {
        erreurCategorie.style.display = "flex"
        erreurCategorie.innerHTML = "Veuillez sélectionner une 'Catégorie' svp."
    } else {
        erreurCategorie.style.display = "none"
        erreurCategorie.innerHTML = ""
    }
}
const form2 = document.getElementById('form2')
form2.addEventListener('submit', async (e) => {
    e.preventDefault()
    e.stopPropagation()
    confirmImage()
    confirmTitle()
    confirmCategory()



    const submit = document.getElementById('submit')
    const token = sessionStorage.getItem("token")
    const image = document.getElementById('image').files[0];
    const categoryId = document.getElementById('categoryId').value;
    const title = document.getElementById('title').value;

    const formData = new FormData();
    
    formData.append('image', image);
    console.log(image);
    formData.append('title', title);
    console.log(title);
    formData.append('category', categoryId);
    console.log(categoryId);

    if (title && categoryId && image) {
        submit.classList.add('val')
    }
    // for (var key of formData.entries()) {
    //     console.log(key)
    // }
try {
    const resp = await fetch('http://localhost:5678/api/works', {
        method: 'POST',
        headers: {
            "accept": "*/*",
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
        },
        body: formData,
    })
    if (resp.ok === true) {
        appelAPI()

        form2.reset()
        succes.style.display = "none"
        // alert("Projet ajouté avec succès !");

        document.getElementById('modal1-gallerie').innerHTML = "";
        document.querySelectorAll('.modal1-gallerie figure').innerHTML = "";

        document.querySelector('.gallery').innerHTML = '';
        document.querySelectorAll('.gallery figure').innerHTML = '';
        return callApiGallery()  &&  callApiModal1()

    } else if (resp.status === 401) {
        alert('Vous devez être connecté. Direction sur la page de connexion.')
        sessionStorage.removeItem("userId");
        document.location.href = "connexion.html";

    } else {
        succes.style.display = "flex"
        succes.style.color = "red"
        succes.innerHTML = 'Veuillez remplir tous les champs !'
    }
} catch (error) {
    alert("Erreur de communication avec le server!")
    }  
})