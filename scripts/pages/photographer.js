import {photographerFactory} from "../factories/photographer.js"
import {mediaFactory} from "../factories/media.js"
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

const getUrlId = window.location.search;
const params = (new URL(document.location)).searchParams;
const urlId = params.get('id');

const idNeeded = response.find((element) => element.urlId === urlId);
console.log(idNeeded)

                //recupération des données media
async function getMedia() {
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