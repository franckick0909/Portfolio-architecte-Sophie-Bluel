

async function callApiCategory() {
    const url = ("http://localhost:5678/api/categories")
    console.log(url);
    const res = await fetch(url)
    console.log(res);
    const data = await res.json()
    console.log(data);

    //const valeurCategory = JSON.stringify(data);
    // console.log(valeurCategory);
	// Stockage des informations dans le localStorage
	//window.localStorage.getItem("data", valeurCategory);


    // categories.innerHTML += 
    // `<nav class="nav_categories">
    //     <a data-category="Categorie 1" class="btn-link active" href="#cat1">Tous</a>
    //     <a data-category="Categorie 2" class="btn-link" href="#cat2">${data[0].name}</a>
    //     <a data-category="Categorie 3" class="btn-link" href="#cat3">${data[1].name}</a>
    //     <a data-category="Categorie 4" class="btn-link" href="#cat4">${data[2].name}</a>
    // </nav>`;

    
    

    for (let index = 0; index < data.length; index++) {
        
        const categories = document.querySelector('.categories');

        const link = document.createElement('a');
        
        link.setAttribute('id', data[index].id);
        link.setAttribute('data-category', data[index].categoryId);
        link.innerHTML = data[index].name;

        categories.appendChild(link);
        
    }



}
callApiCategory()





















// const arrList = Array.from(btnsLinks)
// console.log(arrList);













/*
let categoriesData = [];

const fetchCategories = async () => {
    await fetch("http://localhost:5678/api/categories")
    .then((res) => res.json())
    .then((promise) =>  {                              //console.log(promise)
        categoriesData = promise;
        console.log(categoriesData);
    });   
};


const categoriesDisplay = async () => {
    await fetchCategories();

    const navCategories = document.getElementById("categories");

    navCategories.innerHTML = 
    `
    <a class="active" href="#">Tous</a>
    <a class="objets" href="#">${categoriesData[0].name}</a>
    <a class="appartements" href="#">${categoriesData[1].name}</a>
    <a class="hotels" href="#">${categoriesData[2].name}</a>
    `
};

categoriesDisplay();
*/


