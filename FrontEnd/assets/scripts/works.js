    
// Déclaration des éléments du formulaire de la modal2.
    let erreurTitle = document.getElementById('erreur-title');
    let erreurCategorie = document.getElementById('erreur-categorie');
    let erreurImage = document.getElementById('erreur-image')
    let succes = document.getElementById('succes')
    let ajoutPhoto = document.querySelector('.ajoutPhoto')
    let submit = document.getElementById('submit')

    const image = document.getElementById('image')
    const title = document.getElementById('title')
    const categoryId = document.getElementById('categoryId')

// ********** Function, Si l'input "image" est vide, alors envoie un message d'erreur.
function confirmImage() {
    if (image.value === "") {
        erreurImage.style.display = "flex"
        erreurImage.innerHTML = "Veuillez ajouter une photo svp."
    } else {
        erreurImage.style.display = "none"
        erreurImage.innerHTML = ""
    }
}
// ********** Function, Si l'input "title" est vide, alors envoie un message d'erreur.
function confirmTitle() {
    if (title.value === "") {
        erreurTitle.style.display = "flex"
        erreurTitle.innerHTML = "Veuillez remplir le champs 'Titre' svp."
    } else {
        erreurTitle.style.display = "none"
        erreurTitle.innerHTML = ""
    }
}
// ********** Function, Si l'élément Select "ctegoryId" est vide, alors envoie un message d'erreur.
function confirmCategory() {
    if (categoryId.value === "") {
        erreurCategorie.style.display = "flex"
        erreurCategorie.innerHTML = "Veuillez sélectionner une 'Catégorie' svp."
    } else {
        erreurCategorie.style.display = "none"
        erreurCategorie.innerHTML = ""
    }
}
// au click du button submit du formulaire, je lance ma requète fetch méthode POST, pour ajouter des projets.
const form2 = document.getElementById('form2')
form2.addEventListener('submit', async (e) => {
    e.preventDefault()  // Empêche le refresh de la page par défault.
    e.stopPropagation() // empêche la propagation d'évènement au click.
    confirmImage()      // message d'erreur si vide.
    confirmTitle()      // message d'erreur si vide.
    confirmCategory()   // message d'erreur si vide.
//  retire le message d'erreur, si tous les champs sont remplis.
    succes.style.display = "none"

// Déclaration des éléments du formulaire de la modal2... suite.
    const submit = document.getElementById('submit')
    const token = sessionStorage.getItem("token")
    const image = document.getElementById('image').files[0];
    const categoryId = document.getElementById('categoryId').value;
    const title = document.getElementById('title').value;

// formData crée un nouvel objet FormData().
    const formData = new FormData();
// Une fois FormData() spécifié, il sera rempli des "clés / valeurs" du formulaire.
    formData.append('image', image);

    formData.append('title', title);

    formData.append('category', categoryId);

// Si "title, categyId, image" sont vide, alors envoie un message d'erreur.
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
            "accept": "*/*", // token autorisé, repris de la sessionStorage.
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
        },
        body: formData,
    })
    if (resp.ok === true) {
// ********** Function qui fait appel à la modal 3, "si" la response pour ajouter un projet est réussi.
        appelAPI()
//  reset le formulaire "si" la response est true.
        form2.reset()

// Vide la gallery d'image de la page index.html, et vide également celle de la modal1.
        document.getElementById('modal1-gallerie').innerHTML = "";
        document.querySelectorAll('.modal1-gallerie figure').innerHTML = "";

        document.querySelector('.gallery').innerHTML = '';
        document.querySelectorAll('.gallery figure').innerHTML = '';
        return callApiGallery()  &&  callApiModal1()
// Met à jour la gallery d'immage et la gallerie de la modal1.
    } else if (resp.status === 401) {
        alert('Vous devez être connecté. Direction sur la page de connexion.')
        sessionStorage.removeItem("userId");
        document.location.href = "connexion.html";
// Sinon si, la réponse est 401, alors "alert"... Puis sessionStorage effacée, et renvoie sur la page de connexion.
    } else {
        succes.style.display = "flex"
        // succes.style.color = "red"
        succes.innerHTML = 'Veuillez remplir tous les champs !'
    }
} catch (error) {
    alert("Erreur de communication avec le server!")
    }  
})