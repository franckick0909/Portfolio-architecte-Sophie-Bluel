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



