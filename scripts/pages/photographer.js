import {photographerFactory} from "../factories/photographer.js"
import {mediaFactory} from "../factories/media"
//Mettre le code JavaScript lié à la page photographer.html

async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
return fetch("../../data/photographers.json")
.then(function(response) {
    return response.json();
  })
  .then(function(myjson) {
    return myjson.photographers
  });
}

                //recupération des données media
async function getMedia() {
    // Penser à remplacer par les données récupérées dans le json
return fetch("../../data/photographers.json")
.then(function(response) {
    return response.json();
  })
  .then(function(myjson) {
    return myjson.media
  });
}
            //////////////////////////////////////////////////

async function displayData(photographers) {
    const photographersSection = document.querySelector("");

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
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
async function displayMedia(medias) {
    const mediaSection = document.querySelector(".work");

    medias.forEach((media) => {
        const mediaModel = mediaFactory(media);
        const mediaCardDOM = mediaModel.getMediaCard();
        mediaSection.appendChild(mediaCardDOM);
    });
};

async function initMedia() {
    // Récupère les datas des media
    const media  = await getMedia();
    displayMedia(media);
};
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
init();
initMedia();