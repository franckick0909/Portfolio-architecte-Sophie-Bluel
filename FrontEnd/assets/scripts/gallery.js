async function callApiGallery() {

  const url = ('http://localhost:5678/api/works')
  let dataImg = null;
  try {

  const response = await fetch(url)
  dataImg = await response.json()

  } catch (error) {
    alert("Erreur de communication avec le server!")
    return 
  }

  const gallery = document.querySelector('.gallery');

          dataImg.forEach(image => {
        
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
  });
}
callApiGallery() 


async function callApiModal1() {

  const url = ('http://localhost:5678/api/works')
  let dataModal1 = null
  try {

    const res = await fetch(url)
    dataModal1 = await res.json()

  } catch (error) {
    alert("Erreur de communication avec le server!")
  }

  const galleryModal1 = document.getElementById('modal1-gallerie')
  
  dataModal1.forEach(mod => {
    const figureModal1 = document.createElement('figure')
    const imgModal1 = document.createElement('img')
    const figcaptionModal1 = document.createElement('figcaption')
    imgModal1.src = mod.imageUrl
    imgModal1.alt = mod.title

    figcaptionModal1.innerHTML = `<a href="#" class="editer">éditer</a>`

    const poubelle = document.createElement('i')
    poubelle.classList.add('fa-solid', 'fa-trash-can')
    poubelle.dataset.id = mod.id

    const move = document.createElement('i')
    move.classList.add('fa-solid', 'fa-arrows-up-down-left-right', 'delete')

    figureModal1.appendChild(imgModal1)
    figureModal1.dataset.categoryId = mod.categoryId
    figureModal1.dataset.id = mod.id

    figureModal1.appendChild(move)
    figureModal1.appendChild(poubelle)
    
    figureModal1.appendChild(figcaptionModal1)
    galleryModal1.appendChild(figureModal1)

    poubelle.addEventListener("click", async (e) => {

    e.preventDefault()  
    e.stopPropagation() 

    supprimeFigureModal1(poubelle.dataset.id)

    const iconeElement = figureModal1.dataset.id

    const token = sessionStorage.getItem("token")
    
    const modal4 = document.querySelector('.modal4')
    function appelAPIgallery() {
      const appelAPI = true
      if (appelAPI) {
          modal4.showModal()
      }
    }

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

    const confirmation = confirm("Vous êtes sur le point de supprimer un projet, voulez-vous continuer ?");
    if (confirmation === true) {
    } else if (confirmation === false){
      return
    }

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

        appelAPIgallery()
        textconfirm()

        document.querySelector('.gallery').innerHTML = '';
        document.querySelectorAll('.gallery figure').innerHTML = '';
        return callApiGallery()

      } else if (r.status === 401) {
        alert('Vous devez être connecté. Direction sur la page de connexion.')
        sessionStorage.clear()
        document.location.href = "connexion.html";

      } else {
        alert("Echec de suppression");
      }

    } catch (error) {
      alert("Erreur de communication avec le server!")
    }
      
    })
  });
}
callApiModal1()


function supprimeFigureModal1(id){

  let figures = document.querySelectorAll('.modal1-gallerie figure');
  console.log("supprimeFigureModal1 " + id);
 
  figures.forEach(figure => {
    if (id === figure.dataset.id || id === "0") {
      
      figure.style.display = 'none'
    }
  });
}