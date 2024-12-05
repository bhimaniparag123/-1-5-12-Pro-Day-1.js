let Productname = document.getElementById('addName');
let description = document.getElementById('adddes');
let Category = document.getElementById('addcat');
let Price = document.getElementById('addpri');
const button = document.getElementById('btn');


button.addEventListener('click',() =>{
    let data = JSON.parse(localStorage.getItem('pro')) || [];
    data.push(
        {
            Productname: addName.value,
            description: adddes.value,
            Category: addcat.value,
            Price:addpri.value

        }
    )
    localStorage.setItem('pro',JSON.stringify(data))

});