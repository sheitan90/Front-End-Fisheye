import photographerFactory from '../factories/photographer.js';
import mediaFactory from '../factories/media.js';
import { getPhotographer, getMedia } from '../utils/api.js';

const getUrlId = window.location;
const params = (new URL(getUrlId)).searchParams;
const urlId = Number(params.get('id'));

const photographer = await getPhotographer(urlId);
const photographerModel = photographerFactory(photographer);

async function displayData() {
  const photographersSection = document.querySelector('.photograph-header');

  const idUserCardDOM = photographerModel.getUserById();
  photographersSection.appendChild(idUserCardDOM);
}

async function init() {
  displayData();
}

async function displayMedia(medias) {
  const mediaSection = document.querySelector('.work');
  mediaSection.innerHTML = '';
  medias.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const mediaCardDOM = mediaModel.getMediaCard();
    mediaSection.appendChild(mediaCardDOM);
  });
  photographerModel.lightBox();
}

async function initMedia() {
  const media = await getMedia(urlId);
  displayMedia(media);
  photographerModel.getLikePriceDom(media);
  const selectedOption = document.querySelector('.selected-choice');

  selectedOption.addEventListener('change', () => {
    const selectedValue = selectedOption.value;
    if (selectedValue === 'date') {
      media.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (selectedValue === 'title') {
      media.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedValue === 'popularity') {
      media.sort((a, b) => b.likes - a.likes);
    }
    displayMedia(media);
  });
}

init();
initMedia();
