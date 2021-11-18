var str = location.href;
var url = new URL(str);
var id = url.searchParams.get("id");
//console.log(id);

var data = fetch(`http://localhost:3000/api/products/${id}`)

data
    .then((response) => { return response.json() })
    .then(function(response) {
        //console.log(response);


        const kanapName = response.name;
        //console.log(kanapName);
        const kanapPrice = response.price;
        //console.log(kanapPrice);
        const kanapDescription = response.description;
        //console.log(kanapDescription);
        const kanapImg = response.imageUrl;
        //console.log(kanapImg);
        const kanapImg_altTxt = response.altTxt;
        //console.log(kanapImg_altTxt);
        const kanapColors = response.colors;
        //console.log(kanapColors);

        //---------------------------------------------------------------------------------//

        const affichage_kanapName = document.querySelector("#title");
        const affichage_kanapPrice = document.querySelector("#price");
        const affichage_kanapDescription = document.querySelector("#description");
        const affichage_kanapImg = document.getElementsByTagName("img").item(5).src = `${kanapImg}`;
        //console.log(affichage_kanapImg);

        //---------------------------------------------------------------------------------//

        affichage_kanapName.innerHTML = kanapName
        affichage_kanapPrice.innerHTML = kanapPrice
        affichage_kanapDescription.innerHTML = kanapDescription

        //---------------------------------------------------------------------------------//
        var sectionColors = document.querySelector('#colors')
        var colors = [`${kanapColors[0]}`, `${kanapColors[1]}`, `${kanapColors[2]}`, `${kanapColors[3]}`]

        //  Ajout du code html dans la section à l'aide d'une boucle for

        for (let i = 0; i < colors.length; i++) {
            var color = colors[i]
            sectionColors.innerHTML +=
                `<option value="${color}">${color}</option>`

        }
        //Création objet pour panier
        let optionProduct = {
            name: response.name,
            id: response._id,
            price: response.price,
            colors: response.colors

        };
        console.log(optionProduct);

    })

//fonction pour ajouter un produit au panier quand on clique sur "Ajouter au panier"?
//Puis l'assigner à un addEventListener ?





//----------Local Storage------------//

/*let saveProductLocalStorage = JSON.parse(localStorage.getItem("kanap"));

if (saveProductLocalStorage) {

} else {
    saveProductLocalStorage = [];
    saveProductLocalStorage.push(optionProduct);
    localStorage.setItem("kanap", JSON.stringify())
    console.log(saveProductLocalStorage);
}*/