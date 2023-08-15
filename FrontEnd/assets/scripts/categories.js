

async function callApiCategory() {
    const url = ("http://localhost:5678/api/categories")
    console.log(url);
    const res = await fetch(url)
    console.log(res);
    const data = await res.json()
    console.log(data);


    const valeurCategory = JSON.stringify(data);
    // console.log(valeurCategory);
	// Stockage des informations dans le localStorage
	window.localStorage.getItem("data", valeurCategory);

    const categories = document.querySelector('.categories');
    categories.innerHTML += 
    `<nav class="nav_categories">
        <a class="btn-link btn-1 active" href="#cat1">Tous</a>
        <a class="btn-link btn-2 " href="#cat2">${data[0].name}</a>
        <a class="btn-link btn-3 " href="#cat3">${data[1].name}</a>
        <a class="btn-link btn-4 " href="#cat4">${data[2].name}</a>
    </nav>`;
}
callApiCategory()


const btnsLinks = document.querySelectorAll('.btn-link');
const btnActive = document.querySelector('.active');
let selectCategory = 0;





















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


