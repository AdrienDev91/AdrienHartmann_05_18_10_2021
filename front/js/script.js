var sectionItems = document.querySelector('#items')


var data = fetch('http://localhost:3000/api/products')

data
    .then((response) => { return response.json() })
    .then((products) => {

        products.forEach((product) => {
            //  Ajout du code html dans la section
            sectionItems.innerHTML += `<a href="./product.html?id=${product._id}">
            <article>
              <img src="${product.imageUrl}" alt="${product.altTxt}">
              <h3 class="productName">${product.name}</h3>
              <p class="productDescription">${product.description}</p>
            </article>
            </a>`
        })

    })