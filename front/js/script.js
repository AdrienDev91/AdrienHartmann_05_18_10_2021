function duplic() {
    clone = document.getElementById('items').cloneNode(true);
    clone.id = "test";
}


const dataApi = fetch('http://localhost:3000/api/products');

dataApi.then(async(responseData) => {

    const response = await responseData.json();
    console.log(response[0]);


    try {
        //Récupération

        const name = response[0].name;
        const description = response[0].description;
        const image01 = response[0].imageUrl;
        const altTxt = response[0].altTxt;


        //Affichage

        const affichage_name = document.querySelector('#items h3.productName');
        const affichage_description = document.querySelector('#items p.productDescription');
        const affichage_image01 = document.getElementsByTagName('img');



        affichage_name.innerHTML = name;
        affichage_description.innerHTML = description;
        affichage_image01.insertAdjacentHtml(afterbegin, image01_imageUrl)


        //Images


        const image01_imageUrl = `<img src="${imageUrl}">`;






    } catch (err) {
        console.log(err);
    }

})

.catch((err) => {
    console.log(err);
})