import {photographerFactory} from "../factories/photographer.js"
import {mediaFactory} from "../factories/media.js"
import {getPhotographer, getMedia, getPhotographers} from "../utils/api.js"

const getUrlId = window.location;
const params = (new URL(getUrlId)).searchParams;
const urlId = Number(params.get('id'));


const photographer = await getPhotographer(urlId);



async function displayData(photographer) {
    const photographersSection = document.querySelector(".photograph-header");
    
        const photographerModel = photographerFactory(photographer);
        const idUserCardDOM = photographerModel.getUserById();
        console.log(idUserCardDOM)
        photographersSection.appendChild(idUserCardDOM);
};

async function init() {
    displayData(photographer);
};

async function displayMedia(medias) {
    const mediaSection = document.querySelector(".work");

    medias.forEach((media) => {
        const mediaModel = mediaFactory(media);
        const mediaCardDOM = mediaModel.getMediaCard();
        mediaSection.appendChild(mediaCardDOM);
    });
};

async function initMedia() {
    const media  = await getMedia(urlId);
    console.log(media)
    displayMedia(media);
};

init();
initMedia();