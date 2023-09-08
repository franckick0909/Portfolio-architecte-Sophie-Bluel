
document.getElementById('form2').addEventListener('submit', async function (e) {
    e.preventDefault();

    const token = sessionStorage.getItem("token")
    const image = document.getElementById('image').files[0];
    const categoryId = document.getElementById('categoryId').value;
    const title = document.getElementById('title').value;

    let erreurTitle = document.getElementById('erreur-title');
    let erreurCategorie = document.getElementById('erreur-categorie');
    let succes = document.querySelector('.succes')

    if (title === "") {
        erreurTitle.style.display = "flex"
        erreurTitle.innerHTML = "Veuillez remplir le champs 'Titre' svp."
        return false
    } else {
        erreurTitle.style.display = "none"
        erreurTitle.innerHTML = ""
    }
    if (categoryId === "default") {
        erreurCategorie.style.display = "flex"
        erreurCategorie.innerHTML = "Veuillez sélectionner une 'Catégorie' svp."
        return false
    } else {
        erreurCategorie.style.display = "none"
        erreurCategorie.innerHTML = ""
    }if (image && title && categoryId) {
        succes.style.display = "flex"
        succes.innerHTML = "Formulaire rempli avec succès !!"
        
    } else {
        
    }

    const formData = new FormData();
    
    formData.append('image', image);
    console.log(image);
    formData.append('title', title);
    console.log(title);
    formData.append('category', categoryId);
    console.log(categoryId);


    // for (var key of formData.entries()) {
    //     console.log(key)
    // }

try {
    const resp = await fetch('http://localhost:5678/api/works', {
        method: 'POST',
        headers: {
            "accept": "*/*",
            Authorization: `Bearer ${token}`,
        },
        body: formData,
    })
    if (resp.ok === true) {
        
        sessionStorage.setItem("image", resp.image);
        sessionStorage.setItem("title", resp.title);
        sessionStorage.setItem("category", resp.categoryId);
        sessionStorage.setItem("token", resp.token);
        
        alert("Projet ajouté avec succès !");

        document.location.href = "index.html";

        
    } else {
        
        alert('Veuillez remplir tous les champs !')
    }
} catch (err) {
    console.log(err);
}
    
})

// function validation() {
// // let titlePhoto = document.form2.titlePhoto.value;
// // let categorie = document.form2.categorie.value;

//     let erreurTitle = document.getElementById('erreur-title');
//     let erreurCategorie = document.getElementById('erreur-categorie');
//     let rvalue = true;

//     if (title === "") {
//         erreurTitle.textContent = "Veuillez remplir le champs 'Titre' svp."
//         rvalue = false;
//     }
//     if (categoryId === "") {
//         erreurCategorie.textContent = "Veuillez sélectionner une 'Catégorie' svp."
//         rvalue = false;
//     }
//     return rvalue;
// }

//     let erreurTitle = document.getElementById('erreur-title')
//     let erreurCategorie = document.getElementById('erreur-categorie')
//     const form = document.getElementById('form2')
//     const title = document.getElementById('title').value
//     const categoryId = document.getElementById('categoryId').value
//     const image = document.getElementById('image').files[0]

// form.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const formdata = new FormData(event.currentTarget);
//   const values = [...formdata.values()];


//   try {

//     const formData = new FormData(formdata);
//     formData.append('title', title);
//     formData.append('categoryId', categoryId);
//     formData.append('image', image);

//     const res = await fetch('http://localhost:5678/api/works', {
//         method: 'POST',
//         body: formData,
//         headers: {
//             "Authorization": `Bearer ${token}`,
//             "Accept": "application/json",
//             "Content-Type": "multipart/form-data",
//         },
//     });

//     if (res.ok === true) {
//         const resData = await res.json();
//         console.log(resData);
//     } else if (values.includes('')) {
//         erreurTitle.textContent = "Veuillez remplir le champs 'Titre' svp."
//         erreurCategorie.textContent = "Veuillez sélectionner une 'Catégorie' svp."
//         return;
//       }

//   } catch (error) {
//     alert("Erreur de communication avec le server!")
//   }

// })

// const form2 = document.forms['my-form2'];
// // console.log(form2);
// const select = form2.categorie
// console.log(select);
// const options = form2.categorie.options
// // console.dir(select)
// console.dir(options)

// // select.disabled = true

// select.onchange = function() {

//         //Donne la value de option
//         let optionsValue = this.value
//         console.log(optionsValue);
        
//         // Donne le nom de option
//         optionText = this[this.selectedIndex].innerText
//         console.log(optionText);
// }