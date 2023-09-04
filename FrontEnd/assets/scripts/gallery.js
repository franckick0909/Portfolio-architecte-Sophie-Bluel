async function callApiGallery() {
  const url = ('http://localhost:5678/api/works')
  let dataImg = null;
  try {
  // console.log(url);
  const response = await fetch(url)

  // console.log(response); // reponse de l'API 200, ok === true
  dataImg = await response.json()
  console.log(dataImg);  // Récupération des données

  } catch (error) {
    alert("Erreur de communication avec le server!")
    return 
  }

  // Déclaration du container des images
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
  });
}
callApiGallery()   



// Modal 1

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

  dataModal1.forEach(mod => {
    const figureModal1 = document.createElement('figure')
    const imgModal1 = document.createElement('img')
    const figcaptionModal1 = document.createElement('figcaption')
    imgModal1.src = mod.imageUrl
    imgModal1.alt = mod.title
    figcaptionModal1.innerHTML = `<a href="#" class="editer">éditer</a>`

    const poubelle = document.createElement('i')
    poubelle.classList.add('fa-solid', 'fa-trash-can')

    const move = document.createElement('i')
    move.classList.add('fa-solid', 'fa-arrows-up-down-left-right', 'delete')

    figureModal1.appendChild(imgModal1)
    figureModal1.dataset.categoryId = mod.categoryId
    figureModal1.dataset.id = mod.id

    figureModal1.appendChild(move)
    figureModal1.appendChild(poubelle)
    
    
    figureModal1.appendChild(figcaptionModal1)
    galleryModal1.appendChild(figureModal1)

    poubelle.addEventListener("click", (e) => {
      e.preventDefault()
      e.stopPropagation()
    })

  //   function FilterForId(id) {
  //     let figures = document.querySelectorAll('.gallery figure');
  // console.log("FilterForId " + id );
  
  //     figures.forEach(figure => {
  //         if (id === figure.dataset.categoryId || id === "0") {
  //             figure.style.display = 'block';
  //         }else{
  //             figure.style.display = 'none';
  //         }
  //     });
  });
}
callApiModal1()