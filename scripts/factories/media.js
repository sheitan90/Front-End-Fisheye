export function mediaFactory(data) {
    const { photographerId, image, title, likes, price, date } = data;

    const picture = `assets/photographers/${image}`;

    function getMediaCard() {
        const article = document.createElement( 'article' );
        const imageWork = document.createElement( 'img');
        imageWork.setAttribute('alt', title);
        const h2 = document.createElement( 'h2' );
        h2.textContent = title;
        h2.setAttribute("aria-labelledby", title);
        const heart = document.createElement('span');
        heart.textContent = likes;
        heart.setAttribute("aria-labelledby", likes);
        article.appendChild(h2);
        console.log(h2)
        return (article);
    }
    return { photographerId, image, title, likes, price, date, getMediaCard }
}