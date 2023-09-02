
// Appel API pour récupérer la gallerie
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