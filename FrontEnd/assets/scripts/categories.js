// ********** Function qui appel l'Api des "categoryId", et leurs "id".
async function callApiCategory() {
    const url = ("http://localhost:5678/api/categories")
    // console.log(url);
    const response = await fetch(url)
    // console.log(res);
    const dataCat = await response.json()
    console.log(dataCat);

// Méthode forEach pour se servir de chaque donnée, de "dataCat".
    dataCat.forEach(categorys => {
// Récupération de la div, class .category dans le DOM.
        const category = document.querySelector('.category');
        const images = document.querySelectorAll('.category figure');
// Création de button
        const link = document.createElement('button');
// Création du texte sur les 3 buttons récupérés des données dataCat.
// Objets, Appartements, Hotels & Restaurants
        link.textContent = categorys.name;
        link.dataset.categoryId = categorys.id;
// ajoute une class "linky" sur tous les buttons
        link.setAttribute('class', "linky");

        category.appendChild(link);    
// place un écouteur d'évènement au click sur l'élément link.
        link.addEventListener('click', () => {
            setLinkActive(link); 
            executeFilter(link.dataset.categoryId);  
        });
    });
        
}
// Appel de la function
callApiCategory()

// ********** Function qui filtres le button "active".

function setLinkActive(link) {
    document.querySelectorAll('.category button').forEach(element => {
    
        element.classList.remove('active')
    });
    link.classList.add('active')
}

// ********** Function qui filtres les figures par rapport aux button clickés. 

function executeFilter(id) {
// Déclare toutes les figures qui sont les enfants de gallery.    
    let figures = document.querySelectorAll('.gallery figure');
console.log("executeFilterForId " + id );
// Si le paramètre (id) est égal à la data de l'id figure OU si il est égal à 0, ajoute le, sinon supprimme le. 
    figures.forEach(figure => {
        if (id === figure.dataset.categoryId || id === "0") {
            figure.style.display = 'block';
        }else{
            figure.style.display = 'none';
        }
    });
}

// déclaration du button (tousBtn)
const tousBtn = document.querySelector('#btnTous');
// Si (tousBtn) est clické, alors donne la class active, et donne toutes les images correspondant.
// de base (tousBtn) est déclaré en "active".
if (tousBtn){
    tousBtn.addEventListener('click', () => {
        setLinkActive(tousBtn)
        executeFilter(tousBtn.dataset.category)
    })  
}