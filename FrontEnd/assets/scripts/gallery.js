
// Appel API pour récupérer la gallerie
async function callApiGallery() {
  const url = ('http://localhost:5678/api/works')
  console.log(url);
  const response = await fetch(url)
  console.log(response); // reponse de l'API
  const data = await response.json()
  console.log(data);  // Récupération des données

  // const valeurGallery = JSON.stringify(data);
  // console.log(valeurGallery);
// Stockage des informations dans le localStorage
// window.localStorage.getItem("data", valeurGallery);
//   console.log(valeurGallery);


  // Déclaration du container des images
  const gallery = document.querySelector('.gallery');

  // data.slice(0, 11).forEach(item => {  // Première possibilité créée, mais sans pouvoir avoir les data dans un tableau

// Boucle for pour boucler les données dans un tableau et rajouter les éléments dont on a besoins.
    for (let i = 0; i < data.length; i++) {
    // création de 
    const figure = document.createElement('figure');
    figure.setAttribute('id', data[i].id);
    figure.setAttribute('data-category', data[i].categoryId);


    const img = document.createElement('img');

    img.src = data[i].imageUrl;
    img.alt = data[i].title;

    const figcaption = document.createElement('figcaption');
    figcaption.innerText = data[i].title + " - " + data[i].categoryId;
    console.log(data[i]);

    figure.appendChild(img);
    figure.appendChild(figcaption);
    gallery.appendChild(figure);

  }
}
callApiGallery()



