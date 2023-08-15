

async function callApiGallery() {
  const url = ('http://localhost:5678/api/works')
  console.log(url);
  const response = await fetch(url)
  console.log(response);
  const data = await response.json()
  console.log(data);

  const valeurGallery = JSON.stringify(data);
  // console.log(valeurGallery);
  // Stockage des informations dans le localStorage
window.localStorage.getItem("data", valeurGallery);
  // console.log(valeurGallery);

  const gallery = document.querySelector('.gallery');

  data.slice(0, 11).forEach(item => {
    const figure = document.createElement('figure');
    const img = document.createElement('img');

    img.src = item.imageUrl;
    img.alt = item.name;

    const figcaption = document.createElement('figcaption');
    figcaption.textContent = `${item.title} - ${item.category.name}`;
    console.log(item.category.name);

    figure.appendChild(img);
    figure.appendChild(figcaption);
    gallery.appendChild(figure);

  });
}

callApiGallery()