
function isConnected() {
    const userId = sessionStorage.getItem("userId");
    if (userId) {
        return true
    } else {
        return false
    }
}

const userConnected = sessionStorage.getItem("userId");

if (userConnected) {
    const login = document.getElementById('login');
    login.innerHTML = "logout";

    login.addEventListener('click', (logout) => {

    modal.showModal()

        logout.preventDefault();
        sessionStorage.removeItem("userId");
        sessionStorage.clear();
    })
}

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

const btnOpen = document.createElement('button')
btnOpen.textContent = "Ouvre la modal"

const modal = document.createElement('dialog')

const attention = document.createElement('i')
attention.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`

const texteH3 = document.createElement('h3')
texteH3.innerHTML= `Vous avez été déconnecté avec succès !`

const container = document.createElement('div')
container.setAttribute('class', 'container')

const divButton = document.createElement('div')
divButton.setAttribute('class', 'divButton')

const btnConfirm = document.createElement('button')
btnConfirm.textContent = "Ok"
btnConfirm.setAttribute('class', 'btnConfirm btn' )

modal.appendChild(container)
container.appendChild(attention)
container.appendChild(texteH3)
container.appendChild(divButton)
divButton.appendChild(btnConfirm)

modal.setAttribute('class', 'modalDeco')

btnOpen.addEventListener('click', () => {
  modal.showModal()
})

btnConfirm.addEventListener("click", () => {
  btnConfirm === true
  modal.setAttribute("closing", "");

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

