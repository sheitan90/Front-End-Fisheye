async function getData(){
    return fetch("../../data/photographers.json")
    .then(function(response) {
        return response.json();
      })
      .then(function(myjson) {
        return myjson
      });
}

const data = getData();

export async function getPhotographers(){
    return (await data).photographers
}
export async function getPhotographer(photographerId){
    return (await data).photographers.find((element) => element.id === photographerId)

}
export async function getMedia(sameId){
    return (await data).media.filter(media => sameId === media.photographerId)
}
