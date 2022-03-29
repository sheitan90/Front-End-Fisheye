    import {photographerFactory} from "../factories/photographer.js"
    
      
    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
    return fetch("../../data/photographers.json")
    .then(function(response) {
        return response.json();
      })
      .then(function(myjson) {
        return myjson.photographers
      });
        // et bien retourner le tableau photographers seulement une fois
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const photographers  = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    