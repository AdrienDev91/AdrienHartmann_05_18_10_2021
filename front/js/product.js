var str = location.href;
var url = new URL(str);
const id = url.searchParams.get("id");
//console.log(id);

//Initiallisation panier
var cart = localStorage.getItem('cart')
if (!cart || cart == '') {
    localStorage.setItem('cart', JSON.stringify([]))
    cart = []
}
cart = JSON.parse(cart)




const affichage_kanapName = document.querySelector("#title");
const affichage_kanapPrice = document.querySelector("#price");
const affichage_kanapDescription = document.querySelector("#description");
const affichage_kanapImg = document.getElementsByTagName("img").item(5)
var sectionColors = document.querySelector('#colors')
var AddToCartButton = document.querySelector('#addToCart');

var data = fetch(`http://localhost:3000/api/products/${id}`)

data
    .then((response) => { return response.json() })
    .then((kanap) => {

        affichage_kanapImg.src = kanap.imageUrl;
        affichage_kanapName.innerHTML = kanap.name
        affichage_kanapPrice.innerHTML = kanap.price
        affichage_kanapDescription.innerHTML = kanap.description


        kanap.colors.forEach(color => {
            sectionColors.innerHTML +=
                `<option value="${color}">${color}</option>`
        });

    })


AddToCartButton.addEventListener("click", (event) => {
    event.preventDefault();

    // Récupérer couleur choisie par l'utilisateur
    var colorChoice = document.querySelector('#colors');
    var UserColorChoice = colorChoice.value;


    // Récupérer quantité choisie par l'utilisateur
    var quantityChoice = document.querySelector('#quantity');
    var UserQuantityChoice = quantityChoice.value;

    let product = {
        id: id,
        color: UserColorChoice,
        quantity: UserQuantityChoice,


    };
    console.log(product);

    // Condition qui verifiera la couleur existe dans le panier
    // Si Oui 
    if (product.id, UserColorChoice == true) {
        updateQuantity()

    } // Si Non
    else {
        addToCart(product)
    }



});

function addToCart(product) {
    alert('Product Added to cart ..')
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart))
}

/*function updateQuantity() {
    // recuperer l'item du produit

    // Modifier la qty

    // Enregistrer le panier

}*/