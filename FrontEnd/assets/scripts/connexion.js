function verifierChamp(balise) {
    if (balise.value === "") {
        balise.classList.add("error");
    } else {
        balise.classList.remove("error");
    }
}

const form1 = document.querySelector('.form1'); 

form1.addEventListener('submit', async (e) => {
    e.preventDefault()


const email = document.getElementById('email');
const password = document.getElementById('password');

try {

    const urlLogin = 'http://localhost:5678/api/users/login';
    const response = await fetch(urlLogin, {
        method: "POST",
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json",
        },
  
        body: JSON.stringify({
            email: email.value,
            password: password.value,      
        }),
    });
        if (response.ok === true) {

                const responses = await response.json(); 

                sessionStorage.setItem("userId", responses.userId);
                sessionStorage.setItem("token", responses.token);
            
                erreur.textContent = "Vous allez être redirigé vers la page d'accueil dans 2 secondes !"
                setTimeout(() => {
                        document.location.href = "index.html";
                }, 2000);      
                
    } else {
        const erreur = document.getElementById('erreur')
        erreur.textContent = "Erreur dans l'identifiant ou le mot de passe.";

        verifierChamp(email)
        verifierChamp(password)   
    }
    } catch (error) {
        console.log(error);
    }
});