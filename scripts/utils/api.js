async function getData() {
  return fetch('../../data/photographers.json')
    .then((response) => response.json())
    .then((myjson) => myjson);
}

const data = getData();

export async function getPhotographers() {
  return (await data).photographers;
}
export async function getPhotographer(photographerId) {
  return (await data).photographers.find((element) => element.id === photographerId);
}
export async function getMedia(sameId) {
  return (await data).media.filter((media) => sameId === media.photographerId);
}
