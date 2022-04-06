export function mediaFactory(data) {
    const { photographerId, image, title, likes, video, price, date } = data;

    const picture = `assets/photographers/${image}`;
    const lecteurVideo = `assets/photographers/${video}`;
    function getMediaCard() {
        const article = document.createElement( 'article' );

        const imageWork = document.createElement('img');
        imageWork.setAttribute("src", picture,);
        imageWork.setAttribute("alt", title );

        const infoPicture = document.createElement("div");
        infoPicture.classList.add("text-picture");

        const h2 = document.createElement( 'h2' );
        h2.textContent = title;
        
        const heart = document.createElement('p');
        heart.textContent = likes + "♥" ;

        article.appendChild(imageWork);
        article.appendChild(infoPicture);

        infoPicture.appendChild(h2);
        infoPicture.appendChild(heart);

        return (article);
    }
    return { getMediaCard }
}