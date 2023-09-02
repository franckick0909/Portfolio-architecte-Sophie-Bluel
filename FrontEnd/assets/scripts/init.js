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
    login.classList.add('active')

    login.addEventListener('click', (logout) => {
        logout.preventDefault();
        sessionStorage.clear();

        document.location.href = "index.html";
        alert("Vous avez été déconnecté avec succès !")
    })
}

let category = document.querySelector('.category');
const banniere = document.querySelector('.banniere');
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


