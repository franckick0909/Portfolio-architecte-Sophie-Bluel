

// const apiUrlGallery = ("http://localhost:5678/api/works")

// async function fetchGalleryData() {
//     try {
//         const response = await fetch(apiUrlGallery)
//         const dataImg = await response.json()

//         const gallery = document.querySelector('.gallery');
        

//         dataImg.forEach(image => {
            
//             const figure = document.createElement('figure');
//             const img = document.createElement('img');
//             img.src = image.imageUrl
//             img.alt = image.title  

//             const figcaption = document.createElement('figcaption');
//             figcaption.textContent = image.title;

//             figure.appendChild(img);
//             figure.appendChild(figcaption);
//             gallery.appendChild(figure);

//             figure.dataset.categoryId = image.categoryId;
//         });

//         function filterImageByCategory(categoryId) {
//             const images = document.querySelectorAll('.category figure');

//             images.forEach(image => {
//                 if (categoryId === null || image.dataset.categoryId === categoryId) {
//                     image.style.display = 'block';
//                 }else{
//                     image.style.display = 'none';
//                 }
//             });
//         }

//     } catch (error){
//         alert("Erreur de communication avec le server!")
//         return 
//     }      
// }
// fetchGalleryData()








// const categoryButtonContainer = document.querySelector('.category');
// const AllButton= document.createElement('button');
// AllButton.textContent = 'Tous';

// AllButton.classList.add('active');

// AllButton.addEventListener('click', () => {
//     filterImageByCategory(null)
// })

// categoryButtonContainer.appendChild(AllButton);

// const apiUrlCategory = ("http://localhost:5678/api/categories")

// async function fetchCategoryData() {
//     try {
//         const response = await fetch(apiUrlCategory)
//         const dataCat = await response.json()
//         console.log(dataCat);

//         dataCat.forEach(category => {
//             const button = document.createElement('button');
//             button.textContent = category.name;
            

//             button.addEventListener('click', () => {
//                 filterImageByCategory(category.id);
//                 updateActiveButton(button);

//             })
//             categoryButtonContainer.appendChild(button);
//         });

//     } catch (error){
//         alert("Erreur de communication avec le server!")
//         return 
//     }      
// }
// fetchCategoryData()

// function updateActiveButton(button) {
//     const activeButton = document.querySelector('.active');

//     activeButton.classList.remove('active');

//     button.classList.add('active');
// }








//************************************







// dataImg.forEach(item => {

//     // gallery.innerHTML = '';

//     let currentGallery = null
//     const figure = document.createElement('figure')
//     const img = document.createElement('img')
//     img.src = item.imageUrl
//     img.alt = item.title
//     const figcaption = document.createElement('figcaption')
//     figcaption.textContent = item.title

//     gallery.appendChild(figure)
//     figure.appendChild(img)
//     figure.appendChild(figcaption)
//     })




        // const category = document.querySelector('.category')
        
        // dataCat.forEach(categoryName => {

        //     const button = document.createElement('button')
        //     button.textContent = categoryName.name
        //     category.appendChild(button)
        // })





// function setLinkActive(button) {
//     const buttons = document.querySelectorAll('.category button').forEach(btn => btn.classList.remove('active'))
//     button.classList.add('active')
// }




// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//     buttons.forEach(btn => btn.classList.remove('active'))
//     button.classList.add('active')

//     })
            

//         const selectedCategory = button.textContent
// })








// let worksData = [];                                 // création d'un tableau vide

// const fetchWorks = async () => {                    // function (async = pour attendre la response de la requète)
//     await fetch("http://localhost:5678/api/works")  // Requète fetch pour faire un requète d'une API, on récupère l'URL de l'API
//     .then((res) => res.json())       // un ".then" qui va être une "promise". on demande a ce que la réponse soit traitée en javascript json. 
//     .then((promise) => {             // console.log(res.json()) pour savoir si on reçoit bien une reponse de l'URL
//              worksData = promise;      // console.log(promise) pour voir qu'on a bien récupéré notre tableau! Il n'est plus en promise.
//              console.log(worksData);

//     });
// };  

// const worksDisplay = async () => {
//     await fetchWorks();                  // on attend le tableau fetchWorks, pour pouvoir travailler avec lui
    
//     const gallery = document.querySelector(".gallery");  // Je récupère la <div class="gallery"</div>

//     gallery.innerHTML = 
//     `
// <figure>
//     <img src="${worksData[0].imageUrl}" alt="Abajour Tahina">
//     <figcaption>${worksData[0].title}</figcaption>
// </figure>
// <figure>
//     <img src="${worksData[1].imageUrl}" alt="Appartement Paris V">
//     <figcaption>${worksData[1].title}</figcaption>
// </figure>
// <figure>
//     <img src="${worksData[2].imageUrl}" alt="Restaurant Sushisen - Londres">
//     <figcaption>${worksData[2].title}</figcaption>
// </figure>
// <figure>
//     <img src="${worksData[3].imageUrl}" alt="Villa “La Balisiere” - Port Louis">
//     <figcaption>${worksData[3].title}</figcaption>
// </figure>
// <figure>
//     <img src="${worksData[4].imageUrl}" alt="Structures Thermopolis">
//     <figcaption>${worksData[4].title}</figcaption>
// </figure>
// <figure>
//     <img src="${worksData[5].imageUrl}" alt="Appartement Paris X">
//     <figcaption>${worksData[5].title}</figcaption>
// </figure>
// <figure>
//     <img src="${worksData[6].imageUrl}" alt="Pavillon “Le coteau” - Cassis">
//     <figcaption>${worksData[6].title}</figcaption>
// </figure>
// <figure>
//     <img src="${worksData[7].imageUrl}" alt="Villa Ferneze - Isola d'Elba">
//     <figcaption>${worksData[7].title}</figcaption>
// </figure>
// <figure>
//     <img src="${worksData[8].imageUrl}" alt="Appartement Paris XVIII">
//     <figcaption>${worksData[8].title}</figcaption>
// </figure>
// <figure>
//     <img src="${worksData[9].imageUrl}" alt="Bar “Lullaby” - Paris">
//     <figcaption>${worksData[9].title}</figcaption>
// </figure>
// <figure>
//     <img src="${worksData[10].imageUrl}" alt="Hotel First Arte - New Delhi">
//     <figcaption>${worksData[10].title}</figcaption>
// </figure>
//     `

// }

// worksDisplay();

// const gallery = document.querySelector('.gallery');

// async function fetchCategories () {
//     const response = await fetch('http://localhost:5678/api/works')
//     if (response.ok === true) {
//         return response.json();
//     }else{
//         throw new Error('Impossible de contacter le serveur')
//     }
// }

// fetchCategories().then(works => console.log(works)

// fetch('http://localhost:5678/api/works')
// .then(response => response.json())           //  .then(response => console.log(response)); j'ai bien la reponse de l'API
//                                    //  On transforme la reponse en json.
// .then(data => gallery = data[0].title)  // Je fais une 2eme promesses qui va nous donner accès aux données.