
// ********** Function qui récupère le stockage de userId sur c'est true.
function isConnected() {
    const userId = sessionStorage.getItem("userId");
    if (userId) {
        return true
    } else {
        return false
    }
}

const userConnected = sessionStorage.getItem("userId");

// Si l'utilisateur est connecté, alors le "login", devient "logout".
if (userConnected) {
    const login = document.getElementById('login');
    login.innerHTML = "logout";
    // login.classList.add('active')

// place un écouteur d'évènement au click sur le login, pour se déconnecter.
    login.addEventListener('click', (logout) => {
// ouvre une modal qui dit "Vous avez été déconnecté avec succès !".
    modal.showModal()
// Supprime l'utilisateur (lorsqu'il se déconnecte) et efface les données stockées.
        logout.preventDefault();
        sessionStorage.removeItem("userId");
        sessionStorage.clear();

        // alert("Vous avez été déconnecté avec succès !")
        // document.location.href = "index.html";
    })
}

// Déclaration des rajous lorsque l'utilisateur est connecté.
let category = document.querySelector('.category');
let banniere = document.querySelector('.banniere');
const modif = document.querySelector('.modif');
const modifier = document.querySelector('.modifier');
if (userConnected) {
    

    banniere.style.display = 'flex';
    banniere.innerHTML += `
    <a href="#" class="edition"><i class="fa-regular fa-pen-to-square"></i>Mode édition</a>
    <a href="#" class="changement">publier les changements</a>`;
 
    category.style.display = 'none';
    modifier.style.display = 'flex';
    modif.style.display = 'flex';
} else {
    
    banniere.style.display = 'none';
    category.style.display = 'flex';
    modifier.style.display = 'none';
    modif.style.display = 'none';
}

// ************** Modal Déconnexion userId **************** //

// Création de la modal complète, qui informe l'utilisateur avoir été déconnecté avec succès.

const btnOpen = document.createElement('button')
btnOpen.textContent = "Ouvre la modal"
// Modal créé avec la balise "dialog".
const modal = document.createElement('dialog')

const attention = document.createElement('i')
attention.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`
// création du texte H3.
const texteH3 = document.createElement('h3')
texteH3.innerHTML= `Vous avez été déconnecté avec succès !`
// Création du container et lui donner une class 'container'.
const container = document.createElement('div')
container.setAttribute('class', 'container')
// Création d'une div et lui donner une class 'divButton', dans le cas où il y aurait plusieurs button à gérer en css.
const divButton = document.createElement('div')
divButton.setAttribute('class', 'divButton')
// Création d'un button' et lui donner les class 'btnConfirm btn'.
const btnConfirm = document.createElement('button')
btnConfirm.textContent = "Ok"
btnConfirm.setAttribute('class', 'btnConfirm btn' )
// Déclarer dans le DOM toutes les créations.
modal.appendChild(container)
container.appendChild(attention)
container.appendChild(texteH3)
container.appendChild(divButton)
divButton.appendChild(btnConfirm)

modal.setAttribute('class', 'modalDeco')
// Ouvrir la modal
btnOpen.addEventListener('click', () => {
  modal.showModal()
})
// Ferme la modal lorsque le button "btnConfirm" est clické.
btnConfirm.addEventListener("click", () => {
  btnConfirm === true
  modal.setAttribute("closing", "");
// Ferme la modal avec une animation de fermeture.
  modal.addEventListener('animationend', () => {
      modal.removeAttribute("closing");
      modal.close();
    },
    { once: true }
  );
  setTimeout(() => {
    location.reload()
  }, 1000);
  
});

document.body.appendChild(btnOpen)
document.body.appendChild(modal)

