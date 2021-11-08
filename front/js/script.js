var sectionItems = document.querySelector('#items')

var data = fetch('http://localhost:3000/api/products')

data
    .then((response) => { return response.json() })
    .then((products) => {

        products.forEach((product) => {
            //  Ajout du code html dans la section
            sectionItems.innerHTML += `<a href="./product.html?id=42">
            <article>
              <img src="${product.imageUrl}" alt="Lorem ipsum dolor sit amet, Kanap name1">
              <h3 class="productName">${product.name}</h3>
              <p class="productDescription">${product.description}</p>
            </article>
            </a>`
        })
    })

console.log('start application...');