var cartItem = document.querySelector("#cart__items");
var cart = localStorage.getItem('cart');
cart = JSON.parse(cart)
    //console.log(cart);



for (let i = 0; i < cart.length; i++) {
    //console.log(cart.length);
    const product = cart[i];
    //console.log(product);
    cartItem.innerHTML += `<article class="cart__item" data-id="${product.id}">
            <div class="cart__item__img">
              <img src="${product.image}" alt="">
            </div>
            <div class="cart__item__content">
              <div class="cart__item__content__titlePrice">
                <h2>${product.name}</h2>
                <p>${product.price}</p>
              </div>
              <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                  <p>Qté : </p>
                  <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${product.quantity}">
                </div>
                <div class="cart__item__content__settings__delete">
                  <p class="deleteItem">Supprimer</p>
                </div>
              </div>
            </div>
          </article>`

}
let deleteItem = document.querySelectorAll(".deleteItem");
//console.log(deleteItem);

for (let j = 0; j < cart.length; j++) {

    deleteItem[j].addEventListener("click", (event) => {
        event.preventDefault();

        let selectIdToDelete = cart[j].id;
        localStorage.removeItem()

    })
}