
// ********** Function sur la bordure des champs, "Border" si champs vide, appel la class"error",  Sinon remove "error".
function verifierChamp(balise) {
    if (balise.value === "") {
        balise.classList.add("error");
    } else {
        balise.classList.remove("error");
    }
}

// Déclaration du formulaire (email, mot de passe).
const form1 = document.querySelector('.form1'); 

// au click du button submit du formulaire, je lance ma requète fetch pour me connecter.
form1.addEventListener('submit', async (e) => {
// Empêche le refresh de la page par défault.
    e.preventDefault()
// Efface le contenu du localStorage.
    localStorage.clear();

const email = document.getElementById('email');
const password = document.getElementById('password');

try {
// Déclaration de l'url 'login'.
    const urlLogin = 'http://localhost:5678/api/users/login';
    const response = await fetch(urlLogin, {
        method: "POST",
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json",
        },
// Convertit les valeurs js (email.value) et (password.value), en chaîne json.     
        body: JSON.stringify({
            email: email.value,
            password: password.value,      
        }),
    });
        if (response.ok === true) {

                const responses = await response.json(); 
// Si la réponse est "true", alors " stocke les données pour cette session de navigation.
                sessionStorage.setItem("userId", responses.userId);
                sessionStorage.setItem("token", responses.token);

                console.log(sessionStorage);
// Si la réponse est "true", vous serez dirigé vers la page d'accueil dans 2s, avec la méthode setTimeout                
                erreur.textContent = "Vous allez être redirigé vers la page d'accueil dans 2 secondes !"
                setTimeout(() => {
                        document.location.href = "index.html";
                }, 2000);      
                
    } else {
        const erreur = document.getElementById('erreur')
        erreur.textContent = "Erreur dans l'identifiant ou le mot de passe.";
// ********** Function sur la bordure des champs
        verifierChamp(email)
        verifierChamp(password)   
    }
    } catch (error) {
        console.log(error);
    }

});

// function verifierEmail(email) {
//     let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z._-]+\\.[a-z._-]+");
//     if (emailRegExp.test(email)) {
//         throw new Error("L'email n'est pas valide.")
//     }
// }