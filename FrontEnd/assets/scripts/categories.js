
async function callApiCategory() {
    const url = ("http://localhost:5678/api/categories")
    // console.log(url);
    const response = await fetch(url)
    // console.log(res);
    const dataCat = await response.json()
    console.log(dataCat);


    dataCat.forEach(categorys => {
        const category = document.querySelector('.category');
        const images = document.querySelectorAll('.category figure');

        const link = document.createElement('button');
        
        link.textContent = categorys.name;
        link.dataset.categoryId = categorys.id;

        link.setAttribute('class', "linky");

        category.appendChild(link);    

        link.addEventListener('click', () => {
            setLinkActive(link); 
            executeFilter(link.dataset.categoryId);  
        });
    });
        
}
callApiCategory()


function setLinkActive(link) {
    document.querySelectorAll('.category button').forEach(element => {
    
        element.classList.remove('active')
    });
    link.classList.add('active')
}

// Fonction pour tout filtrer en pasant par la "data-category"
function executeFilter(id) {
    let figures = document.querySelectorAll('.gallery figure');
console.log("executeFilterForId " + id );

    figures.forEach(figure => {
        if (id === figure.dataset.categoryId || id === "0") {
            figure.style.display = 'block';
        }else{
            figure.style.display = 'none';
        }
    });
}


const tousBtn = document.querySelector('#btnTous');
if (tousBtn){
    tousBtn.addEventListener('click', () => {
        setLinkActive(tousBtn)
        executeFilter(tousBtn.dataset.category)
    })  
}

const AllButton= document.createElement('button');
AllButton.textContent = 'Tous';

AllButton.classList.add('active');

AllButton.addEventListener('click', () => {
    setLinkActive(tousBtn)
    executeFilter(tousBtn.dataset.category)
})