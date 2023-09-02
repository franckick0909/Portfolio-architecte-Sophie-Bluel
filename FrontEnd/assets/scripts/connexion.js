
function verifierChamp(balise) {
    if (balise.value === "") {
        balise.classList.add("error");
    } else {
        balise.classList.remove("error");
    }
}

const form = document.getElementById('formData');
const submit = document.getElementById('submit');

form.addEventListener('submit', async (e) => {
    e.preventDefault()

const email = document.getElementById('email');
const password = document.getElementById('password');

    const urlLogin = 'http://localhost:5678/api/users/login';
    const response = await fetch(urlLogin, {
        method: "POST",
        headers: {
            "Accept": "application/json",
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
                console.log(sessionStorage);
                
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

});





// const email = document.getElementById('email').value;
// const password = document.getElementById('password').value;

//     async function callApiLogin() {
//         const res = await fetch('http://localhost:5678/api/users/login')
        //, {
        //     method: 'POST',
        //     headers: {
        //         'accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ 
        //         email,
        //         password})                
            
        // })
//         if (res.ok === true) {
//             return res.json()
//         }
//         throw new Error('Impossible de contacter le serveur')
//     }

// callApiLogin()  



// document.forms["inscription"].addEventListener("submit", function(e) {

//     const erreur = document.getElementById('erreur');
//     let inputs = this
    
//     // if (inputs["email"].value != "sophie.bluel@test.tld") {
//     //     erreur = "Adresse email incorrecte."
//     // }

//     for (let i = 0; i < inputs.length; i++) {
//         // console.log(inputs[i])
//         if (!inputs[i].value) {
            
//             erreur = "Veuillez renseigner tous les champs."
//         } 
//         verifierChamp(inputs[i])
//     }

//     if (erreur) {
//         e.preventDefault()
//         erreur.textContent = "Nom d'utilisateur ou mot de passe incorrect."
//         return false
//     }
// })


















// const form = document.getElementById("form");

// function gererForm() {
//     try {
//         let baliseMail = document.getElementById("email")
//         let email = baliseMail.value
//         validerEmail(email)

//         let baliseMdp = document.getElementById("mdp")
//         let mdp = baliseMdp.value
//         afficherMessageErreur("")
//         verifierEmail()
//     } catch (erreur) {
//         afficherMessageErreur(erreur.message)
//     }

// }

// // function verifierChamp(balise) {
// //     if (balise.value === "") {
// //         balise.classList.add("error")
// //     } else {
// //         balise.classList.remove("error")
// //     }
// // }

// function verifierEmail(email) {
//     let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z._-]+\\.[a-z._-]+");
//     if (emailRegExp.test(email)) {
//         throw new Error("L'email n'est pas valide.")
//     }
// }

// function afficherMessageErreur(message) {
    
//     let spanErreurMessage = document.getElementById("erreurMessage")

//     if(!spanErreurMessage) {
//         let popup = document.getElementById('inscription')
//         spanErreurMessage = document.createElement('span')
//         spanErreurMessage.id = "erreurMessage"       
//         popup.appendChild(spanErreurMessage)
//     }
//     spanErreurMessage.innerHTML = message
// }





// inscription.addEventListener("submit", (event) => {
//     event.preventDefault();

// });





