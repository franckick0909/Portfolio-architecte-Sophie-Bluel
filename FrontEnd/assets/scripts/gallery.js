// Récupération des projets "imageUrl", "title", "categoryId".
// function asynchrone qui ne bloque pas le reste du code.
// Affiche la gallery d'image losrque l'utilisateur n'est pas connecté.
async function callApiGallery() {

  const url = ('http://localhost:5678/api/works')
  let dataImg = null;
  try {
// console.log(url) pour voir la promise de l'url.
// fetch envoie une requète à l'API et renvoie une promise.
// response de la promise. 'await' qui permet d'éxécuter le reste du code sans avoir à attendre.
  const response = await fetch(url)
// console.log(response); // reponse de l'API 200, ok === true.

  dataImg = await response.json()
  console.log(dataImg);  // Récupération des données "dataImg" en json.

// "try catch" cherche les erreurs, et renvoie une réponse.
  } catch (error) {
    alert("Erreur de communication avec le server!")
    return 
  }

// Déclaration du container des images.
  const gallery = document.querySelector('.gallery');
// Méthode forEach pour se servir de chaque donnée, de "dataImg".
          dataImg.forEach(image => {
// création du code html pour pouvoir s'en servir dans le DOM.
// Traite les données et les envoient dans le DOM.          
            let figure = document.createElement('figure');
            const img = document.createElement('img');
            img.src = image.imageUrl
            img.alt = image.title  

            const figcaption = document.createElement('figcaption');
            figcaption.textContent = image.title;

            figure.appendChild(img);
            figure.appendChild(figcaption);
            gallery.appendChild(figure);

            figure.dataset.categoryId = image.categoryId;
            return figure;
            // renvoie l'élément figure dans le DOM.
  });
}
callApiGallery() 

// ***********************  MODAL 1  ***************************//
    // Déclaration des éléments de la modal1
// Récupération des données de l'API. 
// Réponse de la promise et envoie des données en json.

async function callApiModal1() {

  const url = ('http://localhost:5678/api/works')
  let dataModal1 = null
  try {
    const res = await fetch(url)
    // console.log(res);

    dataModal1 = await res.json()
    console.log(dataModal1);

  } catch (error) {
    alert("Erreur de communication avec le server!")
  }

// Ajout photos galeryModal1
  const galleryModal1 = document.getElementById('modal1-gallerie')

// Traite les données et les envoient dans la "modal1".
  
  dataModal1.forEach(mod => {
    const figureModal1 = document.createElement('figure')
    const imgModal1 = document.createElement('img')
    const figcaptionModal1 = document.createElement('figcaption')
    imgModal1.src = mod.imageUrl
    imgModal1.alt = mod.title

    figcaptionModal1.innerHTML = `<a href="#" class="editer">éditer</a>`

//  création de l'icon "poubelle", qui servira d'écouteur d'évènement au click pour supprimer un projet.
    const poubelle = document.createElement('i')
    poubelle.classList.add('fa-solid', 'fa-trash-can')
    poubelle.dataset.id = mod.id
//  "dataset.id" rajoute un attribut de donnée "id" à chaque élément poubelle.

    const move = document.createElement('i')
    move.classList.add('fa-solid', 'fa-arrows-up-down-left-right', 'delete')

    figureModal1.appendChild(imgModal1)
    figureModal1.dataset.categoryId = mod.categoryId
    figureModal1.dataset.id = mod.id

    figureModal1.appendChild(move)
    figureModal1.appendChild(poubelle)
    
    figureModal1.appendChild(figcaptionModal1)
    galleryModal1.appendChild(figureModal1)

// place un écouteur d'évènement au click sur l'élément poubelle.
    poubelle.addEventListener("click", async (e) => {
// Empêche le refresh de la page par défault
    e.preventDefault()  // empêche le comportement par défault de l'évènement.
    e.stopPropagation() // empêche la propagation d'évènement au click.

    supprimeFigureModal1(poubelle.dataset.id)
// iconeElement donne le numéro de l'image que sera effacée grâce à son attibut "id".
    const iconeElement = figureModal1.dataset.id
    console.log(iconeElement);

// Récupère le token du stockage local donné lors de la connexion, puis le réutilise dans l'API delete.
    const token = sessionStorage.getItem("token")
    
// ********** Function qui fait appel à la "modal4" suppression du projet ...
    const modal4 = document.querySelector('.modal4')
    function appelAPIgallery() {
      const appelAPI = true
      if (appelAPI) {
          modal4.showModal()
      }
    }
// ********** Function qui rentre les données supprimées dans la modal4 (après réponse true de l'API).
    const textConfirm = document.querySelector('.image-confirm')
    function textconfirm() {
      textConfirm.innerHTML = 
      `
      <ul class="image-confirm">
	        <li><a href="#">Vous venez de supprimer le projet : <span>${mod.title}</span></a></li>
	        <li><a href="#">De la catégorie : <span>${mod.categoryId}</span></a></li>
	        <li><a href="#">De l'image :  <img src="${mod.imageUrl}" alt="${mod.title}"></a></li>
      </ul>
      `
    }
// boite de message "confirm", avant la suppression d'une image qui donne le choix de supprimer ou non.
    const confirmation = confirm("Vous êtes sur le point de supprimer un projet, voulez-vous continuer ?");
    if (confirmation === true) {
    } else if (confirmation === false){
      return
    }
// fetch avec la méthode DELETE, suppression de projet
try {
    const urlDelete = `http://localhost:5678/api/works/${iconeElement}`

    const r = await fetch(urlDelete, {
      method: "DELETE",
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${token}`,
      },
      body: {"error": {} }
    })
    
      if (r.ok === true) {
        console.log(r);
// Si la réponse est 201 ou true, alors: la modal4 arrive.
        appelAPIgallery()
        textconfirm()
// Vide la gallery d'image.
        document.querySelector('.gallery').innerHTML = '';
        document.querySelectorAll('.gallery figure').innerHTML = '';
        return callApiGallery()
// Met à jour la gallery d'immage en appelant la function callApiGallery().

// Sinon si, la réponse est 401, alors "alert"... Puis sessionStorage effacée, et renvoie sur la page de connexion.
      } else if (r.status === 401) {
        alert('Vous devez être connecté. Direction sur la page de connexion.')
        sessionStorage.clear()
        document.location.href = "connexion.html";
// Sinon Echec de suppression
      } else {
        alert("Echec de suppression");
      }

    } catch (error) {
      alert("Erreur de communication avec le server!")
    }
      
    })
  });
}
// Appel de la function
callApiModal1()

// ********** Function qui supprime la figure de la galleryModal1.

function supprimeFigureModal1(id){
// Déclare les figures  qui sont les enfants de modal1-gallerie.
  let figures = document.querySelectorAll('.modal1-gallerie figure');
  console.log("supprimeFigureModal1 " + id);

// Si le paramètre (id) est égal à la data de l'id figure OU si il est égal à 0, Alors supprime la figure correspondant à cet id.  
  figures.forEach(figure => {
    if (id === figure.dataset.id || id === "0") {
      
      figure.style.display = 'none'
    }
  });
}