let Productname = document.getElementById('addName');
let description = document.getElementById('adddes');
let Category = document.getElementById('addcat');
let Price = document.getElementById('addpri');
const button = document.getElementById('btn');

const editName = document.getElementById('editName');
const editdes = document.getElementById('editdes');
const editcat = document.getElementById('editcat');
const editpri = document.getElementById('editpri');
const updateBtn = document.getElementById('updateBtn');

const tbody = document.querySelector("#tbody");
const addModel = document.querySelector("#addModel");
const editModel = document.querySelector("#editModel");

let updateIndex = -1;

button.addEventListener('click', () => {
    let data = JSON.parse(localStorage.getItem('pro')) || [];
    data.push({
        Productname: Productname.value,
        description: description.value,
        Category: Category.value,
        Price: Price.value
    });
    localStorage.setItem('pro', JSON.stringify(data));
    loadData();
    addNmae.value = "";
    adddec.value = "";
    addcat = "";
    addpri = "";
});

const loadData = () => {
    const data = JSON.parse(localStorage.getItem('pro')) || [];
    let result = "";
    data.forEach((pro, index) => {
        result += `
            <tr>
                <td>${index + 1}</td>
                <td>${pro.Productname}</td>
                <td>${pro.description}</td>
                <td>${pro.Category}</td>
                <td>${pro.Price}</td>
            </tr>
        `;
    });
    tbody.innerHTML = result;
};

const deleteData = (index) => {
    const data = JSON.parse(localStorage.getItem('pro'));
    data.splice(index, 1);
    localStorage.setItem('pro', JSON.stringify(data));
    loadData();
};

const editData = (index) => {
    const data = JSON.parse(localStorage.getItem('pro'));
    const pro = data[index];

    editName.value = pro.Productname;
    editdes.value = pro.description;
    editcat.value = pro.Category;
    editpri.value = pro.Price;

    addModel.style.display = "none";
    editModel.style.display = "block";

    updateIndex = index;
};

updateBtn.addEventListener("click", () => {
    const data = JSON.parse(localStorage.getItem('pro'));
    data[updateIndex] = {
        Productname: editName.value,
        description: editdes.value,
        Category: editcat.value,
        Price: editpri.value
    };
    localStorage.setItem('pro', JSON.stringify(data));
    loadData();
    editModel.style.display = "none";
    addModel.style.display = "block";
    updateIndex = -1;
});

loadData();
