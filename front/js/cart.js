var cartItem = document.querySelector("#cart__items");

var cart = localStorage.getItem('cart');
cart = JSON.parse(cart)
console.log(cart);

var data = fetch(`http://localhost:3000/api/products`)

data
    .then((response) => { return response.json() })
    .then((kanap) => {


        for (let i = 0; i < cart.length; i++) {
            const product = cart[i];
            //console.log(cart.length);
            cartItem.innerHTML += `<article class="cart__item" data-id="${product.id}">
            <div class="cart__item__img">
              <img src="" alt="IMAGE">
            </div>
            <div class="cart__item__content">
              <div class="cart__item__content__titlePrice">
                <h2>NOM</h2>
                <p>PRIX</p>
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

    })