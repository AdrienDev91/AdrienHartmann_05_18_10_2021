var str = location.href;
var url = new URL(str);
var id = url.searchParams.get("id");
console.log(id);

var data = fetch(`http://localhost:3000/api/products/${id}`)

data
    .then((response) => { return response.json() })
    .then(function(response) {
        console.log(response);

        const kanapName = response.name;
        console.log(kanapName);
        const affichage_kanapName = document.querySelector("#title");
        affichage_kanapName.innerHTML = kanapName

        const kanapColors = response.colors;
        console.log(kanapColors);
        const affichage_kanapColors = document.getElementById("colors").value;
        console.log(affichage_kanapColors);


    })